import React from 'react';
import ReactDOM from 'react-dom/client';

//import './index.css';
import App from './App';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
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
