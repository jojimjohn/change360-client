import React, { createContext, useContext, useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { InjectedConnector } from "@web3-react/injected-connector";
import PaymentABI from "../abi.json";
import { USDT_TOKEN_ADDRESS, CONTRACT_ADDRESS, BSC_TESTNET_CHAIN_ID } from "./constants";
import { usdtInterface } from "./utils";
import { toast } from "react-toastify";

const WalletContext = createContext();

const injectedConnector = new InjectedConnector({
  supportedChainIds: [BSC_TESTNET_CHAIN_ID],
});

export const WalletProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState(null);
  const { active, account, library, activate, deactivate } = useWeb3React();
  const [isTokenApproved, setIsTokenApproved] = useState(false);

  useEffect(() => {
    if (walletAddress) {
      checkApproval(true); // Pass true to automatically approve the token
    }
  }, [walletAddress]); 

  useEffect(() => {
    if (library) {
      const signer = library.getSigner();
      signer.getAddress().then((address) => {
        setWalletAddress(address);
        localStorage.setItem("walletAddress", address);
      });
    }
  }, [library]);
  

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

  const handleConnect = async () => {
      try {
      if (!active) {
        await activate(injectedConnector);
      }

      const provider = await window.ethereum;
      if (provider) {
        const networkId = await provider.request({ method: 'net_version' });
        if (Number(networkId) !== 97) { // Check if network is BSC Testnet
          handleDisconnect();
          toast.error("Incorrect network");
        }
      }

      // if (library) {
      //   console.log('dsf');
      //   const signer = library.getSigner();
      //   const address = await signer.getAddress();
      //   setWalletAddress(address);
      //   localStorage.setItem("walletAddress", address);
      // }
    } catch (error) {
      console.error("Failed to connect:", error);
    }
  };
  

  const handleDisconnect = () => {
    deactivate();
    setWalletAddress(null);
    localStorage.removeItem("walletAddress");
  };

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
      active
    }}
    
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  return useContext(WalletContext);
};
