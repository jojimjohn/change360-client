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
import { AuthProvider, checkAuthLoader, tokenLoader } from './utils/auth';

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
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: 'root',
    children: [
      { index: true, element: <Homepage /> },  
      {
        path: 'user',
        id: 'user',
        loader: tokenLoader,
        element: (
          <AuthProvider>
            <UserRootLayout apiUrl={apiUrl} />
          </AuthProvider>
       //   <UserRootLayout userId='640b5ebaf5dd1d0584ae8849' apiUrl={apiUrl} />
        ), 
        children: [
          {
            index: true,
            element: <Dashboard apiUrl={apiUrl}/>,
          //  loader: checkAuthLoader,
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
                  <RewardPointsProvider userId='640b5ebaf5dd1d0584ae8849' apiUrl={apiUrl}>
                    <BuyPlanPage />
                  </RewardPointsProvider>
                ),
              },
              // {
              //   path: 'success',
              //   element: <BuySuccessPage />,
              //   loader: checkAuthLoader,
              // },
            ],
          },    
          {
            path: 'rewards',
            element: <RewardsPage userId='640b5ebaf5dd1d0584ae8849' apiUrl={apiUrl} />
          },      
        ],
      },
      {
        path: 'mealplan',
        element:  <UserRootLayout />,
       //loader: checkAuthLoader,
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


// const App = () => {
  
//   const token = localStorage.getItem('token');
  

//   return (
//     <Box width="400px" sx={{ width: { xl: '100%' }, minHeight: { xl: '400px'} }} m="auto">
//       <Fragment>
//         <Header />
//         <ErrorBoundary>
//           {/* <Routes>
//             <Route exact path='/' element={<PrivateRoute/>}>
//               <Route path='/' element={<Dashboard/>}/>
//             </Route>
//             <Route exact path='/login' element={<WelcomeScreen/>}/>
//             <Route path="*" element={<NotFound />} />
//           </Routes> */}
//           <Routes>
//           {token ? (
//               <Route path="/" element={<Dashboard />} />
//             ) : (
//               <Route path="/" element={<WelcomeScreen />} />
//             )}
//             <Route path="/payment" element={<Payment />}  />
//             <Route path="/mealplan" element={<NewPlan />} />
//             <Route path="/planinfo" element={<PlanInfo />} />
//             <Route path="/userform" element={<GeneralInfoForm />}  />
//             <Route path="/dietinfoform/:userId" element={<ProvideDietInfo />} />
//             <Route path="/upgradeplan/:userId" element={<UpgradePlan />} />
//             <Route path="/additionalplan/:userId" element={<AdditionalPlan />} />
//             <Route path="/login" element={<WelcomeScreen />} />
//             <Route path="/logout" element={<Logout />} />
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </ErrorBoundary>
//        <Footer />
//       </Fragment>
   


//     </Box>
//   );
// };

// export default App;
