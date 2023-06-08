import { createContext, useContext, useState } from 'react';
import { redirect } from 'react-router-dom';
import { useWallet } from "../components/walletconnect/WalletContext";

const AuthContext = createContext({
  user: null,
  setUser: () => {},
  token: null,
  setToken: () => {}
});

const useWalletAddress = () => {
  const { walletAddress } = useWallet();
  return walletAddress;
}

export const AuthProvider = ({ children }) => {
  const walletAddress = useWalletAddress();
  const [user, setUser] = useState(walletAddress);
  const [token, setToken] = useState(() => {
    const storedToken = localStorage.getItem('token');
    return storedToken;
  });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};

export const saveAuthToken = (token, expiresIn) => {
  const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
  localStorage.setItem('token', token);
  localStorage.setItem('expiration', expirationDate.toISOString());
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

  if (!token) {
    return null;
  }

  const tokenDuration = getTokenDuration();

  if (tokenDuration < 0) {
    return null;
  }

  return token;
}

export function checkAuthLoader() {
  const token = getAuthToken();
  console.log(token);
  if (!token) {
    return redirect('/auth');
  }
}

export function tokenLoader() {
  const token = getAuthToken();
  return token;
}