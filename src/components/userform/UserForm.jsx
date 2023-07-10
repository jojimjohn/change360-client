import {
  Box,
  FormControl,
  FormControlLabel,
  Button,
  CircularProgress,
  FormLabel,
  RadioGroup,
  Radio,
  Grid,
  TextField,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Skeleton,
  Avatar 
} from "@mui/material";

import React, { useState } from "react";
import { Link } from 'react-router-dom';
import HeightRange from "./HeightRange";
import WeightRange from "./WeightRange";
import SlidingRange from "./SlidingRange";
import DropdownList from "./DropdownList";
import * as constants from "./Constants";

import ConfirmInfoOverlay from './ConfirmInfoOverlay';

import backgroundLogo from '../../images/logo-semi-transparent.png';

const UserForm = ({ handleNext, closeModal }) => {    
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState(25);
  const [height, setHeight] = useState(140);
  const [heightUnit, setHeightUnit] = useState("");
  const [weight, setWeight] = useState("");
  const [weightUnit, setWeightUnit] = useState("");
  const [curFitnessLevel, setCurFitnessLevel] = useState("");
  const [curFitnessGoal, setCurFitnessGoal] = useState("");
  const [curExercise, setCurExercise] = useState("");
  const [dailyActivity, setDailyActivity] = useState("");
  const [showOverlay, setShowOverlay] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  //const [error, setError] = useState(null);

  const [nameError, setNameError] = useState(false);
  const [genderError, setGenderError] = useState(false);
  const [heightError, setHeightError] = useState(false);
  const [weightError, setWeightError] = useState(false);
  const [curFitnessLevelError, setCurFitnessLevelError] = useState(false);
  const [curFitnessGoalError, setCurFitnessGoalError] = useState(false);
  const [curExerciseError, setCurExerciseError] = useState(false);
  const [dailyActivityError, setDailyActivityError] = useState(false);
  
  const submitHandler = (event) => {
    event.preventDefault();

    // Check if any required fields are empty
    if (!name || !gender || !height || !weight || !curFitnessLevel || !curFitnessGoal || !curExercise || !dailyActivity) {
      // Set error messages for the empty fields
      setNameError(!name);
      setGenderError(!gender);
      setHeightError(!height);
      setWeightError(!weight);
      setCurFitnessLevelError(!curFitnessLevel);
      setCurFitnessGoalError(!curFitnessGoal);
      setCurExerciseError(!curExercise);
      setDailyActivityError(!dailyActivity);
      return; // Stop form submission
    }

    setShowOverlay(true);
    const modalOverlay = document.querySelector('.modal-overlay');
    if (modalOverlay) {
      modalOverlay.style.display = 'none';
    }
  };
  
  const onConfirmHandler = () =>{
    const genData = JSON.stringify({
      address: "0x3c51C5bBa1111aA67Bd04D3fB7C282B49Cc32c7f",
      nickname: name,
      age: age,
      gender: gender,
      height: height,
      heightUnit: heightUnit,
      weight: weight,
      weightUnit: weightUnit,
      fitnessLevel: curFitnessLevel,
      fitnessGoal: curFitnessGoal,
      curExercise: curExercise,
      dailyActivity: dailyActivity
    });

    setResponse(genData);

  // ResponseDate =genData;
    // Move to the next step
    handleNext(genData);
    closeModal();
  }

  const toggleOverlayHandler = () => {
    setShowOverlay(prevState => !prevState);
  }

  function getAge(value) {
    setAge(value);
  }
  function getHeight(value) {
    setHeight(value);
  }
  function getHeightUnit(value) {
    setHeightUnit(value);
  }
  function getWeight(value) {
    setWeight(value);
  }
  function getWeightUnit(value) {
    setWeightUnit(value);
  }
  function getCurFitnessLevel(value) {
    setCurFitnessLevel(value);
  }
  function getCurFitnessGoal(value) {
    setCurFitnessGoal(value);
  }
  function getCurExercise(value) {
    setCurExercise(value);
  }
  function getDailyActivity(value) {
    setDailyActivity(value);
  }

    return (
    <>
      <Box sx={{ p: 2, width: { xl: '80%' } }} m="auto">
        <Typography variant="h5" className="text-center">Step 1: Provide General Information</Typography>
        <Box component="form" onSubmit={submitHandler} sx={{ mt: 2, backgroundImage: `url(${backgroundLogo})`, backgroundPosition: `center center`, backgroundRepeat: "no-repeat", backgroundSize: "contain" }}>
          <Grid container item flexDirection={"column"} alignItems="center">
            <TextField
              sx={{ width: 200 }}
              value={name}
              onChange={(e) => { setName(e.target.value); }}
              label="Name"
              variant="standard"
              error={nameError}
              helperText={nameError && 'Please fill out this field'}
            />
            <Grid item sx={{ marginTop: 1.5 }}>
              <Typography gutterBottom>Gender</Typography>
              <RadioGroup
                row
                onChange={(e) => { setGender(e.target.value); }}
                value={gender}
              >
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
              </RadioGroup>
              {genderError && (
                <Typography variant="caption" color="error">
                  Please select a gender
                </Typography>
              )}
            </Grid>
            <SlidingRange getAge={getAge} />
            <HeightRange getHeightUnit={getHeightUnit} getHeight={getHeight} />
            <WeightRange getWeightUnit={getWeightUnit} getWeight={getWeight} />
            <DropdownList
              getOption={getCurFitnessLevel}
              placeholder="What is your current fitness level?"
              useList={constants.fitnessLevels}
              error={curFitnessLevelError}
              helperText={curFitnessLevelError && 'Please fill out this field'}
            />
            <DropdownList
              getOption={getCurFitnessGoal}
              placeholder="From the options below what best describes your current and singular health and fitness goal?"
              useList={constants.fitnessGoals}
              error={curFitnessGoalError}
              helperText={curFitnessGoalError && 'Please fill out this field'}
            />
            <DropdownList
              getOption={getCurExercise}
              placeholder="How much purposeful exercise do you currently get per week?"
              useList={constants.currentExercises}
              error={curExerciseError}
              helperText={curExerciseError && 'Please fill out this field'}
            />
            <DropdownList
              getOption={getDailyActivity}
              placeholder="How much activity do you get daily, outside of purposeful exercise?"
              useList={constants.dailyActivities}
              error={dailyActivityError}
              helperText={dailyActivityError && 'Please fill out this field'}
            />
          </Grid>
          <br />
          <Box textAlign="center">
            <Button
              type="submit"
              variant="contained"
              disabled={isLoading || response != null}
              color="primary"
              style={{ fontSize: "1.5em" }}
            >
              {isLoading ? <CircularProgress size={24} /> : 'Continue to Step 2'}
            </Button>
          </Box>
          {showOverlay && (
            <ConfirmInfoOverlay
              name={name}
              age={age}
              gender={gender}
              height={height}
              weight={weight}
              curFitnessLevel={curFitnessLevel}
              curFitnessGoal={curFitnessGoal}
              curExercise={curExercise}
              dailyActivity={dailyActivity}
              toggleOverlay={toggleOverlayHandler}
              onConfirm={onConfirmHandler}
            />
          )}
        </Box>
      </Box>
    </>
  );
};

export default UserForm;
