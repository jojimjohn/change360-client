import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

const AdditionalPlan = () => {
  const [mealPlan, setMealPlan] = useState('');

  useEffect(() => {
    fetch('/api/additionalplan')
      .then((response) => response.json())
      .then((data) => {
        setMealPlan(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Header />
      <Box sx={{ p: 2 }}>
        <Typography variant="h5">Additional 2-Day Meal Plan</Typography>
        <Typography variant="body1">{mealPlan}</Typography>
      </Box>
      <Footer />
    </>
  );
};

export default AdditionalPlan;
