import { Box, Typography } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <>
      <Header />
      <Box sx={{ p: 2 }}>
        <Typography variant="h5">404 - Page Not Found</Typography>
        <Typography variant="body1">The page you are looking for does not exist.</Typography>
      </Box>
      <Footer />
    </>
  );
};

export default NotFound;
