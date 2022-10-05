import { Box,Button,Paper,Avatar } from '@mui/material';
import Waldo from "../images/Waldo.jpg"


export default function DebugDisplay(props){
    return <Box
    height="0"
    backgroundColor="gray"
    width="100%"
    >
        <Box 
        backgroundColor="black"
        color="white" 
        zIndex="1"
        width="12rem"
        height="fit-content"
        position="relative"
        display="flex"
        flexDirection="column"
        sx={{opacity:"80%"}}
        >
            <Box>
            {props.txt}
            </Box>
            <Box>
            {props.txt2}
            </Box>
        </Box>
    </Box>
}