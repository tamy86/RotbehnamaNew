import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import BoxshadowCategory from '../components/BoxshadowCategory';
import {makeStyles} from "@material-ui/core";




const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
        paddingTop:145,
        fontFamily: 'Tahoma',

    },

}))



export default function Userhome() {



    const classes = useStyles();





    return(
        <div className={classes.root}>
            <BoxshadowCategory/>

        </div>
    )
}

if (document.getElementById('userhome')) {
    ReactDOM.render(<Userhome />, document.getElementById('userhome'));
}