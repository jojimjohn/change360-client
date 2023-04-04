import { useRouteError } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

import PageContent from '../components/PageContent';

function ErrorPage() {
  const error = useRouteError();

  let title = 'An error occurred!';
  let message = 'Something went wrong!';

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = 'Not found!';
    message = 'Could not find resource or page.';
  }

  return (
    <>
       <Header />
         <PageContent title={title}>
          <Box sx={{ p: 2 }}>
            <Typography variant="body1">{message}</Typography>
          </Box>
        <Footer />
      </PageContent>
    </>
    
  );
}

export default ErrorPage;
