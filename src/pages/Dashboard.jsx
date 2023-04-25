import React, { useState, useEffect } from 'react';
import { Container, Paper, Box, Button, Grid, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Dashboard = ({ isLoggedIn, apiUrl }) => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [mealPlan, setMealPlan] = useState(null); // TODO: check if the user has a plan
  const [user, setUser] = useState(null);


  return (
    <Container maxWidth="lg" sx={{ marginTop: '100px' }}>
    <Typography variant="h4" gutterBottom>
      Dashboard
    </Typography>
    <Grid container spacing={3}>
    
  
      {/* Chart */}
      <Grid item xs={12} md={8} lg={9}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240 }}>
          {/* Insert your chart component here */}
          <Typography variant="h6">Your NFT's</Typography>
        </Paper>
      </Grid>
      {/* Recent Deposits */}
      <Grid item xs={12} md={4} lg={3}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240 }}>
          {/* Insert your recent deposits component here */}
          <Typography variant="h6">Rewards</Typography>
        </Paper>
      </Grid>
  
      {/* Recent Orders */}
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          {/* Insert your recent orders component here */}
          <Typography variant="h6">Recent Orders</Typography>
        </Paper>
      </Grid>
    </Grid>
  </Container>
  
    
  );
};

export default Dashboard;
