import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingTop:145,
        fontFamily: 'Tahoma',

    },
}));


export default function SnackbarAlert(props) {


    const[errorSnackbar,setErrorSnackbar]=useState(props.errorshow);
    const[successSnackbar,setSuccessSnackbar]=useState(props.sucessshow);
    const[snackbarMessage,setSnackbarMessage]=useState(props.message);

    useEffect(() => {
        setErrorSnackbar(props.errorshow);
        setSuccessSnackbar(props.sucessshow);
        setSnackbarMessage(props.message);

    }, [props]);


    const classes = useStyles();

    // setSnackbarMessage(props.message);

    // to show snackbar
    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;


    }
    //show snackbar

      //to close snackbar and autohide
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {

            return;
        }

        // props.state={errorshow: false};
        setErrorSnackbar(false);
       setSuccessSnackbar(false);


    };

//close and auto hide snackbar



    return(
        <div className="container" style={{height:'300px'}}>

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


        </div>

    );



}

if (document.getElementById('snackbaralert')) {
    ReactDOM.render(<SnackbarAlert message={{message}} errorshow={{errorshow}} sucessshow={{sucessshow}}/>, document.getElementById('snackbaralert'));
}