import { Box,Grid,Paper,Avatar } from '@mui/material';
import Waldo from "../images/Waldo.jpg"


export default function Checklist(){
    return <Box height="0">
            <Paper elevation={5} sx={{
        position:"relative",
        top:{xs:"0.5rem",md:"0.5rem"},
        left:"1rem",
        height:"5rem",
        width:"13rem",
        zIndex:"1",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        pointerEvents:"none",
        userSelect:"none"
    }}>
    <Box paddingX="4%">
        
    <Avatar src={Waldo} />
    Waldo
    </Box>

    <Box paddingX="4%">
    <Avatar alt="Remy Sharp" src={Waldo} />
    Waldo
    </Box>

    <Box paddingX="4%">
    <Avatar alt="Remy Sharp" src={Waldo} />
    Waldo
    </Box>
        </Paper>


    </Box>
    

}