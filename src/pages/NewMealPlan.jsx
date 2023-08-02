import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Stepper, Step, StepLabel, StepContent, Typography, Button, Box, Paper } from '@mui/material';

import GeneralInfoForm from '../components/userform/UserForm';
import UserConnect from '../components/userform/UserSubscription';
import WelcomeResponse from '../components/userform/WelcomeResponse';
import ProvideDietInfo from '../components/userform/ProvideDietInfo';
import DisplayMealPlan from '../components/userform/DisplayMealPlan';

//import { RewardPointsProvider } from '../components/rewards/RewardsProvider';

//const steps = ['General Information', 'Plan Subscription', 'Welcome Response', 'Dietary Information', 'Your Meal Plan'];
const steps = [
  {
    label: 'General Information',
    description: 'In this step, we will gather some basic information about you to personalize your CHANGE360 experience. This will help us provide you with the best possible health and fitness recommendations.',
  },
  {
    label: 'Create a CHANGE360 account & subscribe to a Meal Plan',
    description: 'Next, you will create a CHANGE360 account and subscribe to a meal plan. You will get a 7 day free trial, please enter your billing information. There is no small text, no commitment, and you can cancel anytime.',
  },
  {
    label: 'Welcome Response',
    description: 'Thank you for subscribing to a meal plan, you will receive a welcome message with further instructions. Follow the guidelines provided to ensure the most effective use of your meal plan.',
  },
  {
    label: 'Dietary Information',
    description: 'In this step, we will gather more detailed information about your dietary preferences and restrictions. This information will be used to personalize your meal plan and ensure it aligns with your dietary needs.',
  },
  {
    label: 'Your Meal Plan',
    description: 'Now you will receive your personalized meal plan! It has been crafted based on the information you provided in the previous steps. Follow this meal plan to start seeing improvements in your health and fitness.',
  },
];


const NewPlan = ({ userId, apiUrl }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [responseData, setResponse] = useState(null);
  const [formData, setFormData] = useState(null);

  const { pageId } = useParams();

    useEffect(() => {
      console.log(pageId);
      console.log(responseData);
      if (parseInt(pageId, 10) == 1 || parseInt(pageId, 10) == 2) {
      setActiveStep(parseInt(pageId, 10)); 
      }
     // handleNext(userId);
    
    }, []);
  
    useEffect(() => {
      // Retrieve form data from localStorage
      const storedFormData = localStorage.getItem('formData');
      if (storedFormData) {
        setResponse(JSON.parse(storedFormData));
        // Remove form data from localStorage if it's no longer needed
        localStorage.removeItem('formData');
      }
    }, []);

  const handleNext = (responseData) => {
    setResponse(responseData);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setResponse(null);
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <GeneralInfoForm handleNext={handleNext} />;
      case 1:
        return <UserConnect userInfo={responseData} handleNext={handleNext} apiUrl={apiUrl} />;
      case 2:
        return <WelcomeResponse userId={userId} handleNext={handleNext} apiUrl={apiUrl} />;
      case 3:
        return <ProvideDietInfo userId={userId}  handleNext={handleNext} />;
      case 4:
        return <DisplayMealPlan userInfo={responseData}  handleNext={handleNext} apiUrl={apiUrl} />
          //   return  <RewardPointsProvider userId={userId} apiUrl={apiUrl} >
          //   <DisplayMealPlan userInfo={responseData}  handleNext={handleNext} apiUrl={apiUrl} />
          // </RewardPointsProvider>;
      default:
        return <GeneralInfoForm handleNext={handleNext} />;
    }
  };

  return (
    <Box sx={{ maxWidth: 1000, marginTop: '100px' }}>
    <Stepper activeStep={activeStep} orientation="vertical">
      {steps.map((step, index) => (
        <Step key={step.label}>
          <StepLabel
            optional={
              index === 4 ? (
                <Typography variant="caption">Last step</Typography>
              ) : null
            }
            StepIconProps={{
              style: {
                color: activeStep > index ? 'green' : activeStep === index ? '#1976d2' : '#757575',
              },
            }}
          >
            {step.label}
          </StepLabel>
          <StepContent>
            <Typography>{step.description}</Typography>
              <div>
              {getStepContent(activeStep)}
              </div>
            <Box sx={{ mb: 2 }}>
              <div>
                {/* <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1 }}
                >
                  {index === steps.length - 1 ? 'Finish' : 'Continue'}
                </Button> */}
                <Button
                  disabled={index !== 1 }
                  onClick={handleBack}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Back
                </Button>
              </div>
            </Box>
          </StepContent>
        </Step>
      ))}
    </Stepper>
    {activeStep === steps.length && (
      <Paper square elevation={0} sx={{ p: 3 }}>
        <Typography>All steps completed - you&apos;re finished</Typography>
        <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
          Reset
        </Button>
      </Paper>
    )}
  </Box>
    // <div style={{ marginTop: '25px' }}>
    //   <Stepper activeStep={activeStep} alternativeLabel>
    //   {steps.map((label, index) => (
    //       <Step key={label}>
    //         <StepLabel style={{color: index < activeStep ? 'green' : index === activeStep ? 'blue' : 'red'}}>{label}</StepLabel>
    //       </Step>
    //     ))}
    //   </Stepper>
    //   <div>
    //     {activeStep === steps.length ? (
    //       <div>
    //         <Typography>All steps completed</Typography>
    //         <Button onClick={handleReset}>Reset</Button>
    //       </div>
    //     ) : (
    //       <div>
    //         {getStepContent(activeStep)}
    //       </div>
    //     )}
    //   </div>
    // </div>
  );
};

export default NewPlan;
