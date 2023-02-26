import { Box, Button, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NutritionContext from '../context/nutritionContext';

const GeneralConfirmation = () => {
  const history = useHistory();
  const { nutritionData, setNutritionData } = useContext(NutritionContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!nutritionData) {
      history.push('/general-info');
    } else {
      setLoading(false);
    }
  }, [history, nutritionData]);

  const handleProceed = () => {
    history.push('/provide-diet-info');
  };

  if (loading) {
    return null;
  }

  return (
    <>
      <Header />
      <Box sx={{ p: 2 }}>
        <Typography variant="h5">Thank You</Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          {nutritionData.message}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="primary" onClick={handleProceed}>
            Next - Provide Diet and Nutrition Info
          </Button>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default GeneralConfirmation;
