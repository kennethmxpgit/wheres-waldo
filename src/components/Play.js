import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions,Box,Grid,Paper } from '@mui/material';
import lv1img from '../images/lv1.jpg'
import lv2img from '../images/lv2.jpg'
import lv3img from '../images/lv3.jpg'
import TopBar from './TopBar.js'
import Selector from './Selector.js'
import Checklist from './Checklist.js'


export default function Play(){
    return <Box 
    display="flex"
    flexDirection="column"
    height="100vh">
        <TopBar/>
        <Checklist/>
        <Selector/>
        <Box
        position="relative"
        width="100vw"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{overflowY:"scroll"}}
        >
                    <Box
        component="img"
        sx={{
            minWidth:{xs:"70rem",md:"90vw"}
        }}
        alt="Waldo welcoming"
        src={lv3img}      
        loading="eager"
        />


        </Box>


    </Box>
}