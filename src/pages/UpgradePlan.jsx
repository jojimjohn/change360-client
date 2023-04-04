import { Box, Button, Typography } from '@mui/material';

const UpgradePlan = () => {

  const handleUpgrade = (event) => {

    event.preventDefault();
    // Dummy payment submission
    const success = true;

    if (success) {
      // Redirect to additional days meal plan page
     
    } else {
      alert('Payment failed. Please try again.');
    }
  };

  return (
    <>
      <Box sx={{ p: 2 }}>
        <Typography variant="h5">Upgrade to 2 Additional Days Meal Plan</Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Get an additional 2-day meal plan for only $5
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="primary" onClick={handleUpgrade} href="/additionalplan">
            Upgrade Now
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default UpgradePlan;
