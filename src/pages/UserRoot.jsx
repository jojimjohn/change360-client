import { useEffect, useState } from 'react';
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom';
import { Box } from "@mui/material";

import { checkAuthLoader, getTokenDuration } from '../utils/auth';
import { useAuth } from '../utils/auth';

import FeedbackModal from "../components/feedback/FeedbackModal";
import { RewardPointsProvider } from '../components/rewards/RewardsProvider';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
//import { useWallet } from "../components/walletconnect/WalletContext";

const UserRootLayout = ({ apiUrl }) => {
  const token = useLoaderData();
  const navigate = useNavigate();
  const { user } = useAuth();
 // const { handleDisconnect } = useWallet();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setSidebarOpen(!sidebarOpen);
  };


  useEffect(() => {
    checkAuthLoader();
    const tokenDuration = getTokenDuration();
    if (tokenDuration < 0) {
     // handleDisconnect();
     // navigate('/auth');
    }
    const timeout = setTimeout(() => {
    //  handleDisconnect();
   //   navigate('/auth');
    }, tokenDuration);
    return () => clearTimeout(timeout);
  }, [token]);

  return (
    <>
    {/* <RewardPointsProvider userId={user} apiUrl={apiUrl}>       */}
          <Header />
          <Sidebar />
          <Box
            sx={{
              marginLeft: {
                xs: "56px",
                sm: "56px",
                md: "240px",
              },
              width: {
                xs: "calc(100% - 56px)",
                sm: "calc(100% - 56px)",
                md: "calc(100% - 240px)",
              },
            }}
          >
            <Outlet />
          </Box>
          <FeedbackModal userId={user} apiUrl={apiUrl} />
    {/* </RewardPointsProvider> */}
    
    </>
  );
};

export default UserRootLayout;
