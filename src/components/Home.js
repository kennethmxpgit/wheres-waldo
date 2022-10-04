import WaldoHome from '../images/waldohome.png'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function Home(homeImg){

    return <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    width="100vw"
    flexDirection="column">
        <Box
        component="img"
        sx={{
          maxWidth: { xs: 350, md: 700 },
          pb:5
        }}
        alt="Waldo welcoming"
        src={WaldoHome}      
        loading="eager"
        />
        

<Button variant="contained" size="large" color="error" href="/level">Start Game</Button>



        
    </Box>
}