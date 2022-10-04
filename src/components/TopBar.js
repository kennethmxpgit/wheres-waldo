import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import barLogo from '../images/barlogo.svg'


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
      <AppBar position="static" color="error">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/">
          <Box
        component="img"
        sx={{
          maxWidth: { xs: 100, md: 150 },
          p:"0.5%"
        }}
        alt="Waldo welcoming"
        src={barLogo}      
        loading="eager"
        />
          </Link>

          </Typography>

          <Button href="https://github.com/kennethmxpgit/wheres-waldo">
          <GitHubIcon fontSize="large" sx={{color:"white"}}/>
          </Button>
        </Toolbar>
      </AppBar>
  )
}