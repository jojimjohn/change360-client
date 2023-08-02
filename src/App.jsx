import React, { Fragment, useState, useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Box } from '@mui/material';
import ErrorPage from './pages/Error';

import 'aos/dist/aos.css';
import './css/style.css';

import AOS from 'aos';

//Homepage
import Homepage from './pages/Home';
//Main root
import RootLayout from './pages/Root';

//Plans related - subscriptions and payment
import WelcomeScreen from './pages/WelcomeScreen';
import Dashboard from './pages/Dashboard';
import UserRootLayout from './pages/UserRoot'
import PlanInfo from './pages/PlanInfo';
import BuyPlanPage from './pages/Payment';
//import BuySuccessPage from './pages/BuySuccess'

//User meal plan
//import UserRootLayout from './pages/UserRoot'
import NewPlanPage from './pages/NewMealPlan'

import RewardsPage from './pages/Rewards'
import { RewardPointsProvider } from './components/rewards/RewardsProvider';

//import NewPlanForm from './components/userform/UserForm';
//import ProvideDietInfo from './components/userform/ProvideDietInfo';
import UpgradePlan from './pages/UpgradePlan';
import AdditionalPlan from './pages/AdditionalPlan';
//import Logout from './pages/Logout';

//Admin pages
import AdminFeedback from './admin/feedback'


import AuthenticationPage, {
  action as authAction,
} from './pages/Authentication';
import { action as logoutAction } from './pages/Logout';


import { createTheme, ThemeProvider } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

//const apiUrl = 'http://localhost:5000/api';
const apiUrl = 'https://change360-v1.onrender.com/api';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
         <RootLayout />
    ), 
    errorElement: <ErrorPage />,
    id: 'root',
    children: [
      { index: true, element: <Homepage /> },  
      {
        path: 'user',
        id: 'user',
        element: (
             <UserRootLayout apiUrl={apiUrl} />
        ), 
        children: [
          {
            path: 'newplan',
           // element: <Dashboard apiUrl={apiUrl}/>,
           element: (<NewPlanPage userId='0x3c51C5bBa1111aA67Bd04D3fB7C282B49Cc32c7f' apiUrl={apiUrl} />),
          children: [
            {
              path: ':pageId',
              element: <NewPlanPage userId='0x3c51C5bBa1111aA67Bd04D3fB7C282B49Cc32c7f' apiUrl={apiUrl} />,
            },  
          ],
          },  
          {
            path: 'plans',
            element: <PlanInfo userId='0x3c51C5bBa1111aA67Bd04D3fB7C282B49Cc32c7f' apiUrl={apiUrl} />,
          
          },
          {
            path: ':planId',
            children: [
               {
                path: 'buy',
                element: (
                 // <RewardPointsProvider userId='0x3c51C5bBa1111aA67Bd04D3fB7C282B49Cc32c7f' apiUrl={apiUrl}>
                    <BuyPlanPage />
                //  </RewardPointsProvider>
                ),
              },
            ],
          },    
          {
            path: 'rewards',
            element: <RewardsPage userId='0x3c51C5bBa1111aA67Bd04D3fB7C282B49Cc32c7f' apiUrl={apiUrl} />
          },      
        ],
      },
      {
        path: 'mealplan',
        element:  <UserRootLayout />,
        children: [
          {
            index: true,
           path: 'new',
           element: <NewPlanPage userId='640b5ebaf5dd1d0584ae8849' apiUrl={apiUrl} />,
        //    action: manipulateBuyAction,
          },
          // {
          //   path: 'followup',
          //   element: <FollowupPlan />,
          // },               
        ],
      },    
      {
        path: 'auth',
        element: <AuthenticationPage />,
        action: authAction,
      },
      {
        path: 'logout',
        action: logoutAction,
      },
      { 
        path: 'admin/feedback',
        element: <AdminFeedback apiUrl={apiUrl} /> },
    ],
  },
]);

function App() {

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change



  return <RouterProvider router={router} />;
}

export default App;