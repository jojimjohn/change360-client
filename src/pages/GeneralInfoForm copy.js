import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import ConfirmInfoOverlay from './ConfirmInfoOverlay';

import DataForm from "../components/userform/UserForm";

const GeneralInfoForm = () => {
  const [nickname, setNickname] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [fitnessLevel, setFitnessLevel] = useState('');
  const [fitnessGoal, setFitnessGoal] = useState('');
  const [currentExercise, setCurrentExercise] = useState('');
  const [dailyActivity, setDailyActivity] = useState('');
  const [enjoyableExercise, setEnjoyableExercise] = useState('');
  const [showOverlay, setShowOverlay] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowOverlay(true);
  };

  return (
    <>
      <Box sx={{ p: 2 }}>
      <DataForm />
        <Typography variant="h5">Step 1: Provide General Information</Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField label="Nickname" fullWidth value={nickname} onChange={(e) => setNickname(e.target.value)} />
          <TextField label="Age" fullWidth value={age} onChange={(e) => setAge(e.target.value)} />
          <TextField label="Gender" fullWidth value={gender} onChange={(e) => setGender(e.target.value)} />
          <TextField label="Height" fullWidth value={height} onChange={(e) => setHeight(e.target.value)} />
          <TextField label="Weight" fullWidth value={weight} onChange={(e) => setWeight(e.target.value)} />
          <TextField
            label="Fitness Level"
            fullWidth
            value={fitnessLevel}
            onChange={(e) => setFitnessLevel(e.target.value)}
          />
          <TextField
            label="Fitness Goal"
            fullWidth
            value={fitnessGoal}
            onChange={(e) => setFitnessGoal(e.target.value)}
          />
          <TextField
            label="Current Exercise"
            fullWidth
            value={currentExercise}
            onChange={(e) => setCurrentExercise(e.target.value)}
          />
          <TextField
            label="Daily Activity"
            fullWidth
            value={dailyActivity}
            onChange={(e) => setDailyActivity(e.target.value)}
          />
          <TextField
            label="Enjoyable Exercise"
            fullWidth
            value={enjoyableExercise}
            onChange={(e) => setEnjoyableExercise(e.target.value)}
          />
          <Box sx={{ mt: 2 }}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </Box>
        {showOverlay && (
          <ConfirmInfoOverlay
            nickname={nickname}
            age={age}
            gender={gender}
            height={height}
            weight={weight}
            fitnessLevel={fitnessLevel}
            fitnessGoal={fitnessGoal}
            currentExercise={currentExercise}
            dailyActivity={dailyActivity}
            enjoyableExercise={enjoyableExercise}
          />
        )}
      </Box>
    </>
  );
};

export default GeneralInfoForm;
