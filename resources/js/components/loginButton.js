import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {makeStyles, useTheme} from "@material-ui/core";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import axios from 'axios';




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
    loginproprties: {
        marginLeft:'20px',
        fontFamily: 'Tahoma',
        variant: 'outlined',
        color:'black',
        backgroundColor:'#98FB98',
        direction:'ltr',
    },

    snackbar:{
        flexGrow: 1,
        paddingTop:145,
        fontFamily: 'Tahoma',
    },

}));


export default function LoginButton() {

    const[kinduser,setKinduser]=useState('');
    const[errorSnackbar,setErrorSnackbar]=useState(false);
    const[snackbarMessage,setSnackbarMessage]=useState('');
    // const [url,setUrl]=useState('');





    const classes = useStyles();
    const theme = useTheme();



    // to show snackbar
    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }
//show snackbar


    function loginUserRole(){



        axios.post(`/api/${kinduser}/login`, {'usertype': kinduser,}).then(
            res => {
                if ((res.data['isSuccess'] === true)&&(res.data['statusCode']===200)) {
                    window.location=`/${kinduser}/login`;

                }
                // else if ((res.data['isSuccess'] === true)&&(res.data['statusCode']===200)&&(res.data['signin']===true))
                // {
                //     const phone=res.data['phone'];
                //     axios.post('/api/user/home',{'phone':phone,}).then(
                //         res=>{
                //             if ((res.data['isSuccess'] === true) && (res.data['statusCode'] === 200)) {
                //                 window.location=`/user/home`;
                //             }
                //             else {
                //                 window.location=`/${kinduser}/login`;
                //
                //             }
                //         }
                //     )
                //
                //
                // }
                else if((res.data['isSuccess'] === false)&&(res.data['statusCode']===400))
                {
                    setSnackbarMessage(res.data['message']);
                    setErrorSnackbar(true);
                }
            })

    }

//to close snackbar and autohide
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setErrorSnackbar(false);
        setSuccessSnackbar(false);

    };


    return (



        <div className={classes.root}>

            <Typography className={classes.title} variant="h6" color="inherit"  style={{fontFamily:'Tahoma'}}>
                <Button onMouseOver={()=>setKinduser('business')} onClick={()=>{loginUserRole();}}  className={classes.loginproprties} type={"button"} variant="outline">وروود کسب و کار</Button>
                <Button onMouseOver={()=>setKinduser('user')} onClick={()=>{loginUserRole();}}  className={classes.loginproprties} type={"button"} variant="outline">وروود کاربر</Button>
            </Typography>

            <Snackbar className={classes.snackbar} anchorOrigin={{vertical: 'top',horizontal: 'right',direction:'ltr'}}
                      open={errorSnackbar} autoHideDuration={5000}
                      onClose={handleClose} style={{paddingTop:60}}>

                <Alert onClose={handleClose} severity="warning" style={{fontFamily:'Tahoma',direction:'rtl',fontSize:16}}>
                    {snackbarMessage}

                </Alert>

            </Snackbar>

        </div>





    );

}
if (document.getElementById('loginbutton')) {
    ReactDOM.render(<LoginButton/>, document.getElementById('loginbutton'));

}