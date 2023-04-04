import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'black', color: 'white', p: 2, position: 'absolute', bottom: 0, width: '100%' }} component="footer">
      <Typography variant="body2" align="center">
        {'© Change 360'},  &nbsp;
        {new Date().getFullYear()}
      </Typography>
      <Typography variant="body2" align="center">
        <Link to="/">About Us</Link> | <Link to="/">Plans</Link>
      </Typography>
    </Box>
  );
};

export default Footer;
