import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import BoxshadowCategory from '../components/BoxshadowCategory';
import {makeStyles} from "@material-ui/core";
import axios from 'axios';




const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
        paddingTop:145,
        fontFamily: 'Tahoma',

    },

}))



export default function Userhome() {



    const classes = useStyles();



    // axios.get('/api/user/home',{}).then(res=>{
    //     if (res.data['sucess']===true)
    //     {
    //         const phone=res.data['phone'];

    return(



        <div className={classes.root}>

            <BoxshadowCategory/>

        </div>

    )
    //     }
    // });
}

if (document.getElementById('userhome')) {
    ReactDOM.render(<Userhome/>, document.getElementById('userhome'));
}