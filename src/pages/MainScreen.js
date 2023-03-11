import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

import Chatbot from '../components/chatBot';
import Welcome from '../components/welcome';
import YesNoButtons from '../components/YesNoButtons';
import GeneralInfo from '../components/userform/UserForm';
import PlanSignup from '../components/planSignup';
import Options from '../components/UserOptions';

const MainScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Define state variables
  const [userStatus, setUserStatus] = useState('new');
  const [showChatbot, setShowChatbot] = useState(false);

  // Set a timer to show the chatbot after 1 second
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowChatbot(true);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  // Handle user responses
  const handleResponse = (response) => {
    if (userStatus === 'new' && response === 'yes') {
      setUserStatus('signup');
    } else if (userStatus === 'signup' ) {
      setUserStatus('planinfo');
    } else if (userStatus === 'signup'  && response === 'planinfo') {
      setUserStatus('payment');
    } else if (userStatus === 'new' && response === 'no') {
      setUserStatus('tips');
    } else if (userStatus === 'mealplan' && response === 'no') {
      setUserStatus('tips');
    } else if (userStatus === 'return' && response === 'yes') {
      setUserStatus('options');
    } else if (userStatus === 'return' && response === 'no') {
      setUserStatus('tips');
    }
  };

  {userStatus === 'signup' && handleResponse === 'payment' &&
  'Great! Let me take you to the meal plan signup screen.'}
  {userStatus === 'signup' && handleResponse === 'payment' && (
    <Payment  userStatus={userStatus} handleResponse={handleResponse} />
  )}
  // Render the component
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Welcome to Change360
      </Typography>
      {showChatbot && (
        <Chatbot userStatus={userStatus} handleResponse={handleResponse}>
          {userStatus === 'new' && (
            <>
              <Welcome />
              <YesNoButtons handleResponse={handleResponse} />
            </>
          )}
          {userStatus === 'signup' && (
            <PlanSignup setUserStatus={setUserStatus} />
          )}
           {userStatus === 'signup' && handleResponse === 'payment' &&
          'Great! Let me take you to the meal plan signup screen.'}
          {userStatus === 'signup' && handleResponse === 'payment' && (
            <Payment  userStatus={userStatus} handleResponse={handleResponse} />
          )}
          {userStatus === 'mealplan' && (
            <YesNoButtons handleResponse={handleResponse} />
          )}
          {userStatus === 'userform' && <GeneralInfo />}
          {userStatus === 'tips' && (
            <Typography variant="subtitle1">
              Here are some tips to help you stay on track with your fitness goals.
            </Typography>
          )}
          {userStatus === 'options' && <Options />}
          {userStatus === 'additional' && <PlanSignup setUserStatus={setUserStatus} />}
          {userStatus === 'return' && <Options />}
        </Chatbot>
      )}
    </Box>
  );
};

export default MainScreen;
