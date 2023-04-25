import { useMemo } from 'react';
import { useEffect, useState } from 'react';
import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';

import { getTokenDuration } from '../utils/auth';

import FeedbackModal from "../components/feedback/FeedbackModal";

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
      <Header onMenuClick={handleMenuClick} />
      <Sidebar />
           <Outlet />
           <FeedbackModal userId={userId} apiUrl={apiUrl} />
    </>
  );
};

export default UserRootLayout;
