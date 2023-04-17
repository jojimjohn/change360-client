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

import logo from '../../images/logo.png';

const UserForm = () => {
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
  const [error, setError] = useState(null);

  const submitHandler = (event) => {
    event.preventDefault();
   
  //  toggleOverlayHandler();
   
   setShowOverlay(true); 
  };
  
  const onConfirmHandler = async () =>{

    setIsLoading(true);

    const genData = JSON.stringify({
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

    try {
    // Send a POST request to the backend to save the user's dietary information
    // Get the welcome message from the OpenAI API
    const response = await fetch(`${process.env.REACT_APP_BASE_API_URL}/api/users`, {
      method: 'POST',
      body: genData,
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error('Something went wrong');
      return;
    }

    const planData = await response.json();

    setResponse(planData);
    setError(null);

  } catch (error) {
      setResponse(null);
      setError(error.message);
    }

    setIsLoading(false);
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
    <Box sx={{ p: 2, width: { xl: '80%' }  }} m="auto">
        <Typography variant="h5">Step 1: Provide General Information</Typography>
     <Box component="form" onSubmit={submitHandler} sx={{ mt: 2 }}>
        <Grid container item flexDirection={"column"}>
          <TextField sx={{ width: 200 }} value={name} onChange={(e) => {setName(e.target.value); }} label="Name"  variant="standard" />
          <Grid item sx={{ marginTop: 1.5 }}>
            <Typography gutterBottom> Gender </Typography>
              <RadioGroup
                row
                onChange={(e) => {
                  setGender(e.target.value); 
                }}
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

          </Grid>
          <SlidingRange getAge={getAge} />
          <HeightRange getHeightUnit={getHeightUnit} getHeight={getHeight} />
          <WeightRange getWeightUnit={getWeightUnit} getWeight={getWeight} />
          <DropdownList
            getOption={getCurFitnessLevel}
            placeholder="What is your current fitness level?"
            useList={constants.fitnessLevels}
          />
          <DropdownList
            getOption={getCurFitnessGoal}
            placeholder="From the options below what best describes your current and singular health and fitness goal?"
            useList={constants.fitnessGoals}
          />
          <DropdownList
            getOption={getCurExercise}
            placeholder="How much purposeful exercise do you currently get per week?"
            useList={constants.currentExercises}
          />
          <DropdownList
            getOption={getDailyActivity}
            placeholder="How much activity do you get daily, outside of purposeful exercise?"
            useList={constants.dailyActivities}
          />
        </Grid>

      <Button type="submit" variant="contained" color="primary" sx={{ width: 100 }}  disabled={isLoading || response != null} >
      {isLoading ? <CircularProgress size={24} /> : 'Submit'}
      </Button>
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

    {isLoading || response != null ? (

       <Card sx={{ maxWidth: '80%', m: 2 }}>
          <CardHeader
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            p: 2,
            bgcolor: '#f5f5f5',
            borderBottom: '1px solid #ccc',
          }}
          avatar={
            isLoading ? (
              <Skeleton
                animation="wave"
                variant="circular"
                width={40}
                height={40}
              />
            ) : (
              <Avatar
                alt="Change 360"
                src="../../assets/logo_small.jpg"
                sx={{ mr: 2 }}
              >
                C
              </Avatar>
            )
          }
          title={
            isLoading ? (
              <Skeleton
                animation="wave"
                height={10}
                width="80%"
                style={{ marginBottom: 6 }}
              />
            ) : (
              <Typography variant="h6">Change 360</Typography>
            )
          }
        />
          <CardContent>
            {isLoading ? (
              <React.Fragment>
                <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                <Skeleton animation="wave" height={10} width="80%" />
              </React.Fragment>
            ) : (
            <>
              {error && <Typography color="error">{error}</Typography>}
              {response && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" color="text.secondary" component="p">
              {response.message.split('\n\n').map((text, index) => (
                <p key={index}>{text}</p>
              ))}
              </Typography>
          
              <Link to={`/dietinfoform/${response.userId}`} style={{ textDecoration: 'none' }}>
                  <Button variant="contained" color="primary">
                    Next - Provide Diet and Nutrition Info
                  </Button>
              </Link>
            </Box>    
            )}
          </>
            )}
          </CardContent>
    </Card>
    ) :('') }
    </Box>
    </Box>
    </>
  );
};

export default UserForm;
