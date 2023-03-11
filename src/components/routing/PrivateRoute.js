import React, {useState, useEffect} from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getToken } from '../../utils/auth';

const PrivateRoute = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log(token);
        if (token) {
        setIsLoggedIn(true);
        } else {
        setIsLoggedIn(false);
        }
    }, []);

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
