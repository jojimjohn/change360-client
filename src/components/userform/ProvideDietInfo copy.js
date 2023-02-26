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

    //setIsLoading(true);

  //   try {
  //   // Send a POST request to the backend to save the user's dietary information
  //     // Get the 1-day meal and nutrition plan from the OpenAI API
  //   const response = await fetch(`${process.env.REACT_APP_BASE_API_URL}/api/nutrition`, {
  //     method: 'POST',
  //     body: genData,
  //     headers: { 'Content-Type': 'application/json' },
  //   });

  //   console.log("asd");
  //   if (!response.ok) {
  //     console.error('Error saving dietary information:', response.statusText);
  //     return;
  //   }

  //   const planData = await response.json();
  //   setResponse(planData);
  //   setError(null);

  // } catch (error) {
  //   setResponse(null);
  //   setError(error.message);
  // }

  // setIsLoading(false);

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
      <Box sx={{ p: 2 }}>
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

        {isLoading || response != null ? (

        <Card sx={{ maxWidth: '80%', m: 2, boxShadow: 4, backgroundColor: '#f5f5f5' }}>
        <CardHeader
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            p: 2,
            bgcolor: '#e7e7e7',
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


        <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
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
                  <Typography variant="h6" gutterBottom>
                    Hi {response.name}, here is your personalized meal plan.
                  </Typography>
                  {formatMessage(response.message)}
                  <Link
                    to={`/dietinfoform/${response.userId}`}
                    style={{ textDecoration: 'none', marginTop: 10 }}
                  >
                    <Button variant="contained" color="primary">
                      Request additional 2 days meal plan now
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
    </>
  );
};

export default ProvideDietInfo;
