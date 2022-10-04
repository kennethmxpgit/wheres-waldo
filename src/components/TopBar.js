import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import barLogo from '../images/barlogo.svg'

export default function ButtonAppBar() {
  return (
    
    // <div style={{
    //     height:"12vh",
    //     width:"100vw",
    //     // backgroundColor:"#d32f2f",
    //     display:"flex",
    //     alignItems:"center",
    //     boxSizing:"border-box",
    //     paddingLeft:"1.5%",
    //     justifyContent:"left"
    // }}>
        // <a href="/">
        //     <div>

        //         <img src={barLogo}
        //         height="70px"
        //         />
        //     </div>
        // </a>

    // </div>
    <Box
    backgroundColor="#d32f2f"
    height="12vh"
    display="flex"
    alignItems="center"
    padding="1%"
    sx={{
        justifyContent:{xs:"left",md:"center"}
    }}
    >
        <Link href="/">
        <Box
        component="img"
        sx={{
          maxWidth: { xs: 100, md: 180 },
        }}
        alt="Waldo welcoming"
        src={barLogo}      
        loading="eager"
        />
        </Link>
    </Box>


  );
}
