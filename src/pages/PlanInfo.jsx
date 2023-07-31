import React, { useState, useEffect } from 'react';
import { Container, Paper, Box, Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserInteract from './userInteract';

//import {useWallet} from "../components/walletconnect/WalletContext";

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe('pk_test_51MvbghFgr9NTiTbN20i21MJ0n4PihpgaQi5nsPZz9Z8wqW0CLhlTabaldS8VXIooqPN4yildr1hO1MN7ndM7IrMl00MwzIiNVh');
import CheckoutForm from "./CheckoutForm";
import walletimg from '../images/wallet-icon.png';
import cardimg from '../images/payment-card.png';

const PlanInfo = ({ userId, apiUrl }) => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [mealPlan, setMealPlan] = useState(null); // TODO: check if the user has a plan
  const [user, setUser] = useState(null);
  const [paymentOption, setPaymentOption] = useState('card'); // 'crypto', 'card', or ''

  const [clientSecret, setClientSecret] = useState("");

    // const {
    //     walletAddress
    // } = useWallet();

  
//   useEffect(() => {
//     // Get existing PaymentIntent id from local storage
//     // ToDo: change the storage to secure database for the wallet user instead of in the local browser storage for security
//     const existingPaymentIntentId = localStorage.getItem('paymentIntentId');

//     if (existingPaymentIntentId && existingPaymentIntentId !='undefined') {
//         // Retrieve existing PaymentIntent
//         fetch(`${apiUrl}/payments/retrieve`, {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ id: existingPaymentIntentId }),
//         })
//         .then((res) => res.json())
//             .then(paymentIntent => {
//                 if (paymentIntent.status === 'requires_payment_method') {
//                     // PaymentIntent is still valid, use it
//                     setClientSecret(paymentIntent.clientSecret);
//                     console.log(paymentIntent.clientSecret);
//                 } else {
//                     // PaymentIntent is no longer valid, create a new one
//                     createPaymentIntent({ name: '2-year plan', amount: 9600 });
//                 }
//             });
//     } else {
//         // No existing PaymentIntent, create a new one
//         createPaymentIntent({ name: '2-year plan', amount: 9600 });
//     }
// }, []);

function createPaymentIntent(plan) {
    fetch(`${apiUrl}/payments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
            items: [{ id: "mealplan" }], 
            description: `Meal Plan - ${plan.name}`, 
            amount: plan.amount // Pass plan's amount to the server
        }),
    })
    .then((res) => res.json())
    .then((data) => {
        console.log( data.id);
        console.log(data.client_secret);
        // Store PaymentIntent id in local storage
        localStorage.setItem('paymentIntentId', data.id);
        setClientSecret(data.client_secret)
    });
    setPaymentOption('card');
}


function updatePaymentIntent(plan) {
  const existingPaymentIntentId = localStorage.getItem('paymentIntentId');
  fetch(`${apiUrl}/payments/update`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
          id: existingPaymentIntentId, 
          description: `Meal Plan - ${plan.name}`, 
          amount: plan.amount 
      }),
  })
  .then((res) => res.json())
  .then((data) => {
      console.log(data.id);
      console.log(data.client_secret);
      setClientSecret(data.client_secret)
  });
}

  const appearance = {
    theme: 'night',
    labels: 'floating'
  };
  const options = {
    clientSecret,
    appearance,
  };

  const selectPlan = (plan) => {
    const existingPaymentIntentId = localStorage.getItem('paymentIntentId');
  
    if (existingPaymentIntentId) {
      updatePaymentIntent(plan);
    } else {
      createPaymentIntent(plan);
    }
  };

  return (

    <Container maxWidth="lg" sx={{ marginTop: '100px' }}>
    <Typography variant="h4" gutterBottom>
      Meal Plans 
    </Typography>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        {mealPlan ? (
          <>
            <Typography variant="h8" gutterBottom className="text-left" style={{ marginBottom: '30px' }}>
              Welcome back! We're glad to see you again. Your commitment to improving your nutrition and following your meal plan is commendable. Let's discuss your progress and any challenges you've faced since our last conversation. We're here to support and guide you as you continue on your journey to better health and well-being.
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Box sx={{ mb: 3 }} style={{ marginTop: '30px' }}>
                  <UserInteract address={userId} apiUrl={apiUrl} />
                </Box>
              </Grid>
            </Grid>
            {/* TODO: display the user's meal and nutrition plans */}
          </>
        ) : (
          <Grid item xs={12} sx={{minHeight: '30vh'}}>
          <>
            <Typography variant="h6" gutterBottom>
              Purchase a Meal and Nutrition Plan
            </Typography>
            <Box sx={{ mb: 3 }}>
              <Typography variant="body1" gutterBottom>
                Purchase a new meal plan now to get started on your health journey.
              </Typography>
            </Box>

            <Grid container spacing={1} justify="center">
            {/* <Grid item xs={3}>
              <Box bgcolor="#ccc" display="flex" flexDirection="column" justifyContent="space-between" alignItems="center" p={2} borderRadius={2} style={{ cursor: 'pointer', width: '150px', height: '200px' }} onClick={() => setPaymentOption('crypto')}>
                <img 
                  src={walletimg}
                  width="150"
                  alt="Pay with Crypto" 
                />
                <Typography variant="body1" style={{ marginTop: '10px', color:'black' }}>
                  Pay with Crypto
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box bgcolor="#ccc" display="flex" flexDirection="column" justifyContent="space-between" alignItems="center" p={2} borderRadius={2} style={{ cursor: 'pointer', width: '150px', height: '200px' }} onClick={() => setPaymentOption('card')}>
                <img 
                  src={cardimg}
                  width="180"
                  alt="Pay with Card" 
                />
                <Typography variant="body1" style={{ marginTop: '10px', color:'black' }}>
                  Pay with Card
                </Typography>
              </Box>
            </Grid> */}

          {/* Plans */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

          {/* 1st plan */}
          <div className="flex flex-col h-full p-6" data-aos="fade-up">
            <div>
              <div className="relative inline-flex flex-col mb-4">
                <div className="plan">
                  <ul className="plan-list">
                    <li className="plan-header">Meal Plan</li>
                    <li className="bg-gray-900">$9.99 </li>
                    <li>With our Pro plan, you can take your fitness to the next level</li>
                    <li className="bg-gray-800">
                    <button className="btn text-white bg-primary-600 hover:bg-primary-700 w-full mb-4 sm:w-auto sm:mb-0 plan-button" onClick={() => selectPlan({ name: 'One time', amount: 999 })}>
  Subscribe<br/>$9.99
</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
   

          </div>

          </Grid>


            {paymentOption === 'crypto' && (
              <Box sx={{ mt: 3 }}>
                <Button variant="contained" color="primary" onClick={handlePurchasePlan}>
                  Buy Now
                </Button>
              </Box>
            )}
            {paymentOption === 'card' && clientSecret && (
              <Box sx={{ mt: 3 }}>
                <Elements options={options} stripe={stripePromise}>
                  <CheckoutForm apiUrl={apiUrl} clientSecret={clientSecret} />
                </Elements>
              </Box>
            )}
          </>
        </Grid>
        )}
      </Grid>

    

      </Grid>
  </Container>

   
  );
};

export default PlanInfo;
