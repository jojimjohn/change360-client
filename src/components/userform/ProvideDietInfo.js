import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import { Box, Button, TextField, Typography, CircularProgress, Card, CardHeader, CardContent, Skeleton, Avatar, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

import DropdownList from "./DropdownList";
import * as constants from "./Constants";

const ProvideDietInfo = ({ userId, handleNext }) => {
  const [currentDiet, setCurrentDiet] = useState('');
  const [dietRestrictions, setDietRestrictions] = useState('');
  const [mealsPerDay, setMealsPerDay] = useState('');
  const [favFoods, setFavFoods] = useState('');
  const [foodToAvoid, setFoodToAvoid] = useState('');
  const [moreDietRestrictions, setMoreDietRestrictions] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

 // const { userId } = useParams();

  const handleSubmit = async (event) => {

    const genData = JSON.stringify({
      userId: userId,
      currentDiet: currentDiet,
      dietRestrictions: dietRestrictions,
      mealsPerDay: mealsPerDay,
      favFoods:favFoods,
      foodToAvoid:foodToAvoid,
      moreDietRestrictions:moreDietRestrictions
    });
    
    event.preventDefault();

    setResponse(genData);

      // Move to the next step
      handleNext(genData);

  };

  function getCurDiet(value) {
    setCurrentDiet(value);
  }
  function getCurDietRestriction(value) {
    setDietRestrictions(value);
  }
  function getCurMealsTime(value) {
    setMealsPerDay(value);
  }
 
  

  return (
    <>
      <Box sx={{ p: 2, width: { xl: "80%" } }} m="auto">
        <Typography variant="h5">Step 2: Provide Dietary Preferences</Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <DropdownList
            getOption={getCurDiet}
            placeholder="What is your current diet like?"
            useList={constants.currentDiets}
          />
          <DropdownList
            getOption={getCurDietRestriction}
            placeholder="Do you have any dietary restrictions?"
            useList={constants.dietRestrictions}
          />
          <DropdownList
            getOption={getCurMealsTime}
            placeholder="How many meals /snacks do you typically have in 1 day"
            useList={constants.snackTimes}
          />
          <Box sx={{ mt: 2 }}>
            <Button type="submit" variant="contained" color="primary" disabled={isLoading || response != null} >
               {isLoading ? <CircularProgress size={24} /> : 'Submit'}
            </Button>
          </Box>
        </Box>

      </Box>
    </>
  );
};

export default ProvideDietInfo;
