import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [address, setAddress] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send wallet address to API endpoint
      const res = await axios.post('/api/login', { address });

      // Store JWT token in local storage or cookie
      localStorage.setItem('token', res.data.token);

      // Redirect user to dashboard page
      window.location.href = '/dashboard';
    } catch (error) {
      // Handle error
      setError(error.response.data.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
