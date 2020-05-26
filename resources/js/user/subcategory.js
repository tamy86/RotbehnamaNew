import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import BoxshodowSubcategory from '../components/BoxshadowSubcategory';
import NavbarSubcategories from '../components/NavbarSubcategories';
import {makeStyles} from "@material-ui/core";




const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
        fontFamily: 'Tahoma',

    },


}));



export default function Subcategories() {

    const classes = useStyles();


    return(
        <div className={classes.root}>

            <NavbarSubcategories/>
            <BoxshodowSubcategory/>


        </div>

    )
}

if (document.getElementById('subcategories')) {
    ReactDOM.render(<Subcategories />, document.getElementById('subcategories'));
}