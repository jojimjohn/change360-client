import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import logo from '../assets/change360_logo.jpg';

const Header = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: '#000' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to="/">
          <img src={logo} alt="Logo" width="80" />
        </Link>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ mr: 4 }}>
            <Link to="/dashboard" style={{ textDecoration: 'none', color: '#FFF' }}>
              Home
            </Link>
          </Typography>
          <Typography variant="h6">
            <Link to="/plan-info" style={{ textDecoration: 'none', color: '#FFF' }}>
              Purchase Plan
            </Link>
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
