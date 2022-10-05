import { Box,Button,Paper,Avatar } from '@mui/material';
import Waldo from "../images/Waldo.jpg"


export default function Selector(props){
    return <Box
    height="0"
    backgroundColor="gray"
    width="0"
    >
        <Box 
        backgroundColor="white" 
        zIndex="1"
        width="fit-content"
        position="relative"
        display="flex"
        top="90%"
        left={props.mouseY+"%"}
        sx={{borderRadius:"0.5rem"}}
        >
            <Button>
                <Avatar src={Waldo}
                />
            </Button>
            <Button>
                <Avatar src={Waldo}/>
            </Button>
            <Button>
                <Avatar src={Waldo}/>
            </Button>

        </Box>
    </Box>
}