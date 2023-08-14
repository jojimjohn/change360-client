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
            description: `Personalized Exercise and Nutrition Plan - ${plan.name}`, 
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
          description: `Personalized Exercise and Nutrition Plan - ${plan.name}`, 
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
<Container maxWidth="lg" sx={{ marginTop: '10px' }}>
  <Typography variant="h4" gutterBottom>
    Personalized Exercise and Nutrition Plans 
  </Typography>
  <Grid container spacing={3}>
    {/* Personalized Exercise and Nutrition Plans Section */}
    <Grid item xs={12} sm={6} sx={{minHeight: '30vh'}}> 

      <Grid container spacing={1} justify="center">
        {/* 1st plan */}
        <Grid item xs={12}>
          <Box sx={{ p: 6 }}>
            <div className="relative inline-flex flex-col mb-4">
              <div className="plan">
                <ul className="plan-list">
                  <li className="plan-header">Personalized Exercise and Nutrition Plan</li>
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
          </Box>
        </Grid>
      </Grid>
    </Grid>

    {/* Checkout Form Section */}
    <Grid item xs={12} sm={6}>
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
    </Grid>
  </Grid>
</Container>




   

   
  );
};

export default PlanInfo;
