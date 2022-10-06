import { Box,Button,Paper,Avatar } from '@mui/material';
import Waldo from "../images/Waldo.jpg"
import { lvInfo } from './lvInfo';
import { HitChecker } from './FirebaseHandler';



export default function Selector(props){

    //gives isFoun
    const target1Effect=props.isFound[0]?"opacity(25%)":"opacity(100%)"
    const target2Effect=props.isFound[1]?"opacity(25%)":"opacity(100%)"
    const target3Effect=props.isFound[2]?"opacity(25%)":"opacity(100%)"

     async function clickHandler(levelID,target,x,y){
        
        setTimeout(()=>{props.setMenuOn(false)},400)
        await HitChecker(levelID,target,x,y)
        const tempArr=props.isFound
        const targetIndex=parseInt(target)-1
        if(await HitChecker(levelID,target,x,y)){
            tempArr[targetIndex]=true}
        console.log(tempArr)
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
            <Button onClick={()=>{clickHandler(props.levelID,"1",props.hitX,props.hitY)}}>
                <Avatar src={lvInfo[props.levelID].target1Img} sx={{filter:target1Effect}}/>
            </Button>
            <Button onClick={()=>{clickHandler(props.levelID,"2",props.hitX,props.hitY)}}>
                <Avatar src={lvInfo[props.levelID].target2Img} sx={{filter:target2Effect}}/>
            </Button>
            <Button onClick={()=>{clickHandler(props.levelID,"3",props.hitX,props.hitY)}}>
                <Avatar src={lvInfo[props.levelID].target3Img} sx={{filter:target3Effect}}/>
            </Button>

        </Box>
    </Box>
}