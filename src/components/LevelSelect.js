import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions,Box,Grid } from '@mui/material';
import lv1img from '../images/lv1.jpg'
import lv2img from '../images/lv2.jpg'
import lv3img from '../images/lv3.jpg'
import TopBar from './TopBar.js'

export default function LevelSelect() {
    const cardHeight='140';
  return (
    <Box
    display="flex"
    flexDirection="column"
    height="100%"
    >
    {/* background */}
    <div style={{
        overflowY:"hidden",
        overflowX:"hidden"
    }}>
        <img src={lv1img}
        style={{
            width:"2000px",
            position:"fixed",
            zIndex:"-1",
            opacity:"10%",
        }}
        />
    </div>


    <TopBar/>


    <div
    style={{
        height:"100%"
    }}>
        <Grid container spacing={5}
        height="100%"
        padding="2%"
        
        display="flex"
        alignItems="center"
        justifyContent="center"         >

            
            <Grid item>
                
            <Card sx=
            {{
                maxWidth: 180,

            }}
            >
        <CardActionArea>
            <CardMedia
            component="img"
            height={cardHeight}
            image={lv1img}
            alt="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Level 1
            </Typography>
            <Typography variant="body2" color="text.secondary">
                The Beach
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
            LEADERBOARD
            </Button>
        </CardActions>
        </Card>
            </Grid>

            <Grid item>
            <Card sx={{ maxWidth: 180 }}>
        <CardActionArea>
            <CardMedia
            component="img"
            height={cardHeight}
            image={lv2img}
            alt="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Level 2
            </Typography>
            <Typography variant="body2" color="text.secondary">
                The Picnic
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
            LEADERBOARD
            </Button>
        </CardActions>
        </Card>
            </Grid>

            <Grid item>
            <Card sx={{ maxWidth: 180 }}>
        <CardActionArea>
            <CardMedia
            component="img"
            height={cardHeight}
            
            image={lv3img}
            alt="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Level 3
            </Typography>
            <Typography variant="body2" color="text.secondary">
                The Feast
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
            LEADERBOARD
            </Button>
        </CardActions>
        </Card>
            </Grid>

        </Grid>
    </div>
        
    </Box>
  );
}
