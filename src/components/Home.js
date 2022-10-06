import WaldoHome from '../images/waldohome.png'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';


export default function Home(homeImg){

    return <Box
    height="100vh"
    display="flex"
    alignItems="center"
    justifyContent="center"
    width="100vw"
    flexDirection="column">
        <Box
        component="img"
        sx={{
          maxHeight: "50vh",
          maxWidth:"90vw",
          pb:5
        }}
        alt="Waldo welcoming"
        src={WaldoHome}      
        loading="eager"
        />
        

<Button variant="contained" size="large" color="error" href="/level">Start Game</Button>
<Link underline="none" href="#" color="black" margin="2%">
  <Box display="flex" alignItems="center" margin="1rem">
    <GitHubIcon fontSize="large" sx={{color:"black"}}/>kennethmxpgit
  </Box>
</Link>



        
    </Box>
}