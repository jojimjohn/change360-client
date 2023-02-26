import { Box, Button, Typography } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';

const MealPlan = () => {
  const [mealPlan, setMealPlan] = useState('');

  useEffect(() => {
    // Mock API response from OpenAI
    const mockResponse = `
      Meal Plan:
      Day 1:
      Breakfast, Oatmeal with Berries
      Snack, Energy Bar

      Recipe: Oatmeal with Berries
      Ingredients:
      1 cup (80g) of gluten-free oats
      1 1/2 cups (355ml) of almond milk
      1 cup (150g) of mixed berries (strawberries, blueberries, raspberries)
      1 tbsp (15g) of chopped walnuts
      1 tsp (5g) of honey
      Pinch of salt

      Instructions:
      1. In a medium saucepan, combine the oats and almond milk. Cook over medium heat, stirring occasionally, until the oats are tender and the mixture is creamy, about 5-7 minutes.
      2. Stir in the mixed berries, chopped walnuts, honey, and salt. Cook for an additional 2-3 minutes, or until the berries are heated through.
      3. Serve the oatmeal hot and enjoy!

      Grocery List:
      Gluten-free oats (1 cup / 80g)
      Almond milk (1 1/2 cups / 355ml)
      Mixed berries (1 cup / 150g)
      Chopped walnuts (1 tbsp / 15g)
      Honey (1 tsp / 5g)
      Salt (pinch)
    `;

    // Set the meal plan state to the mocked response
    setMealPlan(mockResponse);
  }, []);

  return (
    <>
      <Header />
      <Box sx={{ p: 2 }}>
        <Typography variant="h5">Your Meal Plan</Typography>
        <Typography variant="body1">{mealPlan}</Typography>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="primary">
            Upgrade to 2-Day Meal Plan
          </Button>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default MealPlan;
