import { Box,Button,Paper,Avatar } from '@mui/material';
import Waldo from "../images/Waldo.jpg"


export default function Checklist(){
    return <Box height="0">
            <Paper elevation={5} sx={{
        position:"absolute",
        top:"20rem",
        left:"5rem",
        zIndex:"1",
        display:"flex",
        // flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",

    }}>
    <Button paddingX="1%" display="flex" alignItems="center" variant="text"
        justifyContent="center"
        sx={{color:"black"}}>
    <Avatar src={Waldo} />
    
    </Button>

    <Button paddingX="1%" display="flex" alignItems="center" variant="text"
        justifyContent="center"
        sx={{color:"black"}}>
    <Avatar src={Waldo} />
    
    </Button>

    <Button paddingX="1%" display="flex" alignItems="center" variant="text"
        justifyContent="center"
        sx={{color:"black"}}>
    <Avatar src={Waldo} />
    
    </Button>


        </Paper>


    </Box>
}