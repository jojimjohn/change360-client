import React, { createContext, useContext, useState, useEffect } from 'react';

const RewardPointsContext = createContext(null);
let _addPointsFn;

export function addRewardPoints(actionType, points) {
  if (_addPointsFn) {
    _addPointsFn(actionType, points);
  } else {
    console.warn('RewardPointsProvider not initialized.');
  }
}
  
export const RewardPointsProvider = ({ children, userId, apiUrl }) => {
  const [points, setPoints] = useState(0);
  const [totalPoints, settotalPoints] = useState(0);
  const [claimedRewards, setClaimedRewards] = useState([]);

  useEffect(() => {
   fetchRewardPoints();
  }, [userId]);

  const fetchRewardPoints = async () => {
    try {
      const response = await fetch(`${apiUrl}/reward_points/${userId}`);
      const data = await response.json();
      console.log(data.totalPoints);
      settotalPoints(data.totalPoints);
      setClaimedRewards(data.claimedRewards);
    } catch (err) {
      console.error('Error fetching reward points:', err);
    }
  };

  const addPoints = async (actionType, points) => {
    try {
      const response = await fetch(`${apiUrl}/reward_points/${userId}`);
      const data = await response.json();
      const claimedRewards = data.claimedRewards;
      const claimedReward = claimedRewards.find((reward) => reward.actionType === actionType);
      if (claimedReward) {
        console.warn(`Reward already claimed for actionType: ${actionType}`);
        return;
      }
      await fetch(`${apiUrl}/reward_points`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, actionType, points }),
      });
      fetchRewardPoints();
    } catch (err) {
      console.error('Error adding reward points:', err);
    }
  };
  

  _addPointsFn = addPoints;

  return (
    <RewardPointsContext.Provider value={{ totalPoints, claimedRewards }}>
          {children}
    </RewardPointsContext.Provider>
  );
};

export const useRewardPoints = () => {
  const context = useContext(RewardPointsContext);

  if (!context) {
    throw new Error(
      'useRewardPoints must be used within a RewardPointsProvider'
    );
  }

  return context;
};
