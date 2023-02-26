import { Box, Button, Typography } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MealPlan = ({ mealPlan }) => {
  return (
    <>
      <Header />
      <Box sx={{ p: 2 }}>
        <Typography variant="h5">Meal Plan</Typography>
        {Object.keys(mealPlan).map((day, index) => (
          <Box key={day} sx={{ mt: 2 }}>
            <Typography variant="h6">{`Day ${index + 1}`}</Typography>
            <Typography variant="body1">
              {Object.keys(mealPlan[day]).map((meal, index) => (
                <Box key={meal}>
                  <Typography variant="h6">{meal}</Typography>
                  <Typography variant="subtitle1">{mealPlan[day][meal].name}</Typography>
                  <Typography variant="body1">{mealPlan[day][meal].macros}</Typography>
                  <Typography variant="body1">{mealPlan[day][meal].calories}</Typography>
                  <Typography variant="subtitle1">Recipe: {mealPlan[day][meal].recipe.name}</Typography>
                  <Typography variant="body1">
                    <b>Ingredients:</b>
                  </Typography>
                  {mealPlan[day][meal].recipe.ingredients.map((ingredient) => (
                    <Typography key={ingredient}>{ingredient}</Typography>
                  ))}
                  <Typography variant="body1">
                    <b>Instructions:</b>
                  </Typography>
                  <Typography variant="body1">{mealPlan[day][meal].recipe.instructions}</Typography>
                  <Typography variant="body1">
                    <b>Macros:</b> {mealPlan[day][meal].macros}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle1">Grocery List:</Typography>
                    {mealPlan[day][meal].recipe.ingredients.map((ingredient) => (
                      <Typography key={ingredient}>{ingredient}</Typography>
                    ))}
                    <Typography variant="body1">
                      <b>Estimated Cost:</b> ${mealPlan[day][meal].recipe.cost}
                    </Typography>
                  </Box>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle1">Restaurant Menu Options:</Typography>
                    {mealPlan[day][meal].restaurantOptions.map((option, index) => (
                      <Box key={index}>
                        <Typography variant="subtitle1">{option.name}:</Typography>
                        <Typography variant="body1">{option.description}</Typography>
                        <Typography variant="body1">{option.macros}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              ))}
            </Typography>
          </Box>
        ))}
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="primary" fullWidth>
            Upgrade to 2-Day Plan
          </Button>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default MealPlan;
