import React from 'react';
import clsx from 'clsx';
import ReactDOM from 'react-dom';
import {createMuiTheme, makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import LanguageIcon from '@material-ui/icons/Language';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import TheatersIcon from '@material-ui/icons/Theaters';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import StoreIcon from '@material-ui/icons/Store';
import HotelIcon from '@material-ui/icons/Hotel';
import CloseIcon from '@material-ui/icons/Close';
import {ThemeProvider} from '@material-ui/core';


const drawerWidth = 240;


const listtheme = createMuiTheme({
    overrides: {

        MuiListItemText: { // Name of the component ⚛️ / style sheet
            primary:{ // Name of the rule
                fontFamily: "Tahoma",
            }
        }
    }
});



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexGrow: 1,
        position:'fixed',
        width:'100%',
        zIndex:'1',
        fontFamily:'Tahoma',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    },
    title: {
        flexGrow: 1,

    },
    hide: {
        display: 'none',

    },
    loginproprties: {
        marginRight: 20,
        fontFamily: 'Tahoma',
        variant: 'outlined',
        color:'black',
        backgroundColor:'#98FB98',
        direction:'ltr',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        direction: 'rtl',
        float:'right',
        right:'0px',



    },
    drawerPaper: {
        width: drawerWidth,
        float:'right',
        background:'#eceff1',



    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',

        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
    content: {
        flexGrow: 1,

        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,

        }),
        marginRight: -drawerWidth,


    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,


    },
    list:{

        textAlign:'right',
        float:'right',
        fontFamily:'Tahoma',
    },



}));

export default function Menu() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                style={{height:'65px',backgroundColor:'#00BFFF'}}
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <Typography className={classes.title} variant="h6" color="inherit"  style={{fontFamily:'Tahoma'}}>
                        {/*<Button href='/business/login' className={classes.loginproprties} type={"button"} variant="outline">وروود کسب و کار</Button>*/}
                        {/*<Button href='/user/login' className={classes.loginproprties} type={"button"} variant="outline">وروود کاربر</Button>*/}
                    </Typography>
                    <IconButton
                        color="black"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerOpen}
                        className={clsx(open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <ThemeProvider theme={listtheme}>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="right"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <CloseIcon/> : <CloseIcon/>}

                        </IconButton>
                    </div>
                    <Divider />


                    <List>
                        <ListItem button key={'محصولات'} className={classes.list} component="a" href="/user/login">
                            <ListItemIcon><ShoppingCartIcon/></ListItemIcon>
                            <ListItemText  primary={'محصولات'}/>
                        </ListItem>

                        <ListItem button key={'رستوران ها'} className={classes.list} component="a" href="/user/login">
                            <ListItemIcon><RestaurantIcon/></ListItemIcon>
                            <ListItemText  primary={'رستوران ها'}/>
                        </ListItem>

                        <ListItem button key={'پزشکان'} className={classes.list} component="a" href="/user/login">
                            <ListItemIcon><LocalHospitalIcon/></ListItemIcon>
                            <ListItemText  primary={'پزشکان'}/>
                        </ListItem>

                        <ListItem button key={'وب سایت ها'} className={classes.list} component="a" href="/user/login">
                            <ListItemIcon><LanguageIcon/></ListItemIcon>
                            <ListItemText  primary={'وب سایت ها'}/>
                        </ListItem>

                        <ListItem button key={'کافی شاپ ها'} className={classes.list} component="a" href="/user/login">
                            <ListItemIcon><LocalCafeIcon/></ListItemIcon>
                            <ListItemText  primary={'کافی شاپ ها'}/>
                        </ListItem>

                    </List>
                    <Divider />
                    <List>


                        <ListItem button key={'فرهنگ و هنر'} className={classes.list} component="a" href="/user/login">
                            <ListItemIcon><TheatersIcon/></ListItemIcon>
                            <ListItemText  primary={'فرهنگ و هنر'}/>
                        </ListItem>

                        <ListItem button key={'پاساژ ها'} className={classes.list} component="a" href="/user/login">
                            <ListItemIcon><LocalMallIcon/></ListItemIcon>
                            <ListItemText  primary={'پاساژ ها'}/>
                        </ListItem>

                        <ListItem button key={'شیرینی فروشی ها'} className={classes.list} component="a" href="/user/login">
                            <ListItemIcon><StoreIcon/></ListItemIcon>
                            <ListItemText  primary={'شیرینی فروشی ها'}/>
                        </ListItem>

                        <ListItem button key={'هتل ها'} className={classes.list} component="a" href="/user/login">
                            <ListItemIcon><HotelIcon/></ListItemIcon>
                            <ListItemText  primary={'هتل ها'}/>
                        </ListItem>

                    </List>

                </Drawer>
            </ThemeProvider>
        </div>
    );
}

if (document.getElementById('menu')) {
    ReactDOM.render(<Menu/>, document.getElementById('menu'));

}