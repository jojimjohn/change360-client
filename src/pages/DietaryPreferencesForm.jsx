import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ConfirmInfoOverlay from '../components/userform/ConfirmInfoOverlay';

const DietaryPreferencesForm = () => {
  const [currentDiet, setCurrentDiet] = useState('');
  const [dietRestrictions, setDietRestrictions] = useState('');
  const [mealsAndSnacks, setMealsAndSnacks] = useState('');
  const [showOverlay, setShowOverlay] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowOverlay(true);
  };

  return (
    <>
      <Header />
      <Box sx={{ p: 2 }}>
        <Typography variant="h5">Step 2: Provide Dietary Preferences</Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField label="Current Diet" fullWidth value={currentDiet} onChange={(e) => setCurrentDiet(e.target.value)} />
          <TextField
            label="Diet Restrictions"
            fullWidth
            value={dietRestrictions}
            onChange={(e) => setDietRestrictions(e.target.value)}
          />
          <TextField
            label="Meals and Snacks per Day"
            fullWidth
            value={mealsAndSnacks}
            onChange={(e) => setMealsAndSnacks(e.target.value)}
          />
          <Box sx={{ mt: 2 }}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </Box>
        <ConfirmInfoOverlay
          showOverlay={showOverlay}
          setShowOverlay={setShowOverlay}
          title="Confirm your dietary preferences"
          subtitle="Please review your dietary preferences before submitting."
          info={{
            'Current Diet': currentDiet,
            'Diet Restrictions': dietRestrictions,
            'Meals and Snacks per Day': mealsAndSnacks,
          }}
          buttonText="Confirm"
        />
      </Box>
      <Footer />
    </>
  );
};

export default DietaryPreferencesForm;
