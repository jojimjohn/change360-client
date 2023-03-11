const TOKEN_KEY = 'jwt_token';

// Set JWT token in local storage
export const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

// Clear JWT token from local storage
export const clearToken = () => {
  const token = localStorage.getItem('token');
  localStorage.removeItem('token');
};

// Get JWT token from local storage
export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

// Verify JWT token
export const verifyToken = () => {
  const token = getToken();

  if (token) {
    try {
      const decoded = jwt.verify(token, 'secret_key');
      return decoded;
    } catch (err) {
      console.error(err);
      return null;
    }
  } else {
    return null;
  }
};
