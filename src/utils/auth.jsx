import { createContext, useContext, useState, useEffect } from 'react';
import { redirect } from 'react-router-dom';
import { useWallet } from "../components/walletconnect/WalletContext";
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const AuthContext = createContext(null);

const useWalletAddress = () => {
  const { walletAddress } = useWallet();
  return walletAddress;
}

export const AuthProvider = ({ children }) => {
//  const walletAddress = useWalletAddress();
  const [user, setUser] = useState('');
  const [profile, setProfile] = useState(localStorage.getItem('profile'));

  const [token, setToken] = useState(() => {
    const storedToken = localStorage.getItem('token');
    return storedToken;
  });

  useEffect(() => {
    // Listen for storage changes
    const handleStorageChange = () => {
      setProfile(localStorage.getItem('profile'));
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const signIn = (newUser) => {
    axios
    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${newUser.access_token}`, {
        headers: {
            Authorization: `Bearer ${newUser.access_token}`,
            Accept: 'application/json'
        }
    })
    .then((res) => {
        setProfile(res.data.given_name);
        setUser(res.data);
        localStorage.setItem('profile', res.data.given_name);
    })
    .catch((err) => console.log(err));
    
  };

  const  signOut = () => googleLogout({
    onSuccess: () => {
      setUser(null);
      localStorage.removeItem('token');
      localStorage.removeItem('profile'); 
      //return redirect('/');
    },
  });

  const authUser = async (id_token) => {
    console.log('works');
    const response = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id_token }),
    });
  
    if (!response.ok) {
      throw new Error('Could not authenticate user.');
    }
  
    const data = await response.json();
    saveAuthToken(data.token, data.expiresIn); 
    return data.user;
  };

  useEffect(() => {
    const token = getAuthToken();
    if (token) {
      fetch(`http://localhost:5000/api/getUser`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
        .then(res => res.json())
        .then(data => {
          setUser(data);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }, []);


  return (
     <AuthContext.Provider value={{ user, profile, setUser, signOut, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  
    const context = useContext(AuthContext);

    if (!context) {
      throw new Error('useAuth must be used within a AuthProvider')
    }
  
    return context;
  };

export const saveAuthToken = (token, expiresIn = 3600) => {
  const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
  localStorage.setItem('token', token);
  localStorage.setItem('expiration', expirationDate.toISOString());
  localStorage.setItem('tokenTimestamp', new Date().getTime());
};

export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem('expiration');
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}

export function getAuthToken() {
  const token = localStorage.getItem('token');
  const tokenTimestamp = localStorage.getItem('tokenTimestamp');

  if (!token) {
    return null;
  }

  if (new Date().getTime() - tokenTimestamp > 3600 * 1000) {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenTimestamp');
    localStorage.removeItem('profile');
    return null;
  }

  return token;
}
