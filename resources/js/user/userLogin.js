import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import {TextField,createMuiTheme,ThemeProvider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import axios from 'axios';

const theme = createMuiTheme({
    overrides: {
        MuiInputLabel: { // Name of the component ⚛️ / style sheet
            root: { // Name of the rule
                fontFamily: "Tahoma",
                direction:"rtl",
                position:"absolute",
                right:"-80px",
                color:"black",
                "&$focused": { // increase the specificity for the pseudo class
                    color: "blue"
                }
            }
        }
    }
});



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingTop:145,
        fontFamily: 'Tahoma',

    },
    margin: {
        margin: theme.spacing(1),
        direction: 'ltr',
    },
    paper: {
        padding: theme.spacing(0),
        margin: 'auto',
        maxWidth: 400,
        height:'320px',
        fontFamily: 'Tahoma',
        direction:'rtl',
        backgroundColor:'#fff',

    },
    image: {
        width: 128,
        height: 128,
    },
    TextField: {
        fontFamily: 'Tahoma',
        marginTop: '25',

    },
    icons: {
        float:'left',
        direction: 'rtl',

    },
    Typography:{
        fontFamily:'Tahoma',
        marginRight:'60px',
    },
    Button:{
        fontFamily:'Tahoma',
        marginTop:'22px',
        minWidth:'200px',
        marginRight:'-28px',

    },
}));

export default function Userlogin() {


    const[disabledlogin,setDisabledLogin]=useState(true);
    const[disabledverify,setDisabledverify]=useState(false);
    const[phonevalue,setPhonevalue]=useState('');
    const[verifyvalue,setVerifyvalue]=useState('');
    const[errorSnackbar,setErrorSnackbar]=useState(false);
    const[successSnackbar,setSuccessSnackbar]=useState(false);
    const[snackbarMessage,setSnackbarMessage]=useState('');


    const classes = useStyles();

    // to show snackbar
    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }
//show snackbar



    function phonenoValidate() {

        const mobile = /(0|\+98)?([ ]|,|-|[()]){0,2}9[1|2|3|4]([ ]|,|-|[()]){0,2}(?:[0-9]([ ]|,|-|[()]){0,2}){8}/g;
        const result = phonevalue.match(mobile);
        if ((phonevalue === '') || (!result)) {

            setErrorSnackbar(true);
            setSnackbarMessage('شماره همراه به درستی وارد نشده است ');

        }
        else {
            axios.post('/api/user/login/phone', {'phone': phonevalue}).then(
                res => {
                    if ((res.data['isSuccess'] === true) && (res.data['statusCode'] === 200) && (res.data['signin']===false))
                    {
                        setSnackbarMessage(res.data['message']);
                        setSuccessSnackbar(true);

                        setDisabledverify(true);
                        setDisabledLogin(false);
                    }

                    else if((res.data['isSuccess'] === true) && (res.data['statusCode'] === 200) && (res.data['signin']===true))
                    {
                        const phone=res.data['phone'];

                        axios.post('/api/user/home', {'phone': phone}).then(
                            res=>{
                            if (res.data['isSuccess']===true)
                            {
                                const validatePhone=res.data['phone'];
                                // axios.get(`/api/user/home/${validatePhone}`).then(
                                //     res=>{
                                //         if (res.data['isSuccess']===true) {
                                            window.location = `/api/user/home/${validatePhone}`;


                                        // }
                                    // });

                            }


                            });




                    }
                    else if ((res.data['isSuccess'] === false) && (res.data['statusCode'] === 400))
                    {
                        setSnackbarMessage(res.data['message']);
                        setErrorSnackbar(true);
                    }
                })



        }

    }
    //
    //   fetch("http://127.0.0.1:8000/api/login",
    //         {
    //         method:'post',
    //         body:JSON.stringify(
    //             {'phone':phonevalue}
    //         ),
    //
    //         headers:{
    //             'Accept':'application/json',
    //             'Content-Type':'application/json',
    //         }
    //     }).then(function (response) {
    //         response.json().then(function (resp) {
    //
    //
    //
    //
    //             if((resp['isSuccess']===true)&&(resp['statusCode']===200))
    //             {
    //
    //                 setSnackbarMessage(resp['message']);
    //                 setSuccessSnackbar(true);
    //
    //                 setDisabledverify(true);
    //                 setDisabledLogin(false);
    //             }
    //             else if ((resp['isSuccess']===false)&&(resp['statusCode']===400))
    //             {
    //                 setSnackbarMessage(resp['message']);
    //                 setErrorSnackbar(true);
    //             }
    //         })
    //     })
    //
    // }


    function validateVerify() {

        const number=/\b\d{5}\b/g
        const result=verifyvalue.match(number);
        if ((verifyvalue === '')||(!(result))) {

            setErrorSnackbar(true);
            setSnackbarMessage('کد اعتبار سنجی خالی است یا با فرمت درست وارد نشده است ')
        }
        else{

            axios.post('/api/user/login/verify', {'verifycode': verifyvalue,'phone':phonevalue}).then(
                res => {
                    if ((res.data['isSuccess'] === true) && (res.data['statusCode'] === 200) && (res.data['signin']===true)) {
                        setDisabledverify(true);
                        setDisabledLogin(false);
                        const phone=res.data['phone'];
                        axios.post('/api/user/home',{'phone':phone}).then(res=> {
                                if ((res.data['isSuccess'] === true) && (res.data['statusCode'] === 200)) {
                                    const phoneId= res.data['id']
                                    window.location = `/api/user/home/${phoneId}`;
                                }
                                else {
                                    window.location=`/api/user/login`;

                                }
                            }
                        )

                    }
                    else if ((res.data['isSuccess'] === false) && (res.data['statusCode'] === 400) &&(res.data['signin']===false)) {
                        setSnackbarMessage(res.data['message']);
                        setErrorSnackbar(true);
                    }
                })



        }
    }


