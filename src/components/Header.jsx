import React, { useState, useEffect, useContext } from "react";
import { NavLink } from 'react-router-dom';
import { useAuth } from '../utils/auth';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

import logo from '../images/logo.png';

//import {useWallet} from "./walletconnect/WalletContext";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
    Button,
    Modal,
    Paper,
    Toolbar,
    AppBar,
    Typography,
    Box,
    CssBaseline
} from "@mui/material";

import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';


const Header = () => {
    // const {
    //     walletAddress,
    //     isTokenApproved,
    //     handleConnect,
    //     handleDisconnect,
    //     approveToken,
    //     removeApproval,
    //     active,
    //     bnbBalance,
    //     usdtBalance,
    //     bnbPrice,
    //     shortenAddress
    // } = useWallet();

    const [modalOpen, setModalOpen] = useState(false);

    const handleModalOpen = () => {
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4
    };

    const { user, setUser, signOut } = useAuth();
    const [ profile, setProfile ] = useState( localStorage.getItem('profile'));

    const onGoogleLoginSuccess = async (googleResponse) => {
        setUser(googleResponse);
    };
    
      
    const login = useGoogleLogin({
        onSuccess: onGoogleLoginSuccess,
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data.name);
                        setUser(res.data);
                        localStorage.setItem('profile', res.data.name);
                    })
                    .catch((err) => console.log(err));
            }
        },
        [ user ]
    );

    // log out function to log the user out of google and set the profile array to null
    const logOut = () => {
        googleLogout();
        setProfile(null);
        setUser(null);
        localStorage.removeItem('profile');
    };


    return (
        <AppBar
            position="fixed"
            sx={{
                zIndex: 1201,
                paddingLeft: '56px'
            }}>
            <ToastContainer/>
            <Toolbar
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>

                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                    <NavLink to="/">
                        <img
                            src={logo}
                            alt="Logo"
                            width="50"
                            style={{
                                marginTop: '8px',
                                marginBottom: '8px'
                            }}
                            />
                    </NavLink>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 'bold',
                            fontSize: '24px',
                            letterSpacing: '1px',
                            ml: 1,
                            display: {
                                xs: 'none', // Hide on extra small screens
                                sm: 'none', // Hide on small screens
                                md: 'block', // Show on medium screens and up
                              },
                        }}>
                        C.H.A.N.G.E 360
                    </Typography>
                </div>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                    {/* <Typography
                        variant="body1"
                        sx={{
                            mr: 4,
                            display: {
                                xs: 'none', // Hide on extra small screens
                                sm: 'none', // Hide on small screens
                                md: 'block', // Show on medium screens and up
                              },
                        }}>
                        Your Balance: 
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            mr: 4,
                            display: {
                                xs: 'none', // Hide on extra small screens
                                sm: 'none', // Hide on small screens
                                md: 'block', // Show on medium screens and up
                              },
                        }}>
                       {bnbBalance} BNB
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            mr: 4,
                            display: {
                                xs: 'none', // Hide on extra small screens
                                sm: 'none', // Hide on small screens
                                md: 'block', // Show on medium screens and up
                              },
                        }}>
                      |
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            mr: 4,
                            display: {
                                xs: 'none', // Hide on extra small screens
                                sm: 'none', // Hide on small screens
                                md: 'block', // Show on medium screens and up
                              },
                        }}>
                          {usdtBalance} USDT   
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            mr: 4,
                            display: {
                                xs: 'none', // Hide on extra small screens
                                sm: 'none', // Hide on small screens
                                md: 'block', // Show on medium screens and up
                              },
                        }}>
                      |
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            mr: 4,
                            display: {
                                xs: 'none', // Hide on extra small screens
                                sm: 'none', // Hide on small screens
                                md: 'block', // Show on medium screens and up
                              },
                        }}>
                        BNB Price: {bnbPrice}
                    </Typography>

                    {
                        !walletAddress && (
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleConnect}
                                style={{
                                    marginRight: "10px"
                                }}>
                                Connect Wallet
                            </Button>
                        )
                    }
                    {
                        walletAddress && (
                            <>  <Button
                            variant="contained"
                            color="primary"
                            onClick={handleModalOpen}
                            style={{ marginRight: "10px" }}
                            startIcon={<AccountBalanceWalletIcon />}
                          > {shortenAddress(walletAddress)} </Button>
                          </ >
                        )
                    }

                    {
                        modalOpen && (
                            <Modal open={modalOpen} onClose={handleModalClose}>
                                <Paper
                                    style={{
                                        padding: "20px"
                                    }}
                                    sx={style}>
                                    <Typography variant="h5" gutterBottom="gutterBottom">
                                        Wallet Connected
                                    </Typography>
                                    <Box>
                                        <Typography variant="body1">
                                            Your wallet address is:
                                        </Typography>
                                        <Typography variant="body1" color="primary">
                                        {shortenAddress(walletAddress)}
                                        </Typography>
                                    </Box>
                                    <Button
                                        variant="contained"
                                        onClick={() => {
                                            handleDisconnect();
                                            handleModalClose();
                                        }}
                                        color="secondary"
                                        style={{
                                            marginTop: "0px",
                                            marginRight: "15px"
                                        }}>
                                        Disconnect
                                    </Button>
                                    {
                                        walletAddress && !isTokenApproved && (
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={approveToken}
                                                disabled={!active}
                                                style={{
                                                    marginRight: "10px"
                                                }}>
                                                Approve Token
                                            </Button>
                                        )
                                    }
                                    {
                                        walletAddress && isTokenApproved && (
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={removeApproval}
                                                disabled={!active}
                                                style={{
                                                    marginRight: "10px"
                                                }}>
                                                Remove Approval
                                            </Button>
                                        )
                                    }
                                </Paper>
                            </Modal>
                        )
                    } */}

                    {profile ? (
                            <>
                            <p>Welcome, {profile}{' '} </p>
                            <button onClick={logOut}>&nbsp;<u>Log out</u></button>
                            </>
                        ) : (
                            <button onClick={() => login()}>Sign in with Google 🚀{' '}</button>
                        )}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
