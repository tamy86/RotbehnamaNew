import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Beauty from '../../../public/images/smallIcons/beauty.png';
import Eyes from '../../../public/images/smallIcons/eyes.png';
import Heart from '../../../public/images/smallIcons/heart.png';
import Brian from '../../../public/images/smallIcons/brains.png';
import Kids from '../../../public/images/smallIcons/kids.png';
import Ortopedic from '../../../public/images/smallIcons/ortopetic.png';
import Ears from '../../../public/images/smallIcons/sound.png';
import Stomach from '../../../public/images/smallIcons/stomach.png';
import Dentis from '../../../public/images/smallIcons/dentis.png';
import Glands from '../../../public/images/smallIcons/human-body.png';


import Avatar from '@material-ui/core/Avatar';



import '../../../public/css/BoxshodowCategory.css';

const test=[{key:Stomach,value:'متخصص گوارش'},{key:Ears,value:'متخصص گوش حلق و بینی'},{key:Heart,value:'متخصص قلب'},
    {key:Ortopedic,value:'متخصص ارتوپدی'},{key:Dentis,value:'دندان پزشکی'},{key:Brian,value:'متخصص مغز و اعصاب'},
    {key:Eyes,value:'متخصص چشم'},{key:Kids,value:'متخصص کودکان'},{key:Glands,value:'متخصص غدد'},{key:Beauty,value:'متخصص زیبایی'}];

export default function BoxshadowSubCategory() {
    return (
        <Grid container style={{display:'flex',justifyContent:'center',marginTop:'60px'}}>

         {test.map(s=>(<Box boxShadow={3} bgcolor="background.paper" m={1} p={1} className="script-bf-box"
                    style={{
                     width:'10rem',
                     height:'6rem',
                     direction:'rtl',
                     cursor:'pointer',


                      }}>
                 <Avatar src={s.key}/>
                    {s.value}


                    </Box>
         ))}

        </Grid>
    );
}