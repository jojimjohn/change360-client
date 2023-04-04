import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

function RootLayout() {


  return (
    <>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
    </>
  );
}

export default RootLayout;
