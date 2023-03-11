import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { clearToken } from '../utils/auth';

const Logout = () => {
const navigate = useNavigate();

 useEffect(() => {
    // Remove the JWT token from local storage
    clearToken();

    // Navigate to the login page
    navigate('/login');
  }, [navigate]);

  return null;
};

export default Logout;
