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
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { lvInfo } from './lvInfo';
import WinScreen from './WinScreen';


export default function Play(){
  const params= useParams()
  const levelID=params.id


    const [coords, setCoords] = useState({x: 0, y: 0});
    const [localCoords, setLocalCoords] = useState({x: 0, y: 0});
    const [testCoords, setTestCoords] = useState({x: 0, y: 0});
    const [menuOn, setMenuOn]=useState(false);
    const [isFound, setIsFound]=useState([false,false,false]);
    const [gameWon, setGameWon]=useState(false);

      const mapClickHandler =(event)=>{
        setMenuOn(!menuOn)
        const bounds = event.target.getBoundingClientRect()
        setLocalCoords({
          x:event.clientX-bounds.left,
          y:event.clientY-bounds.top
      })
      setCoords({
        x: Math.round((event.clientX-bounds.left)/(bounds.right-bounds.left)*10000)/100,
        y: Math.round((event.clientY-bounds.top)/(bounds.bottom-bounds.top)*10000)/100,
      });
      }

      //mousemove detection for debugging
      const handleMouseMove = event => {
        const bounds = event.target.getBoundingClientRect()
        setTestCoords({
          x: Math.round((event.clientX-bounds.left)/(bounds.right-bounds.left)*10000)/100,
          y: Math.round((event.clientY-bounds.top)/(bounds.bottom-bounds.top)*10000)/100,
        });

      };

    return <Box 
    display="flex"
    
    flexDirection="column"
    alignItems="sretch"
    justifyContent="stretch"
    height="100vh">
      <WinScreen gameWon={gameWon}/>
        <TopBar/>
        <Checklist levelID={levelID} isFound={isFound}/>
        <DebugDisplay txt={
            "Hit X:"+coords.x+" Y:"+coords.y
        }

        txt2={
            " X : "+testCoords.x+
            " Y : "+testCoords.y
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
            <Selector 
            menuVisible={menuOn} 
            mouseX={localCoords.x} mouseY={localCoords.y} 
            hitX={coords.x}
            hitY={coords.y}
            setMenuOn={setMenuOn}
            levelID={levelID}
            isFound={isFound}          
            />
            <Box
        component="img"
        src={lvInfo[levelID].image}
        loading="eager"
        onMouseMove={handleMouseMove}
        onClick={mapClickHandler}
        borderRadius="1rem"
        
        width="1000px"
        />
        </Box>

        </Box>


    </Box>
}