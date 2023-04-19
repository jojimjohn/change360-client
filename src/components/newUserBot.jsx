import React from 'react';
import {Box, Typography, Button} from '@mui/material';

import Welcome from './welcome';
import YesNoButtons from './YesNoButtons';
import GeneralInfo from './userform/UserForm';
import PlanSignup from './planSignup';
import Options from './UserOptions';
import Payment from '../pages/Payment';

const Chatbot = ({userStatus, handleResponse}) => {
    return (
        <Box
            sx={{
                backgroundColor: 'white',
                border: '1px solid #ddd',
                borderRadius: '4px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                padding: '16px',
                position: 'relative',
                width: '100%',
                maxWidth: '500px',
                margin: '0 auto',
                mt: 2,
                overflow: 'hidden',
                transform: 'scale(1)',
                transformOrigin: 'bottom',
                transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}>
            <Typography variant="subtitle1">
                {
                    userStatus === 'new' && 'I am Change360, your personal AI fitness trainer. Would you like to join a mea' +
                            'l plan?'
                }
                {
                    userStatus === 'new' && (<> < YesNoButtons handleResponse = {
                        handleResponse
                    } /> </>)
                }
                {/* {userStatus === 'signup' &&
          'Great! Let me take you to the meal plan signup screen.'}
          {userStatus === 'signup' && (
            <PlanSignup  userStatus={userStatus} handleResponse={handleResponse} />
          )}
        */
                }
                {userStatus === 'mealplan' && 'Do you want to generate a new meal plan?'}
                {userStatus === 'userform' && 'Please provide some general information to generate your meal plan.'}
                {userStatus === 'tips' && 'Here are some tips to help you stay on track with your fitness goals.'}
                {
                    userStatus === 'return' && 'Welcome back! Do you want to view your meal plans or sign up for an additional' +
                            ' plan?'
                }
            </Typography>

            {
                userStatus === 'mealplan' && (
                    <> < Button onClick = {
                        () => handleResponse('yes')
                    } > Yes < /Button>
          <Button onClick={() => handleResponse('no')}>
            No
          </Button > </>
                )
            }
        </Box>
    );
};

export default Chatbot;
