import { Box,Grid,Paper,Avatar } from '@mui/material';
import Waldo from "../images/Waldo.jpg";
import { lvInfo } from './lvInfo';


export default function Checklist(props){
    return <Box
    width="100%"
    height="0"
    sx={{
        backgroundColor:"gray",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    }}
    >
        <Box sx={{
                backgroundColor:"white",
                display:"flex",
                borderRadius: "1rem",
                padding:"0.3rem",
                zIndex:"1"

            }}
        >
            <Avatar src={lvInfo[props.levelID].target1Img}/>
            <Avatar src={lvInfo[props.levelID].target2Img}/>
            <Avatar src={lvInfo[props.levelID].target3Img}/>
        </Box>

    </Box>

}