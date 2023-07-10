import React, {useState, useRef} from 'react';
import {
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    IconButton,
    Tooltip
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import RedeemIcon from '@mui/icons-material/Redeem';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import TwitterIcon from '../images/twitter-icon.png';
import TelegramIcon from '../images/telegram-icon.png';
import WhitepaperIcon from '../images/whitepaper-icon.png';

import {Link, useLocation, NavLink } from 'react-router-dom';

const Sidebar = () => {
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [showLabels, setShowLabels] = useState(false);
    const location = useLocation();
    const labelTimeout = useRef(null);

    const handleMouseEnter = () => {
    if (labelTimeout.current) {
        clearTimeout(labelTimeout.current);
    }
    setIsMouseOver(true);
    setShowLabels(true);
    };

    const handleMouseLeave = () => {
    labelTimeout.current = setTimeout(() => {
        setShowLabels(false);
        setIsMouseOver(false);
    }, 150);
    };

    const SidebarMenuItem = ({ to, icon, text }) => {
        const isActive = location.pathname === to;
      
        return (
          <NavLink to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItem>
              <ListItemIcon
                sx={{
                  color: isActive ? 'primary.main' : 'inherit',
                }}
              >
                {icon}
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={{
                  display: showLabels ? 'block' : 'none',
                  position: 'absolute',
                  left: '56px',
                  color: isActive ? 'primary.main' : 'inherit',
                }}
              />
            </ListItem>
          </NavLink>
        );
      };     
      
      const renderMenuItems = () => (
        <>
          <SidebarMenuItem
            to="/user"
            icon={<DashboardIcon />}
            text="Meal Plan"
          />
          <SidebarMenuItem
            to="/user/plans"
            icon={<MenuBookIcon />}
            text="Subscription"
          />
          <SidebarMenuItem
            to="/user/rewards"
            icon={<RedeemIcon />}
            text="Rewards"
          />
          <SidebarMenuItem
            to="/user/faq"
            icon={<LiveHelpIcon />}
            text="FAQ"
          />
        </>
      );

    const renderFooter = () => (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-around',
                opacity: isMouseOver
                    ? 1
                    : 0,
                transition: 'opacity 300ms'
            }}>
            <IconButton>
            <Tooltip title="Follow us on Twitter" arrow>
            <img src={TwitterIcon} alt="Twitter" width="24" height="24"/>
                </Tooltip> 
            </IconButton>
            <IconButton>
            <Tooltip title="Join us on Telegram" arrow>
            <img src={TelegramIcon} alt="Telegram" width="24" height="24"/>
                </Tooltip>  
            </IconButton>
            <IconButton>
                <Tooltip title="Read the Whitepaper" arrow>
                    <img src={WhitepaperIcon} alt="Whitepaper" width="24" height="24"/>
                </Tooltip>
            </IconButton>
        </Box>
    );

    return (
        <Box
            sx={{
                borderRight: '1px solid rgba(0, 0, 0, 0.12)',
                backgroundColor: '#1A1A1A',
                width: isMouseOver
                    ? '240px'
                    : '56px',
                transition: 'width 300ms',
                position: 'absolute',
                top: '64px',
                zIndex: 1200,
                height: 'calc(100% - 64px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
            <List>{renderMenuItems()}</List>
            <Divider/> {renderFooter()}
        </Box>
    );
};

export default Sidebar;
