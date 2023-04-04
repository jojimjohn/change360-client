import React from 'react';
import { Box, Typography, Divider, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { useRewardPoints } from './RewardsProvider';

const RewardsView = () => {
  const { totalPoints, claimedRewards } = useRewardPoints();

  const styles = {
    root: {
      padding: '24px',
      backgroundColor: '#F7F7F7',
    },
    header: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'left',
      marginBottom: '32px',
    },
    title: {
      fontSize: '36px',
      fontWeight: 'bold',
    },
    subheading: {
      fontSize: '18px',
      color: '#707070',
    },
    section: {
      marginBottom: '48px',
    },
    sectionTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '16px',
    },
    table: {
      border: '1px solid #E0E0E0',
    },
    tableHeader: {
      backgroundColor: '#E0E0E0',
      fontWeight: 'bold',
    },
    tableRow: {
      '&:hover': {
        backgroundColor: '#F7F7F7',
      },
    },
    noRewards: {
      fontSize: '18px',
      fontStyle: 'italic',
    },
  };

  return (
    <Box sx={styles.root}>
      <Box sx={styles.header}>
        <Box>
          <Typography variant="h1" sx={styles.title}>
            Reward Points
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1" sx={styles.subheading}>
          Change360's Reward Points system is a way to show our appreciation for our users' loyalty and contributions to our platform. 
          With each action taken on the app, you can earn points that can be redeemed for rewards (coming soon). 
          Keep track of your progress and rewards claimed on the Reward Points page, where you can see your total points earned, as well as a detailed list of your claimed rewards. 
          With this system, we aim to incentivize you to actively participate in the Change360 community and continuously strive towards their goals.
          </Typography>
        </Box>
      </Box>
      <Divider />
      <Box sx={styles.section}>
        <Typography variant="h2" sx={styles.sectionTitle}>
         Your Reward Details
        </Typography>
        <Typography variant="subtitle1" sx={styles.subheading}>
            You have earned {totalPoints} reward points
          </Typography>
        <Box sx={styles.table}>
          {claimedRewards.length > 0 ? (
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={styles.tableHeader}>Action Type</TableCell>
                  <TableCell sx={styles.tableHeader}>Points</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {claimedRewards.map((reward, index) => (
                  <TableRow key={index} sx={styles.tableRow}>
                    <TableCell>{reward.actionType}</TableCell>
                    <TableCell>{reward.points}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <Typography variant="body1" sx={styles.noRewards}>
              No rewards claimed yet.
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default RewardsView;
