import React, { useState, useEffect } from 'react';
import {Link, useHistory} from "react-router-dom";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import AddBoxIcon from '@material-ui/icons/AddBox';
import PeopleIcon from '@material-ui/icons/People';

import logo from '../../assets/plogo.png'
import {IUser} from "../../types/user";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            width: '100%',
            backgroundColor: theme.palette.background.paper,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        toolbarMargin: {
            ...theme.mixins.toolbar,
            marginBottom: "1em"
        },
        logo: {
            height: "3em"
        },
        tabContainer: {
            margin: "auto"
        },
        tab: {
            textTransform: "none"
        },
        userBage: {
            marginRight: '37px',
            // whiteSpace: 'pre-line'
        }
    }),
);

interface Props {
    isAuthorised: boolean;
    handleSignOut: () => void;
    currentUser: IUser | null
}

// interface ScrollProps {
//     children: React.ReactElement | React.ReactElement[];
// }

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

// function ElevationScroll(props: ScrollProps) {
//     const { children } = props;
//     const trigger = useScrollTrigger({
//         disableHysteresis: true,
//         threshold: 0,
//     });
//
//     return React.cloneElement(children, {
//         elevation: trigger ? 4 : 0,
//     });
// }

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-prevent-tabpanel-${index}`}
            aria-labelledby={`scrollable-prevent-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

const Header: React.FC<Props> = (props) => {
    const classes = useStyles();
    let history = useHistory();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const { isAuthorised, handleSignOut, currentUser } = props;
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (window.location.pathname === "/" && value !== 0) {
            setValue(0);
        } else if (window.location.pathname === "/addnews" && value !== 1) {
            setValue(1);
        } else if (window.location.pathname === "/people" && value !== 2) {
            setValue(2);
        }
    }, [value])


    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleProfile = () => {
        setAnchorEl(null);
        setValue(10)
        history.push("/profile");
    };
    const signOut = () => {
        setAnchorEl(null);
        handleSignOut();
        setValue(0);
        history.push("/");
    }

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            {/*<ElevationScroll {...props}>*/}
                <AppBar position="fixed">
                    <Toolbar>
                        <img alt="logo" className={classes.logo} src={logo} onClick={()=> { setValue(0);history.push("/")}} />
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            variant="scrollable"
                            scrollButtons="on"
                            indicatorColor="primary"
                            textColor="secondary"
                            aria-label="scrollable force tabs example"
                            className={classes.tabContainer}
                        >
                            <Tab className={classes.tab}
                                 label="Home"
                                 icon={<HomeIcon />}
                                 component={Link}
                                 to="/"
                                 {...a11yProps(0)} />
                            <Tab className={classes.tab}
                                 label="Add News"
                                 icon={<AddBoxIcon />}
                                 component={Link}
                                 to="addnews"
                                 {...a11yProps(1)} />
                            <Tab className={classes.tab}
                                 label="People"
                                 icon={<PeopleIcon />}
                                 component={Link}
                                 to="people"
                                 {...a11yProps(2)} />
                        </Tabs>
                        {isAuthorised ? (
                            <div>
                                <Badge  component="div"
                                        className={classes.userBage}
                                        badgeContent={
                                            <Typography noWrap >
                                                {currentUser?.displayName}
                                            </Typography>
                                        }
                                        color="secondary">

                                </Badge>

                                <IconButton
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>

                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={open}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleProfile}>Profile</MenuItem>
                                    <MenuItem onClick={signOut}>Sign Out</MenuItem>
                                </Menu>
                            </div>
                        ) : (
                            <Button onClick={handleClose} variant="contained" color="primary">
                                Sign In
                            </Button>
                        )}
                    </Toolbar>
                </AppBar>
            {/*</ElevationScroll>*/}
            <div className={classes.toolbarMargin}>n</div>
        </div>
    );
}
export default Header;