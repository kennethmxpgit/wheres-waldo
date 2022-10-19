import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import barLogo from '../images/barlogo.svg';
import Checklist from './Checklist.js';


// export default function ButtonAppBar() {
//   return (

//     <Box
//     backgroundColor="#d32f2f"
//     height="10vh"
//     display="flex"
//     alignItems="center"
//     padding="1%"
//     sx={{
//         justifyContent:{xs:"left",md:"center"}
//     }}
//     >
//         <Link href="/">
        <Box
        component="img"
        sx={{
          maxWidth: { xs: 100, md: 180 },
        }}
        alt="Waldo welcoming"
        src={barLogo}      
        loading="eager"
        />
//         </Link>

//         <Box display="flex" justifyContent="right"
//         >
//           <GitHubIcon fontSize="large" sx={{color:"white"}}/>           
//         </Box>
        
//     </Box>


//   );
// }

export default function ButtonAppBar() {
  return (
      <Box backgroundColor="#d32f2f" sx={{
        zIndex:1,
        height: { xs: "5rem", md: "12vh" },
        display:"flex",
        alignItems:"center",
      }}>
          <Link to={"/"}>
          <Box
        component="img"
        sx={{
          position:"static",
          height: { xs: "2.75rem", md: 60 },
          left:"0px",
          top:"2.5%",
          p:"1% 1% 1% 25%",
          boxSizing:"border-box",
        }}
        alt="Waldo welcoming"
        src={barLogo}      
        loading="eager"
        />
          </Link>
          <Button href="https://github.com/kennethmxpgit/wheres-waldo"
          sx={{
            position:"static",
            marginLeft:"auto",
            top:"2.5%",
            paddingRight:"2%"
          }}>
          <GitHubIcon fontSize="large" sx={{
            height: { xs: "5rem", md: "5rem" },
            color:"white"}}/>
          </Button>
      </Box>
  )
}