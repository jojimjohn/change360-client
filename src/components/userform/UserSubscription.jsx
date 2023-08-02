import { useEffect, useState, useContext } from 'react';
import { Button } from '@mui/material';
import StripePaymentPage from '../../pages/PlanInfo';
import AuthForm from '../AuthForm';
import { useAuth } from '../../utils/auth';
import {
  Typography,
} from "@mui/material";

const UserSubscription = ({ userInfo, handleNext, apiUrl }) => {
  //const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [hasEnoughCredits, setHasEnoughCredits] = useState(false);
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);
  const { user} = useAuth();


  // checking if the wallet is connected
  // useEffect(() => {
  // //  const walletAddress = ''; //localStorage.getItem("address");
  //   if (walletAddress) {
  //     setIsWalletConnected(true);
  //     // Fetch user details from your backend, using the address as the identifier
  //     // fetch(`${apiUrl}/users?address=${walletAddress}`)
  //     //   .then(res => res.json())
  //     //   .then(data => {
  //     //     setHasEnoughCredits(data.credits >= 3);
  //     //     handleNext({
  //     //       ...userInfo,
  //     //       credits: data.credits,
  //     //     });
  //     //   })
  //     //   .catch(err => console.error(err));
  //   } else {
  //     setIsWalletConnected(false);
  //   }
  // }, [apiUrl, handleNext]);

  // useEffect(() => {
 
  //   if (user) {
  //     const fetchData = async () => {
  //       try {
  //           const response = await fetch(`${apiUrl}/users`, {
  //             method: 'POST',
  //             body: userInfo,
  //             headers: { 'Content-Type': 'application/json' },
  //           });
        
  //           if (!response.ok) {
  //               throw new Error(`Something went wrong. Please check if you have entered your information correctly and try again. ${<Link to="/user" style={{ textDecoration: 'none', color: '#FFF' }}>Reload this page.</Link>}`);

  //             return;
  //           }
        
  //           const planData = await response.json();
  //           setStatus(planData.status);
  //           setError(null);
  //           // If the user is authenticated, set the profile state
  //           if(planData.user) {
  //               setProfile(planData.user); 
  //           }
       
  //         } catch (error) {
  //               setError(error.message);
  //           }

  //     };
  //     fetchData();
  //   }
  // }, [user]);

  if (error) {
    return <Typography color="error">{error}</Typography>;
  } else if (user) {
    return <StripePaymentPage apiUrl={apiUrl} />;
  } else {
    return <AuthForm />;
  }

 };

export default UserSubscription;
