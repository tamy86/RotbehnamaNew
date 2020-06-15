import React,{useState,useEffect,useRef} from 'react';
import clsx from 'clsx';
import ReactDOM from 'react-dom';
import {createMuiTheme, makeStyles, useTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';

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

    title: {
        flexGrow: 1,

    },

    loginproprties: {
        marginRight: 20,
        fontFamily: 'Tahoma',
        variant: 'outlined',
        color:'black',
        backgroundColor:'#98FB98',
        direction:'ltr',
    },





}));







export default function Headerbusiness(props) {


    const classes = useStyles();
    const theme = useTheme();
    const telphone=props.phone;

    return(

        <div className={classes.root}>
            <CssBaseline/>
            <AppBar
                style={{height: '65px', backgroundColor: '#AEB6BF'}}
                position="fixed"
                className={clsx(classes.appBar)}
            >
                <Toolbar>
                    <Typography className={classes.title} variant="h6" color="inherit"
                                style={{fontFamily: 'Tahoma'}}>
                        {/*<Button href='/business/login' className={classes.loginproprties} type={"button"} variant="outline">وروود کسب و کار</Button>*/}
                        {/*<Button href='/user/login' className={classes.loginproprties} type={"button"} variant="outline">وروود کاربر</Button>*/}
                    </Typography>
                    <AccountCircle style={{fontSize: 50}}/>
                    {telphone}

                </Toolbar>


            </AppBar>

        </div>

    );




}


if (document.getElementById('headerbusiness')) {
    const phone=$("#headerbusiness").data("phone");

    ReactDOM.render(<Headerbusiness phone={phone}/>,document.getElementById('headerbusiness'));

}