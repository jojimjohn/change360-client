import { Box, Button, Typography } from '@mui/material';
const Payment = () => {
  return (
    <>
      <Box sx={{ p: 10, width: { xl: '80%' }, minHeight: { xl: '500px'} }}>
        <Typography variant="h5">Plan Activated!</Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Welcome to your new meal and nutrition plan!
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body1">
           Click the button below to generate your meal and nutrition plan.
          </Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="primary" size="large" href="/mealplan">
            Generate Meal Plan
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Payment;
