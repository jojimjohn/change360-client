import React, { useState, useEffect } from 'react';
import { Container, Paper, Box, Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserInteract from './userInteract';

//const PlanInfo = () => {
const PlanInfo = ({ handleResponse, apiUrl }) => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [mealPlan, setMealPlan] = useState(null); // TODO: check if the user has a plan
  const [user, setUser] = useState(null);

  // const address = JSON.parse(localStorage.getItem('address')).address;
  const address = '0x3c51C5bBa1111aA67Bd04D3fB7C282B49Cc32c7f';
  useEffect(() => {

    // Retrieve user information and preferences
    const fetchUser = async () => {
      try {

        const response = await axios.get(`${apiUrl}/users/auth/${address}`);

        const userInfo = response.data.userInfo ;
        setUser(userInfo); // Set the user state variable with the response data

        setMealPlan(address); // TEMP storing some value - correct it
        setError(null);


      } catch (error) {
            setError(error.message);
            console.error(error);
        }


    };

    fetchUser();
  }, []);
  
  const handlePurchasePlan = () => {
    navigate('/user/01/buy');
  }

  return (

    <Container maxWidth="lg" sx={{ marginTop: '100px' }}>
    <Typography variant="h4" gutterBottom>
      Meal Plans
    </Typography>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        {mealPlan ? (
          <>
            <Typography variant="h8" gutterBottom className="text-left" style={{ marginBottom: '30px' }}>
              Welcome back! We're glad to see you again. Your commitment to improving your nutrition and following your meal plan is commendable. Let's discuss your progress and any challenges you've faced since our last conversation. We're here to support and guide you as you continue on your journey to better health and well-being.
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Box sx={{ mb: 3 }} style={{ marginTop: '30px' }}>
                  <UserInteract address={address} apiUrl={apiUrl} />
                </Box>
              </Grid>
            </Grid>
            {/* TODO: display the user's meal and nutrition plans */}
          </>
        ) : (
          <>
            <Typography variant="h6" gutterBottom>
              Purchase a Meal and Nutrition Plan
            </Typography>
            <Box sx={{ mb: 3 }}>
              <Typography variant="body1" gutterBottom>
                You don't have a meal and nutrition plan yet. Purchase one now to get started on your health journey.
              </Typography>
            </Box>
            <Button variant="contained" color="primary" onClick={handlePurchasePlan}>
              Purchase Plan
            </Button>
          </>
        )}
      </Grid>

      <Grid item xs={12} sx={{minHeight: '30vh'}}>
      <>
            <Typography variant="h6" gutterBottom>
              Purchase a Meal and Nutrition Plan
            </Typography>
            <Box sx={{ mb: 3}}>
              <Typography variant="body1" gutterBottom>
                You don't have a meal and nutrition plan yet. Purchase one now to get started on your health journey.
              </Typography>
            </Box>
            <Button variant="contained" color="primary" onClick={handlePurchasePlan}>
              Purchase Plan
            </Button>
          </>
      </Grid>

      </Grid>
  </Container>

   
  );
};

export default PlanInfo;
