import React from 'react';
import { useAuth } from '../utils/auth';

const AuthForm = ({ onGoogleSignIn }) => {
  const { user, signOut } = useAuth();

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.name}</h2>
          <button onClick={signOut}>Logout</button>
        </div>
      ) : (
        <button onClick={onGoogleSignIn}>Login with Google</button>
      )}
    </div>
  );
};

export default AuthForm;
