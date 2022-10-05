import { Box,Grid,Paper,Avatar } from '@mui/material';
import Waldo from "../images/Waldo.jpg"


export default function Checklist(){
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
            <Avatar src={Waldo}/>
            <Avatar src={Waldo}/>
            <Avatar src={Waldo}/>
        </Box>

    </Box>

}