//to close snackbar and autohide
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setErrorSnackbar(false);
        setSuccessSnackbar(false);

    };

//close and auto hide snackbar

    return (

        <div className={classes.root} style={{height:'300px'}}>

            {/*errors*/}


            <Snackbar anchorOrigin={{vertical: 'top',horizontal: 'right',direction:'ltr'}}
                      open={errorSnackbar} autoHideDuration={5000}
                      onClose={handleClose} style={{paddingTop:60}}>

                <Alert onClose={handleClose} severity="warning" style={{fontFamily:'Tahoma',direction:'rtl',fontSize:16}}>
                    {snackbarMessage}

                </Alert>

            </Snackbar>

            <Snackbar anchorOrigin={{vertical: 'top',horizontal: 'right',}}
                      open={successSnackbar} autoHideDuration={5000}
                      onClose={handleClose} style={{paddingTop:60}}>

                <Alert onClose={handleClose} severity="success" style={{fontFamily:'Tahoma',direction:'rtl',fontSize:16}}>
                    {snackbarMessage}
                </Alert>

            </Snackbar>

            {/*end error snackbar*/}



            <Paper className={classes.paper}>
                <Grid container spacing={2} style={{marginRight:'125px'}}>

                    <Grid item xs={12} sm container>

                        <Grid item xs container direction="column" spacing={2}>


                            <Grid item xs style={{marginRight:'-55px'}}>
                                <Typography gutterBottom variant="h5" className={classes.Typography}>
                                    وروود کاربر
                                </Typography>


                                <ThemeProvider theme={theme}>



                                    <TextField
                                        className={classes.margin}
                                        id="input-with-icon-textfield"
                                        label="شماره تلفن همراه"
                                        name="phoneno"
                                        title="phoneno"
                                        value={phonevalue}
                                        onChange={event=>setPhonevalue(event.target.value)}

                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <AccountCircle className={classes.icons} />
                                                </InputAdornment>
                                            ),

                                        }}


                                    />

                                    <TextField
                                        className={classes.margin}
                                        id="input-with-icon-textfield"
                                        label="کد اعتبار سنجی"
                                        name="verifycode"
                                        title="verifycode"
                                        value={verifyvalue}
                                        onChange={event=>setVerifyvalue(event.target.value)}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <VerifiedUser  className={classes.icons}/>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </ThemeProvider>
                            </Grid>
                            <Grid>
                                <Button  size="medium" className={classes.Button}
                                         variant="outlined" color="primary"
                                         type="submit"
                                         onClick={()=>{phonenoValidate();}}
                                         disabled={disabledverify}
                                >
                                    دریافت کد اعتبارسنجی
                                </Button>
                            </Grid>
                            <Grid>
                                <Button size="medium" className={classes.Button}
                                        variant="outlined" color="primary"
                                        id="enter"
                                        onClick={()=>{validateVerify();}}
                                        disabled={disabledlogin}

                                >
                                     وروود
                                </Button>
                            </Grid>

                        </Grid>

                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

if (document.getElementById('userlogin')) {
    ReactDOM.render(<Userlogin/>, document.getElementById('userlogin'));
}