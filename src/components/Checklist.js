import { Box,Grid,Paper,Avatar } from '@mui/material';
import Waldo from "../images/Waldo.jpg";
import { lvInfo } from './lvInfo';


export default function Checklist(props){
    const target1Effect=props.isFound[0]?"opacity(25%)":"opacity(100%)"
    const target2Effect=props.isFound[1]?"opacity(25%)":"opacity(100%)"
    const target3Effect=props.isFound[2]?"opacity(25%)":"opacity(100%)"
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
                zIndex:"1",
                border:"1"

            }}
        >
            <Avatar src={lvInfo[props.levelID].target1Img} sx={{filter:target1Effect}}
            />
            <Avatar src={lvInfo[props.levelID].target2Img} sx={{filter:target2Effect}}/>
            <Avatar src={lvInfo[props.levelID].target3Img} sx={{filter:target3Effect}}/>
        </Box>

    </Box>

}