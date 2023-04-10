import { Form, NavLink, useRouteLoaderData } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import logo from '../images/logo.png';

const Header = () => {
  const token = useRouteLoaderData('root');

  return (
    <AppBar position="static" sx={{ bgcolor: '#000' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <NavLink to="/">
          <img src={logo} alt="Logo" width="128" style={{marginTop: '8px', marginBottom: '8px'}} />
        </NavLink>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ mr: 4 }}>
            <NavLink to="/user" style={{ textDecoration: 'none', color: '#FFF' }}>
              Home
            </NavLink>
          </Typography>
          <Typography variant="h6" sx={{ mr: 4 }}>
            <NavLink to="/user/1/buy" style={{ textDecoration: 'none', color: '#FFF' }}>
              Purchase Plan
            </NavLink>
          </Typography>
          <Typography variant="h6" sx={{ mr: 4 }}>
            <NavLink to="/user/rewards" style={{ textDecoration: 'none', color: '#FFF' }}>
             Rewards
            </NavLink>
          </Typography>
          {!token && (
              <Typography variant="h6">
                <NavLink
                to="/auth?mode=login"  style={{ textDecoration: 'none', color: '#FFF' }}
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                >
                Connect
              </NavLink>
              </Typography>
          )}
          {token && (
             <Typography variant="h6">
              <Form action="/logout" method="post">
                  <button>Logout</button>
                </Form>
           </Typography>
          )}         


        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
