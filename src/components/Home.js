import Image from 'material-ui-image'
import WaldoHome from '../images/waldohome.png'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function Home(){

    return <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    width="100%"
    flexDirection="column">
        <Box
        component="img"
        sx={{
          maxWidth: { xs: 350, md: 700 },
          pb:5
        }}
        alt="The house from the offer."
        src={WaldoHome}      />

<Button variant="contained" size="large" color="error" href="/level">Start Game</Button>



        
    </Box>
}