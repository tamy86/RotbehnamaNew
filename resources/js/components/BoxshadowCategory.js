import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Cinema from '../../../public/images/cinema-sm.png';
import Resturant from '../../../public/images/pizza-sm.png';
import Bakery from '../../../public/images/bakery-sm.png';
import Doctor from '../../../public/images/doctor-sm.png';
import Hotel from '../../../public/images/hotel-sm.png';
import Salone from '../../../public/images/beautysalone-sm1.png';
import Mall from '../../../public/images/shopping-sm.png';
import Cloth from '../../../public/images/shop-sm.png';
import Webonline from '../../../public/images/webshop-sm.png';
import Tooltip from '@material-ui/core/Tooltip';
import '../../../public/css/BoxshodowCategory.css';


const test=[{key:Cinema,value:'فرهنگ و سینما'} ,{key:Resturant,value:'رستوران ها'},{key:Bakery,value:'شیرینی فروشی ها'},{key:Doctor,value:'پزشکان'},{key:Hotel,value:'هتل ها'},{key:Salone,value:'سالن های زیبایی'},{key:Mall,value:'مراکز خرید'},{key:Cloth,value:'فروشگاه های لباس'},{key:Webonline,value:'خدمات آنلاین'}];



export default function BoxshadowCategory() {


    const[selectedvalue,setSelectedvalue]=useState();


    function selectedBox(){

        if(selectedvalue===''){
            alert('Error!');
        }else{


            alert(selectedvalue);
        //     axios.post('',{'category':selectedvalue}).then(
        //         res=>{
        //
        // })
        }
    }


    return (
        <Grid container style={{display:'flex',justifyContent:'center',}}>

            {test.map(s=>(<Tooltip title={s.value} arrow><Box  boxShadow={8} m={1} p={1} className="script-bf-box"
           style={{
               width:'16rem',
               height:'12rem',
               direction:'rtl',
               borderRadius:'25px',
               cursor:'pointer',
               fontSize:25,
               color:'#17202A',
               backgroundImage:`url(${s.key})`,
               textAlign:'center',
               fontWeight:'bold',
           }}

                onMouseOver={()=>setSelectedvalue(s.value)}
                onClick={()=>{selectedBox();}}

                >
                    {/*{()=>{selectedBox();}}*/}
                    {s.value}


               </Box>
                </Tooltip>
            ))}


        </Grid>
    );
}