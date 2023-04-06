import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';

const WelcomeScreen = ({ connectWallet, apiUrl }) => {

  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

      const address = JSON.stringify({
          address: '0x3c51C5bBa1111aA67Bd04D3fB7C282B49Cc32c7f'
      });

      try {
          // Send a POST request to verify user
          const response = await fetch(`${apiUrl}/login`, {
            method: 'POST',
            body: address,
            headers: { 'Content-Type': 'application/json' },
          });
      
          if (!response.ok) {
              throw new Error(`Something went wrong. Please check if you have entered your information correctly and try again.`);

            return;
          }
      
          const data = await response.json();
      
            // Store JWT token in local storage or cookie
           localStorage.setItem('token', data.token);
           localStorage.setItem('address', address);

          // Redirect user to dashboard page
          window.location.href = '/';

          setError(null);
      
     
        } catch (error) {
              setError(error.message);

        }
      
      };

  return (
    <div style={{ textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Change360 - Personal AI fitness trainer
      </Typography>
      <Typography variant="body1" gutterBottom>
        Welcome! Please connect your wallet to continue.
      </Typography>
      {/* <Button variant="contained" onClick={connectWallet}>
        Connect Wallet
      </Button> */}
      <Button variant="contained" onClick={handleSubmit}>
        Connect Wallet
      </Button>
    </div>
  );

}

export default WelcomeScreen;
