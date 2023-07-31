import { useEffect, useState } from 'react';
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom';
import { Box } from "@mui/material";

import { AuthProvider, useAuth } from '../utils/auth';

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

  return (
    <>
    {/* <RewardPointsProvider userId={user} apiUrl={apiUrl}>       */}
    <AuthProvider>
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
    </AuthProvider>  
    </>
  );
};

export default UserRootLayout;
