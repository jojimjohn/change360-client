import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import StripePaymentPage from '../../pages/PlanInfo';
import AuthForm from '../AuthForm';
import {
  Typography,
} from "@mui/material";

const UserSubscription = ({ userInfo, handleNext, apiUrl }) => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [hasEnoughCredits, setHasEnoughCredits] = useState(false);

  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  // checking if the wallet is connected
  useEffect(() => {
    const walletAddress = ''; //localStorage.getItem("address");
    if (walletAddress) {
      setIsWalletConnected(true);
      // Fetch user details from your backend, using the address as the identifier
      // fetch(`${apiUrl}/users?address=${walletAddress}`)
      //   .then(res => res.json())
      //   .then(data => {
      //     setHasEnoughCredits(data.credits >= 3);
      //     handleNext({
      //       ...userInfo,
      //       credits: data.credits,
      //     });
      //   })
      //   .catch(err => console.error(err));
    } else {
      setIsWalletConnected(false);
    }
  }, [apiUrl, handleNext]);

  useEffect(() => {
 
    if (userInfo) {
      const fetchData = async () => {
        try {
            const response = await fetch(`${apiUrl}/users`, {
              method: 'POST',
              body: userInfo,
              headers: { 'Content-Type': 'application/json' },
            });
        
            if (!response.ok) {
                throw new Error(`Something went wrong. Please check if you have entered your information correctly and try again. ${<Link to="/user" style={{ textDecoration: 'none', color: '#FFF' }}>Reload this page.</Link>}`);

              return;
            }
        
            const planData = await response.json();
           // console.log(planData);
            setStatus(planData.status);
            setError(null);
        
       
          } catch (error) {
                setError(error.message);
            }

      };
      fetchData();
    }
  }, [userInfo]);

  if (!isWalletConnected) {
  //  return <AuthForm />;
  }

  if (!hasEnoughCredits && status == 'success') {
    // Show Stripe payment page
    return <StripePaymentPage apiUrl={apiUrl} />;
  }

  return (
     <>
      {error && <Typography color="error">{error}</Typography>}
    </>
  )

 };

export default UserSubscription;
