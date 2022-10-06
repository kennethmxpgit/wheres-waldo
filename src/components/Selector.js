import { Box,Button,Paper,Avatar } from '@mui/material';
import Waldo from "../images/Waldo.jpg"
import { lvInfo } from './lvInfo';


export default function Selector(props){
    const clickHandler=()=>{
        
        setTimeout(()=>{props.setMenuOn(false)},400)
    }

    //modifier so the small menu doesn't go out of the map container
    const modifierX=props.hitX>80?-190:0
    const modifierY=props.hitY>90?-55:0



    return <Box
    height="0"
    backgroundColor="gray"
    width="0"
    >
        <Box 
        visibility={props.menuVisible ? "visible":"hidden"}
        backgroundColor="white" 
        zIndex="1"
        width="fit-content"
        position="relative"
        display="flex"
        left={props.mouseX+modifierX+"px"}
        top={props.mouseY+modifierY+"px"}
        sx={{borderRadius:"0.5rem"}}
        >
            <Button onClick={clickHandler}>
                <Avatar src={lvInfo[props.levelID].target1Img}/>
            </Button>
            <Button onClick={clickHandler}>
                <Avatar src={lvInfo[props.levelID].target2Img}/>
            </Button>
            <Button onClick={clickHandler}>
                <Avatar src={lvInfo[props.levelID].target3Img}/>
            </Button>

        </Box>
    </Box>
}