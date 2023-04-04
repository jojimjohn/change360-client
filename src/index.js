import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //StrictMode causes useEffect and side components to re-rendered twice.
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <App />
);