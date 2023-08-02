import React, { useEffect, useState, useContext } from "react";
import { Box, Button, Typography, Link } from '@mui/material';
import { useAuth } from '../utils/auth';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const AuthForm = ({ onGoogleSignIn }) => {
  const { user, profile, setUser, signOut, signIn} = useAuth();

  //const { signIn } = useContext(useAuth);



  const onGoogleLoginSuccess = async (googleResponse) => {
   // setUser(googleResponse);
    signIn(googleResponse); 
};

  
const login = useGoogleLogin({
    onSuccess: onGoogleLoginSuccess,
    onError: (error) => console.log('Login Failed:', error)
});

// log out function to log the user out of google and set the profile array to null
const logOut = () => {
    googleLogout();
    setProfile(null);
    setUser(null);
    localStorage.removeItem('profile');
    navigate('/');
};

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',  textAlign: 'center', padding: '4rem'  }}  m="auto" >
    <Typography variant="h4" gutterBottom>Welcome to Change360!</Typography>
    <Typography variant="subtitle1" gutterBottom>You are one step away from getting the early access to Change360</Typography>
    <Typography variant="h5" gutterBottom>Create account</Typography>
    <Typography variant="subtitle2" gutterBottom>Start your 7-day free trial.</Typography>
    <Button variant="contained" color="primary" onClick={() => login()}>Log in with Google</Button>
    <Typography variant="body2" gutterBottom style={{ marginTop: '1rem' }}>
      By Signing up you agree to our <Link href="#">Terms of Service</Link> & <Link href="#">Privacy Policy</Link>
    </Typography>
  </Box>
  );
};

export default AuthForm;
