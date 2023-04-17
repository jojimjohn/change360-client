import React from 'react';
import ReactDOM from 'react-dom/client';

//import './index.css';
import App from './App';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#bf5e38' },
    secondary: { main: '#0072c6' },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //StrictMode causes useEffect and side components to re-rendered twice.
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <ThemeProvider theme={darkTheme}>
    <App />
  </ThemeProvider>
);
