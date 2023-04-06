import { useMemo } from 'react';
import { useEffect } from 'react';
import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';

import { getTokenDuration } from '../utils/auth';

import FeedbackModal from "../components/feedback/FeedbackModal";

import Header from '../components/Header';

const UserRootLayout = ({ userId, apiUrl }) => {
  const token = useLoaderData();
  const submit = useSubmit();

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
      <Header />
           <Outlet />
           <FeedbackModal userId={userId} apiUrl={apiUrl} />
    </>
  );
};

export default UserRootLayout;
