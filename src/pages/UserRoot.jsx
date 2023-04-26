import { useEffect, useState } from 'react';
import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';
import { Box } from "@mui/material";

import { getTokenDuration } from '../utils/auth';

import FeedbackModal from "../components/feedback/FeedbackModal";
import { RewardPointsProvider } from '../components/rewards/RewardsProvider';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const UserRootLayout = ({ userId, apiUrl }) => {


  const token = useLoaderData();
  const submit = useSubmit();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setSidebarOpen(!sidebarOpen);
  };


  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === 'EXPIRED') {
      submit(null, { action: '/logout', method: 'post' });
      return;
    }

    const tokenDuration = getTokenDuration();
    console.log(tokenDuration);

    setTimeout(() => {
      submit(null, { action: '/logout', method: 'post' });
    }, tokenDuration);
  }, [token, submit]);


  return (
    <>
    <RewardPointsProvider userId={userId} apiUrl={apiUrl}>      
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
          <FeedbackModal userId={userId} apiUrl={apiUrl} />
    </RewardPointsProvider>
    
    </>
  );
};

export default UserRootLayout;
