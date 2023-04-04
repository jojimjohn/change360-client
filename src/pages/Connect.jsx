import React, { useState } from 'react';
import { Button, Modal, Typography } from '@mui/material';
import Web3 from 'web3';
import { useNavigate } from 'react-router-dom';

const Connect = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [authToken, setAuthToken] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();

  const connectWallet = async () => {
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
    const accounts = await web3.eth.getAccounts();
    const walletAddress = accounts[0];

    // Store wallet address in local storage
    localStorage.setItem('walletAddress', walletAddress);

    // TODO: Authenticate user on backend and generate auth token
    const authToken = '12345';

    // Store auth token in local storage
    localStorage.setItem('authToken', authToken);

    // Navigate to secure page
    navigate('/secure-page');
  };

  const disconnectWallet = () => {
    // Remove wallet address and auth token from local storage
    localStorage.removeItem('walletAddress');
    localStorage.removeItem('authToken');

    // Navigate to main page
    navigate('/');
  };

  return (
    <>
      <Button onClick={() => setModalVisible(true)}>Connect to Web3 Wallet</Button>
      <Modal
        open={modalVisible}
        onClose={() => setModalVisible(false)}
        aria-labelledby="web3-wallet-modal-title"
        aria-describedby="web3-wallet-modal-description"
      >
        <div style={{ backgroundColor: 'white', padding: 16 }}>
          <Typography variant="h6" id="web3-wallet-modal-title" gutterBottom>
            Connect to Web3 Wallet
          </Typography>
          <Typography variant="body1" id="web3-wallet-modal-description" gutterBottom>
            {/* Web3 wallet connection modal */}
          </Typography>
          <Button variant="outlined" onClick={() => setModalVisible(false)}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={connectWallet} style={{ marginLeft: 16 }}>
            Connect
          </Button>
        </div>
      </Modal>
      {walletAddress && authToken && (
        <Button onClick={disconnectWallet}>Disconnect Web3 Wallet</Button>
      )}
    </>
  );
};

export default Connect;
