import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

// import Dashboard from './Dashboard';
// import UpgradePlan from './UpgradePlan';
// import AdditionalPlan from './AdditionalPlan';
// import NewPlan from './NewPlan';
// import NotFound from './NotFound';

const UserOptions = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Choose an option
      </Typography>
      <Outlet />
    </Box>
  );
};

export default UserOptions;
