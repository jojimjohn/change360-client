import React, { createContext, useContext, useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { InjectedConnector } from "@web3-react/injected-connector";
import PaymentABI from "../../contracts/abi.json";
import { USDT_TOKEN_ADDRESS, CONTRACT_ADDRESS, BSC_CHAIN_ID } from "./constants";
import { usdtInterface } from "./utils";
import { toast } from "react-toastify";
import { CompressOutlined } from "@mui/icons-material";
import { saveAuthToken } from '../../utils/auth';

const WalletContext = createContext();

const injectedConnector = new InjectedConnector({
  supportedChainIds: [BSC_CHAIN_ID],
});

export const WalletProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState(localStorage.getItem("walletAddress"));
  const [user, setUser] = useState(localStorage.getItem("walletAddress"));
  const { active, account, library, activate, deactivate } = useWeb3React();
  const [isTokenApproved, setIsTokenApproved] = useState(false);

  const [bnbBalance, setBNBBalance] = useState(localStorage.getItem("bnbBalance") || 0);
  const [usdtBalance, setUSDTBalance] = useState(localStorage.getItem("usdtBalance") || 0);
  const [bnbPrice, setBNBPrice] = useState(localStorage.getItem("bnbPrice") || 0);
  
    const erc20Abi = [
      // Some ERC20 functions
      "function balanceOf(address owner) view returns (uint256)",
      "function decimals() view returns (uint8)"
    ];

    useEffect(() => {
      if (walletAddress) {
        (async () => {
          const isConnected = await handleConnect();
          if (isConnected) {
            handleLogin(walletAddress);
          }
        })();
        checkApproval(true);
      }
    }, [walletAddress]);

  
  useEffect(() => {
    if (library) {
      handleConnect();
      const signer = library.getSigner();
      signer.getAddress().then((address) => {
        setWalletAddress(address);
        localStorage.setItem("walletAddress", address);
        fetchBalancesAndPrice();
        fetchBNBPrice();
      });

    }
  }, [library]);

  useEffect(() => {
    handleChkNetwork();
   // fetchBalancesAndPrice();
  }, [active]);
  
  useEffect(() => {
   // fetchBalancesAndPrice();
  }, [account]);
  
  
  const fetchBNBPrice = async () => {
    try {
      const response = await fetch(
        "https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT"
      );
      const data = await response.json();
      setBNBPrice(parseFloat(data.price).toFixed(2));

      return data.price;
    } catch (error) {
      console.error("Failed to fetch BNB price:", error);
    }
  };
  
  const fetchBalancesAndPrice = async () => {
    if (!active || !walletAddress) {
      return;
    }
  
    // Fetch BNB balance
    const bnbBalance = await library.getBalance(walletAddress);
    setBNBBalance(ethers.utils.formatEther(bnbBalance));


    // Fetch USDT balance
    const signer = library.getSigner();
    const usdtContract = new ethers.Contract(USDT_TOKEN_ADDRESS, erc20Abi, signer);
    const usdtBalance = await usdtContract.balanceOf(walletAddress);
    setUSDTBalance(ethers.utils.formatUnits(usdtBalance, 18)); 
  
    // Fetch BNB price
    const bnbPrice = await fetchBNBPrice();
  };
  

  const checkApproval = async (autoApprove = false) => {
    if (!active) {
      return;
    }
  
    const signer = library.getSigner();
    const token = new ethers.Contract(USDT_TOKEN_ADDRESS, usdtInterface, signer);
    const allowance = await token.allowance(walletAddress, CONTRACT_ADDRESS);

    if (allowance > 0) {
      setIsTokenApproved(true);
    } else {
      setIsTokenApproved(false);
      if (autoApprove) {
        await approveToken(); // Call the approveToken function if autoApprove is true
      }
    }
  };
  

  const approveToken = async () => {
    if (!active) {
      toast.error("Please connect your wallet first.");
      return;
    }

    const signer = library.getSigner();
    const usdt = new ethers.Contract(USDT_TOKEN_ADDRESS, PaymentABI, signer);

    const amountToApprove = ethers.utils.parseUnits("1000", 18);
    const data = usdtInterface.encodeFunctionData("approve", [
      CONTRACT_ADDRESS,
      amountToApprove,
    ]);
    const tx = await signer.sendTransaction({
      to: USDT_TOKEN_ADDRESS,
      data,
    });
    await tx.wait();

    setIsTokenApproved(true);
    toast.success("Successfully approved the transfer.");
  };

  const removeApproval = async () => {
    if (!active) {
      toast.error("Please connect your wallet first.");
      return;
    }
  
    const signer = library.getSigner();
    const usdt = new ethers.Contract(USDT_TOKEN_ADDRESS, PaymentABI, signer);
  
    const data = usdtInterface.encodeFunctionData("approve", [
      CONTRACT_ADDRESS,
      0,
    ]);
    const tx = await signer.sendTransaction({
      to: USDT_TOKEN_ADDRESS,
      data,
    });
    await tx.wait();
  
    setIsTokenApproved(false);
    toast.success("Successfully removed the token approval.");
  };


  const buyPlan = async () => {
    const price = ethers.utils.parseUnits("0.01", 18); // replace with actual price
    const signer = library.getSigner();

    if (!active) {
      toast.error("Please connect your wallet first.");
      return;
    }

    const token = new ethers.Contract(USDT_TOKEN_ADDRESS, usdtInterface, signer);
    const allowance = await token.allowance(walletAddress, CONTRACT_ADDRESS);

    if (allowance > 0 && allowance > price) {
      

      const paymentContract = new ethers.Contract(
        CONTRACT_ADDRESS,
        PaymentABI,
        signer
      );

      const gasLimit = await paymentContract.estimateGas.buyPlan();
      const tx = await paymentContract.buyPlan({ gasLimit });
      await tx.wait();

      toast.success("Successfully purchased the meal plan.");

    } else {
      setIsTokenApproved(false);
         toast.error("Please approve the USDT token first.");
        await approveToken(); // Call the approveToken function if autoApprove is true

    }    
  };

  
  const handleChkNetwork = async () => {
    try {
    const provider = await window.ethereum;
    if (provider) {

      window.ethereum.on('chainChanged', (chainId) => {
        window.location.reload()
      })

      const networkId = await provider.request({ method: 'net_version' });
      if (Number(networkId) !== BSC_CHAIN_ID) { 
        handleDisconnect();
        toast.error("Incorrect network");
      }
    }

  } catch (error) {
    console.error("Failed to connect:", error);
  }
};

const handleLogin = async (walletAddress) => {
  try {
    const response = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ address: walletAddress }),
    });
    
    if (!response.ok) {
      throw new Error(`Failed to get token: ${response.statusText}`);
    }

    const data = await response.json();

    if (data.token) {
      saveAuthToken(data.token, data.expiresIn);
      setUser(walletAddress); 
    } else {
      console.error('Failed to get token:', data);
    }
  } catch (error) {
    console.error('Failed to login:', error);
  }
};

  const handleConnect = async () => {
      try {
      if (!active) {
        await activate(injectedConnector);
      }

      const provider = await window.ethereum;
      if (provider) {
        const networkId = await provider.request({ method: 'net_version' });
        if (Number(networkId) !== BSC_CHAIN_ID) { 
          handleDisconnect();
          toast.error("Incorrect network");
        }
      }
      fetchBalancesAndPrice();
      return true; // Return true if the connection is successful
    } catch (error) {
      console.error("Failed to connect:", error);
      return false; // Return false if there's an error during connection
    }
  };


  const handleDisconnect = () => {
    deactivate();
    setWalletAddress(null);
    setBNBBalance(0);
    setUSDTBalance(0);
    setBNBPrice(0);
    localStorage.removeItem("walletAddress");
    localStorage.removeItem("bnbBalance");
    localStorage.removeItem("usdtBalance");
    localStorage.removeItem("bnbPrice");
  };

  function shortenAddress(address, chars = 4) {
    if (!address) return '';
    const beginning = address.slice(0, chars + 2);
    const ending = address.slice(-chars);
    return `${beginning}...${ending}`;
  }

  return (
    <WalletContext.Provider
    value={{
      walletAddress,
      setWalletAddress,
      isTokenApproved,
      setIsTokenApproved,
      buyPlan,
      handleConnect,
      handleDisconnect,
      approveToken,
      removeApproval,
      active,
      bnbBalance,
      usdtBalance,
      bnbPrice,
      shortenAddress
    }}
    
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  return useContext(WalletContext);
};
