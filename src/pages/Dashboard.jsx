import React, { useState, useEffect } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';

import UserInteract from './userInteract';

const Dashboard = ({ isLoggedIn, apiUrl }) => {
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
      //  console.log(user); //not getting user info from database - check again.

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
    <Box className="relative max-w-6xl mx-auto h-0" sx={{ flexGrow: 1, p: 3, minHeight:500 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom className="text-center">
            Dashboard
          </Typography>
          {mealPlan ? (
            <>
              <Typography variant="h6" gutterBottom className="text-center">
                Your Meal and Nutrition Plans
              </Typography>
              <Box sx={{ mb: 3 }}>
                <UserInteract address={address} apiUrl={apiUrl}/>
              </Box>
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
      </Grid>
    </Box>
  );
};

export default Dashboard;
