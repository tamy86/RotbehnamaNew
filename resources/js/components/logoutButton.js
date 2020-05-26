import React from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {makeStyles, useTheme} from "@material-ui/core";




const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexGrow: 1,
        position:'fixed',
        zIndex:'1',
        fontFamily:'Tahoma',
        marginTop:'14px',
    },
    title: {
        flexGrow: 1,

    },
    logoutproprties: {

        fontFamily: 'Tahoma',
        variant: 'outlined',
        color:'black',
        backgroundColor:'#98FB98',
        direction:'ltr',
        marginLeft:'40px',
    },

}));


export default function LogoutButton() {

    const classes = useStyles();
    const theme = useTheme();

    return (
        <div className={classes.root}>


            <Typography className={classes.title} variant="h6" color="inherit"  style={{fontFamily:'Tahoma'}}>

                <Button href='/user/login' className={classes.logoutproprties} type={"button"} variant="outline">خروج</Button>
            </Typography>
        </div>
    );

}
if (document.getElementById('logoutbutton')) {
    ReactDOM.render(<LogoutButton/>, document.getElementById('logoutbutton'));

}