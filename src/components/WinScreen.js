import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {saveToLeaderboard}  from './FirebaseHandler';
import * as React from 'react';
import {useEffect, useState} from 'react';



function fancyTimeFormat(duration)
{   
    // Hours, minutes and seconds
    var hrs = ~~(duration / 3600);
    var mins = ~~((duration % 3600) / 60);
    var secs = ~~duration % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}


export default function WinScreen(props){

  const [textState,setTextState]=useState("");



    return <Dialog open={props.gameWon} >
    <DialogTitle>Awesome Job!! 🎉🎉 </DialogTitle>
    <DialogContent>
      <DialogContentText>
        Your time is {fancyTimeFormat(props.finishTime)}
      </DialogContentText>
      <DialogContentText>
        Enter your name below
      </DialogContentText>
      <TextField
        label="Name"
        variant="standard"
        onChange={(e)=>{setTextState(e.target.value)}}
      />
    </DialogContent>
    <DialogActions>
      <Button href="/#/level" >Go Back</Button>
      <Button onClick={()=>{
        saveToLeaderboard(String(props.levelID),textState,props.finishTime)
      }} href="/#/level">Save</Button>
    </DialogActions>
  </Dialog>
}