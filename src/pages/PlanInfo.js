import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

//const PlanInfo = () => {
const PlanInfo = ({ handleResponse }) => {
  const navigate = useNavigate();

  const handlePurchasePlan = () => {
    navigate('/payment');
  }

  return (
    <>
      <Box sx={{ p: 10, width: { xl: '80%' }, minHeight: { xl: '500px'} }}>
        <Typography variant="h5">One Day Meal and Nutrition Plan</Typography>
        <Typography variant="subtitle1" color="text.secondary">
          $5
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="primary" onClick={handlePurchasePlan}>
          {/* <Button variant="contained" color="primary"  onClick={() => handleResponse('payment')}> */}
            Purchase Plan
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default PlanInfo;
