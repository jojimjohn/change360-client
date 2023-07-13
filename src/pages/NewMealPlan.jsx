import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Stepper, Step, StepLabel } from '@mui/material';
import GeneralInfoForm from '../components/userform/UserForm';
import UserConnect from '../components/userform/UserSubscription';
import WelcomeResponse from '../components/userform/WelcomeResponse';
import ProvideDietInfo from '../components/userform/ProvideDietInfo';
import DisplayMealPlan from '../components/userform/DisplayMealPlan';

//import { RewardPointsProvider } from '../components/rewards/RewardsProvider';

const steps = ['General Information', 'Plan Subscription', 'Welcome Response', 'Dietary Information', 'Your Meal Plan'];

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
        return  <RewardPointsProvider userId={userId} apiUrl={apiUrl} >
                  <DisplayMealPlan userInfo={responseData}  handleNext={handleNext} apiUrl={apiUrl} />
                </RewardPointsProvider>;
      default:
        return <GeneralInfoForm handleNext={handleNext} />;
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
