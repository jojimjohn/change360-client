import React, {useState, useEffect} from 'react';
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
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import RedeemIcon from '@mui/icons-material/Redeem';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import TwitterIcon from '../images/twitter-icon.png';
import TelegramIcon from '../images/telegram-icon.png';
import WhitepaperIcon from '../images/whitepaper-icon.png';

import {Link} from 'react-router-dom';

const Sidebar = () => {
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [showLabels, setShowLabels] = useState(false);

    const handleMouseEnter = () => {
        setIsMouseOver(true);
        setTimeout(() => setShowLabels(true), 250);
    };

    const handleMouseLeave = () => {
        setTimeout(() => setShowLabels(false), 200);
        setTimeout(() => setIsMouseOver(false), 150);
    };

    const handleClick = () => {
        setIsMouseOver(!isMouseOver);
        setShowLabels(!showLabels);
    };

    const renderMenuItems = () => (
        <> < Link to = "/user" style = {{ textDecoration: 'none', color: 'inherit' }} > <ListItem>
            <ListItemIcon>
                <DashboardIcon/>
            </ListItemIcon>
            <ListItemText
                primary="Dashboard"
                sx={{
                    display: showLabels
                        ? 'block'
                        : 'none',
                    position: 'absolute',
                    left: '56px'
                }}/>
        </ListItem>
    </Link>
    <Link
        to="/user/plans"
        style={{
            textDecoration: 'none',
            color: 'inherit'
        }}>
        <ListItem>
            <ListItemIcon>
                <MenuBookIcon/>
            </ListItemIcon>
            <ListItemText
                primary="My Meal Plans"
                sx={{
                    display: showLabels
                        ? 'block'
                        : 'none',
                    position: 'absolute',
                    left: '56px'
                }}/>
        </ListItem>
    </Link>
    {/* <Link
        to="/user/settings"
        style={{
            textDecoration: 'none',
            color: 'inherit'
        }}>
        <ListItem>
            <ListItemIcon>
                <AccountBoxIcon/>
            </ListItemIcon>
            <ListItemText
                primary="Profile"
                sx={{
                    display: showLabels
                        ? 'block'
                        : 'none',
                    position: 'absolute',
                    left: '56px'
                }}/>
        </ListItem>
    </Link> */}
    <Link
        to="/user/rewards"
        style={{
            textDecoration: 'none',
            color: 'inherit'
        }}>
        <ListItem>
            <ListItemIcon>
                <RedeemIcon/>
            </ListItemIcon>
            <ListItemText
                primary="Rewards"
                sx={{
                    display: showLabels
                        ? 'block'
                        : 'none',
                    position: 'absolute',
                    left: '56px'
                }}/>
        </ListItem>
    </Link>
    <Link
        to="/faq"
        style={{
            textDecoration: 'none',
            color: 'inherit'
        }}>
        <ListItem>
            <ListItemIcon>
                <LiveHelpIcon/>
            </ListItemIcon>
            <ListItemText
                primary="FAQ"
                sx={{
                    display: showLabels
                        ? 'block'
                        : 'none',
                    position: 'absolute',
                    left: '56px'
                }}/>
        </ListItem>
    </Link>
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
            onClick={handleClick}>
            <List>{renderMenuItems()}</List>
            <Divider/> {renderFooter()}
        </Box>
    );
};

export default Sidebar;
