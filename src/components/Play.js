import * as React from 'react';
import Container from '@mui/material/Container';
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
import DebugDisplay from './DebugDisplay';
import MouseListener from './MouseListener';
import {useEffect, useState} from 'react';
import { maxHeight } from '@mui/system';



export default function Play(){
    const [coords, setCoords] = useState({x: 0, y: 0});
    const [localCoords, setLocalCoords] = useState({x: 0, y: 0});
    const [globalCoords, setGlobalCoords] = useState({x: 0, y: 0});
    useEffect(() => {
        // 👇️ get global mouse coordinates
        const handleWindowMouseMove = event => {
          setGlobalCoords({
            x: event.screenX,
            y: event.screenY,
          });
        };
        window.addEventListener('mousemove', handleWindowMouseMove);
    
        return () => {
          window.removeEventListener('mousemove', handleWindowMouseMove);
        };
      }, []);
    
      const handleMouseMove = event => {
        const bounds = event.target.getBoundingClientRect()
        setCoords({
          x: Math.round((event.clientX-bounds.left)/(bounds.right-bounds.left)*100),
          y: Math.round((event.clientY-bounds.top)/(bounds.bottom-bounds.top)*100),
        });
        setLocalCoords({
            x:event.clientX-bounds.left,
            y:event.clientY-bounds.top
        })
      };






    return <Box 
    display="flex"
    flexDirection="column"
    alignItems="sretch"
    justifyContent="stretch"
    height="100vh">
        <TopBar/>
        <Checklist/>
        <DebugDisplay txt={
            "Local X:"+localCoords.x+" Y:"+localCoords.y
        }

        txt2={
            " X : "+coords.x+
            " Y : "+coords.y
        }
        />
        <Box
        flexGrow="1"
        width="100vw"
        height="82vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        >

        <Box
        
        overflow="auto"
        height="82vh"
        
        >
            <Selector mouseX='23' mouseY='21'/>
            <Box
        component="img"
        src={lv3img}
        loading="eager"
        onMouseMove={handleMouseMove}
        width="1000px"
        />
        </Box>

        </Box>


    </Box>
}