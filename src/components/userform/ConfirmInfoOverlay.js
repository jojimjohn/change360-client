import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

const ConfirmInfoOverlay = ({ name, age, gender, height, weight, curFitnessLevel, curFitnessGoal, curExercise, dailyActivity, onConfirm, toggleOverlay }) => {
  const [open, setOpen] = useState(true);

  const handleConfirm = () => {
    setOpen(false);
    toggleOverlay();
    onConfirm();
  };

  const handleCancel = () => {
    setOpen(false);
    toggleOverlay();
   // onCancel();
  };

  return (
    <Dialog open={open}>
      <DialogTitle>Please confirm your information:</DialogTitle>
      <DialogContent>
        <Typography variant="body1" sx={{ mb: 1 }}>
          Name: {name}
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          Age: {age}
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          Gender: {gender}
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          Height: {height}
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          Weight: {weight}
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          Fitness Level: {curFitnessLevel}
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          Fitness Goal: {curFitnessGoal}
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          Current Exercise: {curExercise}
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          Daily Activity: {dailyActivity}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="secondary" onClick={handleCancel}>
          Cancel
        </Button>
        <Button variant="contained" color="primary" onClick={handleConfirm}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmInfoOverlay;
