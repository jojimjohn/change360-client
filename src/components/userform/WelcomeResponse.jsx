import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Card,
  CardHeader,
  CardContent,
  Typography,
  TextField,
  Skeleton,
  Avatar 
} from "@mui/material";
import { Link } from "react-router-dom";

import logo from '../../images/logo.png';

const WelcomeResponse = ({ userId, handleNext, apiUrl  }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  localStorage.removeItem('paymentIntentId');  // Clear payment intent id from local storage
  
  const submitHandler = (event) => {
    event.preventDefault();
   
    // Move to the next step
    handleNext(response.userId);
  };

  useEffect(() => {
    if (userId) {
      const fetchData = async () => {
        setIsLoading(true);

        try {
            // Get the welcome message from the OpenAI API
            const response = await fetch(`${apiUrl}/ai/init`, {
              method: 'POST',
              body: JSON.stringify({ userId: userId, }),
              headers: { 'Content-Type': 'application/json' },
            });
        
            if (!response.ok) {
                throw new Error(`Something went wrong. Please check if you have entered your information correctly and try again. ${<Link to="/dashboard" style={{ textDecoration: 'none', color: '#FFF' }}>Reload this page.</Link>}`);

              return;
            }
        
            const planData = await response.json();
        
            //setWelcomeMessage(planData);
            setIsLoading(false);
            setResponse(planData);
            setError(null);
        
       
          } catch (error) {
                setError(error.message);
              //  setResponse(null);
                setIsLoading(false);
            }
        
            setIsLoading(false);

      };
      fetchData();
    }
  }, [userId]);

  return (
    <Box className="relative max-w-6xl mx-auto" textAlign='center' m="auto" sx={{ pt: 2, pb: 2 }}>
      <Box component="form" onSubmit={submitHandler} sx={{ mt: 2 }}>
       
      {isLoading || response != null || error != null? (

<Card sx={{ m: 2 }}>
   <CardHeader
   sx={{
     display: 'flex',
     alignItems: 'center',
     justifyContent: 'space-between',
     p: 2,
     bgcolor: '#0072c6',
     borderBottom: '1px solid #dfe2e1',
   }}
   avatar={
     isLoading ? (
       <Skeleton
         animation="wave"
         variant="circular"
         width={40}
         height={40}
       />
     ) : (
       <Avatar
         alt="C.H.A.N.G.E. 360"
         src={logo}
         sx={{ width: '40px', height: '40px', borderRadius: '0.2rem' }}
       >
         C
       </Avatar>
     )
   }
   title={
     isLoading ? (
       <Skeleton
         animation="wave"
         height={10}
         width="80%"
         style={{ marginBottom: 6 }}
       />
     ) : (
       <Typography variant="h6">C.H.A.N.G.E. 360</Typography>
     )
   }
 />
   <CardContent>
     {isLoading ? (
       <React.Fragment>
         <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
         <Skeleton animation="wave" height={10} width="80%" />
       </React.Fragment>
     ) : (
     <>
       {error && <Typography color="error">{error}</Typography>}
       {response && (
     <Box textAlign='justify' sx={{ mt: 2 }}>
       <Typography variant="body2" color="white" component="p">
       {response.message.split('\n\n').map((text, index) => (
         <p key={index} style={{marginTop: '1em', marginBottom: '1em'}}>{text}</p>
       ))}
       </Typography>
   
         <br/>
         <Box textAlign='center'>
           <Button type="submit" variant="contained" style={{ backgroundColor: "#bf5e38", color: "#ffffff", fontSize: "1em" }}>
             Next - Provide Diet and Nutrition Info
           </Button>
         </Box>

     </Box>    
     )}
   </>
     )}
   </CardContent>
</Card>
) :('') }
      </Box>
    </Box>
  );
};

export default WelcomeResponse;
