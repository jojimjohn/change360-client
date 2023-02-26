import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const hasPlan = true; // TODO: check if the user has a plan

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Dashboard
          </Typography>
          {hasPlan ? (
            <>
              <Typography variant="h6" gutterBottom>
                Your Meal and Nutrition Plans
              </Typography>
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
              <Button variant="contained" component={Link} to="/plan-info">
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
