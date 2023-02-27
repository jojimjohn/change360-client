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

const WelcomeResponse = ({ userInfo, handleNext }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const submitHandler = (event) => {
    event.preventDefault();
   
    // Move to the next step
    handleNext(response.userId);
  };

  useEffect(() => {
 
    if (userInfo) {
      const fetchData = async () => {
        setIsLoading(true);

        try {
            // Send a POST request to the backend to save the user's dietary information
            // Get the welcome message from the OpenAI API
            //${process.env.REACT_APP_BASE_API_URL}
            //https://change360-v1.herokuapp.com
            //https://change360-v1.onrender.com/
            const response = await fetch(`https://change360-v1.onrender.com/api/users`, {
              method: 'POST',
              body: userInfo,
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
  }, [userInfo]);

  return (
    <Box sx={{ p: 2, width: { xl: "80%" } }} m="auto">
      <Typography variant="h5">Step 2: Welcome Response</Typography>
      <Box component="form" onSubmit={submitHandler} sx={{ mt: 2 }}>
       
      {isLoading || response != null || error != null? (

<Card sx={{ maxWidth: '80%', m: 2 }}>
   <CardHeader
   sx={{
     display: 'flex',
     alignItems: 'center',
     justifyContent: 'space-between',
     p: 2,
     bgcolor: '#f5f5f5',
     borderBottom: '1px solid #ccc',
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
         alt="Change 360"
         src="../../assets/logo_small.jpg"
         sx={{ mr: 2 }}
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
       <Typography variant="h6">Change 360</Typography>
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
     <Box sx={{ mt: 2 }}>
       <Typography variant="body2" color="text.secondary" component="p">
       {response.message.split('\n\n').map((text, index) => (
         <p key={index}>{text}</p>
       ))}
       </Typography>
   
    
           <Button type="submit" variant="contained" color="primary">
             Next - Provide Diet and Nutrition Info
           </Button>

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
