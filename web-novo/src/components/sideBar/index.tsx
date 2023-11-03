import './styles.css'
//sidebar
import { NavLink } from 'react-router-dom';
//icons
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox } from '@fortawesome/free-solid-svg-icons';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import StoreRoundedIcon from '@mui/icons-material/StoreRounded';

// drawer
import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

type Anchor = 'left'

export function SideBar() {

    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event &&
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    const drawer = (
        <Box
            className='drawer'
            role="presentation"
            onClick={toggleDrawer('left', false)}
            onKeyDown={toggleDrawer('left', false)}
        >
            <NavLink to="/home">
                <div className="option">
                    <HomeRoundedIcon
                        fontSize="inherit"
                    />
                </div>
            </NavLink>

            <NavLink to="/profile">
                <div className="option">
                    <PersonRoundedIcon
                        fontSize="inherit"
                    />
                </div>
            </NavLink>

            <NavLink to="/product">
                <div className="option">
                <FontAwesomeIcon icon={faBox}
                style={{width:20}}
                />
                </div>
            </NavLink>
            <NavLink to="/environments">
                <div className="option">
                    <StoreRoundedIcon
                        fontSize="inherit"
                    />
                </div>
            </NavLink>
            <NavLink to="/">
                <div className="option">
                    <LogoutRoundedIcon
                        fontSize="inherit"
                    />
                </div>
            </NavLink>
        </Box>
    );

    return (
        <>
            <div className="sidebar">
                <div className="option">
                    <button onClick={toggleDrawer('left', true)}
                    >
                        <MenuIcon
                            sx={{ width: 60, fontSize: 40 }}
                            className='link'
                        />
                    </button>

                    <SwipeableDrawer
                        anchor="left"
                        open={state.left}
                        onClose={toggleDrawer('left', false)}
                        onOpen={toggleDrawer('left', true)}
                    >
                        {drawer}
                    </SwipeableDrawer>
                </div>
            </div>
        </>
    )
}

