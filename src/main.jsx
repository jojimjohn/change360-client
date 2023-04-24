import React from 'react';
import ReactDOM from 'react-dom/client';
import {Web3ReactProvider} from '@web3-react/core';
import {WalletProvider} from "./components/walletconnect/WalletContext";
import {ethers} from 'ethers';

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

function getLibrary(provider) {
    const library = new ethers
        .providers
        .Web3Provider(provider);
    library.pollingInterval = 12000;
    return library;
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // StrictMode causes useEffect and side components to re-rendered twice.
    // <React.StrictMode>   <App /> </React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
        <WalletProvider>
            <ThemeProvider theme={darkTheme}>
                <App/>
            </ThemeProvider>
        </WalletProvider>
    </Web3ReactProvider>
);
