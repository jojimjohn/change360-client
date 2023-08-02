import React from 'react';
import ReactDOM from 'react-dom/client';
//import {Web3ReactProvider} from '@web3-react/core';
//import {WalletProvider} from "./components/walletconnect/WalletContext";
import { GoogleOAuthProvider } from '@react-oauth/google';
import {ethers} from 'ethers';
import { AuthProvider} from './utils/auth';

import App from './App';

import {createTheme, ThemeProvider} from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#bf5e38'
        },
        secondary: {
            main: '#0072c6'
        }
    }
});

// function getLibrary(provider) {
//     const library = new ethers
//         .providers
//         .Web3Provider(provider);
//     library.pollingInterval = 12000;
//     return library;
// }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // StrictMode causes useEffect and side components to re-rendered twice.
    // <React.StrictMode>   <App /> </React.StrictMode>
    <GoogleOAuthProvider clientId="269939431372-bc5fjp3q6ersnkt8g0bdb9e8pvfpr21s.apps.googleusercontent.com">
    {/* <Web3ReactProvider getLibrary={getLibrary}> */}
        {/* <WalletProvider> */}
        <AuthProvider>
            <ThemeProvider theme={darkTheme}>
                <App/>
            </ThemeProvider>
        </AuthProvider>
        {/* </WalletProvider> */}
    {/* </Web3ReactProvider> */}
    </GoogleOAuthProvider>
);
