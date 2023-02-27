import { AppBar, Box, List, ListItem, Toolbar, Typography } from "@mui/material";
import PopupState,{ bindTrigger, bindMenu } from "material-ui-popup-state";
import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";
import Login from "../../features/account/Login";
import Catalog from "../../features/homepage/Catalog";
import { useStore } from "../store/store";
import  Button  from "@mui/material/Button";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import agent from "../api/agent";

const navStyles = {
    color: 'inherit',
    textDecoration: 'none',
    typography: 'h6',
    '&:hover': {
        color: 'grey.500'
    },
    '&.active': {
        color: 'text.secondary'
    }
}

export default function Header() {
    const { userStore: { userLogged, logout }, modalStore } = useStore();
    let currentUser = agent.Account.current(userLogged?.username!);
    console.log(currentUser);
    return (
        <AppBar position="static" sx={{ mb: 4 }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box display='flex' alignItems='center'>
                    <Typography gutterBottom color='white' variant="h5">
                        PetStore
                    </Typography>
                </Box>

                <List sx={{ display: 'flex' }}>
                    {userLogged ? <ListItem
                        component={NavLink}
                        to='/Pets'
                        key="/Pets"
                        onClick={() => <Catalog />}
                        sx={navStyles}
                    >
                        Home
                    </ListItem> : null}
                </List>

                <Box display='flex' alignItems='center'>
                    <ListItem>
                        {userLogged ?
                            (
                                <PopupState variant="popover" popupId="demo-popup-menu">
                                {(popupState) => (
                                  <React.Fragment>
                                    <Button variant="contained" {...bindTrigger(popupState)} style={{color:"white"}}>
                                    {userLogged.username}
                                    </Button>
                                    <Menu {...bindMenu(popupState)}>
                                      <MenuItem onClick={logout}>Logout</MenuItem>
                                    </Menu>
                                  </React.Fragment>
                                )}
                              </PopupState>
                            )
                            : (<ListItem 
                                component={NavLink}
                                to='/login'
                                key="/login"
                                onClick={() => modalStore.openModal(<Login />)}
                                sx={navStyles}>
                                Login
                            </ListItem>)
                        }
                    </ListItem>
                </Box>
            </Toolbar>
        </AppBar>
    );
}