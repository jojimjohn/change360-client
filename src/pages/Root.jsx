import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

function RootLayout() {


  return (
    <>
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
