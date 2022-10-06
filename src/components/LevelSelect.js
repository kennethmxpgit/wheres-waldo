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
import Leaderboard from './Leaderboard';
import {useState, useEffect} from 'react'
import { app, db } from "../firebase-config";
import {
  set,
  collection,
  doc,
  add,
  update,
  get,
  data,
  getDoc,
} from "firebase/firestore";
import {LeaderboardCall} from './FirebaseHandler';

export default function LevelSelect() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedLevel, setSelectedLevel] = useState(1);
    const [currLeaderboard,setCurrLeaderboard]=useState('');
    const cardHeight='140';
    let leaderboardList='';

    async function asyncWrapper(){
        let leaderboardList= await LeaderboardCall();
        setCurrLeaderboard(leaderboardList)
    }

    useEffect(() => {
        {asyncWrapper()}
      }, []);

      
  return (
    
    <Box
    display="flex"
    flexDirection="column"
    height="100%"
    >
        <Leaderboard 
        modalOpen={modalOpen} 
        setModalOpen={setModalOpen} 
        selectedLevel={selectedLevel}
        leaderboardList={currLeaderboard}
        />
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
        <CardActionArea href="/play/1">
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
            <Button size="small" color="primary" onClick={()=>{setModalOpen(true); setSelectedLevel(1)}}>
            LEADERBOARD
            </Button>
        </CardActions>
        </Card>
            </Grid>

            <Grid item>
            <Card sx={{ maxWidth: 180 }}>
        <CardActionArea href="/play/2">
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
        </CardActionArea >
        <CardActions>
            <Button size="small" color="primary" onClick={()=>{setModalOpen(true); setSelectedLevel(2)}}>
            LEADERBOARD
            </Button>
        </CardActions>
        </Card>
            </Grid>

            <Grid item>
            <Card sx={{ maxWidth: 180 }}>
        <CardActionArea href="/play/3">
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
            <Button size="small" color="primary" onClick={()=>{setModalOpen(true); setSelectedLevel(3)}}>
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
