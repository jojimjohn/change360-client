import React, { Fragment, useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Box } from '@mui/material';

import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Footer from './components/Footer';

//import Login from './pages/Login';
import WelcomeScreen from './pages/WelcomeScreen';
import Dashboard from './pages/Dashboard';
import PlanInfo from './pages/PlanInfo';
import Payment from './pages/Payment';
import GeneralInfoForm from './components/userform/UserForm';
import ProvideDietInfo from './components/userform/ProvideDietInfo';
import UpgradePlan from './pages/UpgradePlan';
import AdditionalPlan from './pages/AdditionalPlan';
import NewPlan from './pages/NewPlan';
import Logout from './pages/Logout';
import NotFound from './pages/404';
import PrivateRoute from './components/routing/PrivateRoute';

const App = () => {
  
  const token = localStorage.getItem('token');
  

  return (
    <Box width="400px" sx={{ width: { xl: '100%' }, minHeight: { xl: '400px'} }} m="auto">
      <Fragment>
        <Header />
        <ErrorBoundary>
          {/* <Routes>
            <Route exact path='/' element={<PrivateRoute/>}>
              <Route path='/' element={<Dashboard/>}/>
            </Route>
            <Route exact path='/login' element={<WelcomeScreen/>}/>
            <Route path="*" element={<NotFound />} />
          </Routes> */}
          <Routes>
          {token ? (
              <Route path="/" element={<Dashboard />} />
            ) : (
              <Route path="/" element={<WelcomeScreen />} />
            )}
            <Route path="/payment" element={<Payment />}  />
            <Route path="/mealplan" element={<NewPlan />} />
            <Route path="/planinfo" element={<PlanInfo />} />
            <Route path="/userform" element={<GeneralInfoForm />}  />
            <Route path="/dietinfoform/:userId" element={<ProvideDietInfo />} />
            <Route path="/upgradeplan/:userId" element={<UpgradePlan />} />
            <Route path="/additionalplan/:userId" element={<AdditionalPlan />} />
            <Route path="/login" element={<WelcomeScreen />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ErrorBoundary>
       <Footer />
      </Fragment>

    
      {/* <Routes>
          <PrivateRoute path="/" element={<Dashboard />} isLoggedIn={isLoggedIn} />
          <PrivateRoute path="/payment" element={<Payment />} isLoggedIn={isLoggedIn} />
          <PrivateRoute path="/mealplan" element={<NewPlan />} isLoggedIn={isLoggedIn} />
          <PrivateRoute path="/planinfo" element={<PlanInfo />} isLoggedIn={isLoggedIn} />
          <PrivateRoute path="/userform" element={<GeneralInfoForm />} isLoggedIn={isLoggedIn} />
          <PrivateRoute path="/dietinfoform/:userId" element={<ProvideDietInfo />} isLoggedIn={isLoggedIn} />
          <PrivateRoute path="/upgradeplan/:userId" element={<UpgradePlan />} isLoggedIn={isLoggedIn} />
          <PrivateRoute path="/additionalplan/:userId" element={<AdditionalPlan />} isLoggedIn={isLoggedIn} />
          <Route path="/login" element={<WelcomeScreen />} />
          <Route path="/logout" element={<Logout setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="*" element={<NotFound />} />
      </Routes> */}

    </Box>
  );
};

export default App;
