import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 2 }} component="footer">
      <Typography variant="body2" color="text.secondary" align="center">
        {'© Change 360'},  &nbsp;
        {new Date().getFullYear()}
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        <Link to="/">About Us</Link> | <Link to="/">Plans</Link>
      </Typography>
    </Box>
  );
};

export default Footer;
