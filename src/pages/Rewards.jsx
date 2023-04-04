import React from 'react';

//import { Box, Button, Typography } from '@mui/material';
import RewardsView from '../components/rewards/RewardsView';
import { RewardPointsProvider } from '../components/rewards/RewardsProvider';

const Rewards = ({ userId, apiUrl }) => {
  return (
    <RewardPointsProvider userId={userId} apiUrl={apiUrl}>
        <RewardsView />   
    </RewardPointsProvider>
  );
};

export default Rewards;