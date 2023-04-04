import React from 'react';
import { useRewardPoints } from '../components/RewardPointsModule';

const UserPoints = () => {
  const { points } = useRewardPoints();

  return (
    <div>
      <h2>Your Reward Points</h2>
      <p>{points} points</p>
    </div>
  );
};

export default UserPoints;
