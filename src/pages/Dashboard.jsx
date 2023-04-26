import React, { useState, useEffect } from 'react';
import { Container, Paper, Box, Button, Grid, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { useRewardPoints } from '../components/rewards/RewardsProvider';

const Dashboard = ({ isLoggedIn, apiUrl }) => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [mealPlan, setMealPlan] = useState(null); // TODO: check if the user has a plan
  const [user, setUser] = useState(null);

  const { totalPoints } = useRewardPoints();

  return (
    <Container maxWidth="lg" sx={{ marginTop: '100px' }}>
    <Typography variant="h4" gutterBottom>
      Dashboard
    </Typography>
    <Grid container spacing={3}>
    
  
      {/* NFTS */}
      <Grid item xs={12} sm={8} md={9}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240 }}>
         
          <Typography variant="h6">Your NFT's</Typography>
        </Paper>
      </Grid>
       {/* Rewards earned */}
       <Grid item xs={12} sm={4} md={3}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240 }}>
          <Typography variant="h6" textAlign="center">
            Rewards
          </Typography>
          <Typography variant="h1" textAlign="center" fontWeight="bold" sx={{ marginBottom: '20px', marginTop: '20px' }}>
            {totalPoints}
          </Typography>
          <Typography variant="subtitle1" textAlign="center">
            Points Earned
          </Typography>
        </Paper>
      </Grid>
  
      {/* Recent Orders */}
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
       
          <Typography variant="h6">Recent Orders</Typography>
        </Paper>
      </Grid>
    </Grid>
  </Container>
  
    
  );
};

export default Dashboard;
