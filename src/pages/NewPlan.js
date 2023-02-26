import { useState } from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';
import GeneralInfoForm from '../components/userform/UserForm';
import WelcomeResponse from '../components/userform/WelcomeResponse';
import ProvideDietInfo from '../components/userform/ProvideDietInfo';
import DisplayMealPlan from '../components/userform/DisplayMealPlan';

const steps = ['General Information', 'Welcome Response', 'Dietary Information', 'Your Meal Plan'];

const NewPlan = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [responseData, setResponse] = useState(null);

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
        return <WelcomeResponse userInfo={responseData} handleNext={handleNext} />;
      case 2:
        return <ProvideDietInfo userId={responseData}  handleNext={handleNext} />;
      case 3:
        return <DisplayMealPlan userInfo={responseData}  handleNext={handleNext} />;
      default:
        return 'Unknown step';
    }
  };

  return (
    <div style={{ marginTop: '25px' }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            {getStepContent(activeStep)}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewPlan;
