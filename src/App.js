import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import PlanInfo from './pages/PlanInfo';
import Payment from './pages/Payment';
import GeneralInfoForm from './components/userform/UserForm';
import ProvideDietInfo from './components/userform/ProvideDietInfo';

import UpgradePlan from './pages/UpgradePlan';
import AdditionalPlan from './pages/AdditionalPlan';
import NewPlan from './pages/NewPlan';
import NotFound from './pages/404';

const App = () => {
  return (
  <Box width="400px" sx={{ width: { xl: '100%' }, minHeight: { xl: '400px'} }} m="auto">
     < Header/>
     <ErrorBoundary>
     <Routes>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/plan-info" element={<PlanInfo/>} />
          <Route path="/payment" element={<Payment/>} />
   
          <Route path="/mealplan" element={<NewPlan/>} />

          <Route path="/userform" element={<GeneralInfoForm/>} />
          <Route path="/dietinfoform/:userId" element={<ProvideDietInfo/>} />

          <Route path="/upgradeplan/:userId" element={<UpgradePlan/>} />
          <Route path="/additionalplan/:userId" element={<AdditionalPlan/>} />
          <Route element={<NotFound/>} />
      </Routes>
      </ErrorBoundary>
      <Footer/>
  </Box>
  )
};

export default App;
