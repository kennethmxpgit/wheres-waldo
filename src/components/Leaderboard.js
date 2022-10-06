import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default function Leaderboard(props){

  const PopulateLeaderboard=()=>{
    if(props.leaderboardList){
      console.log(props.leaderboardList)

      let playerList=props.leaderboardList[props.selectedLevel-1].map((el)=>{
        return <ListItem><ListItemText primary={el.time} secondary={el.name} /></ListItem>
      })
      return (
        <div>
          {playerList}
        </div>
      )
    }
    

  }

    
return <Dialog open={props.modalOpen} onClose={()=>props.setModalOpen(false)}>
        <DialogTitle>🏆 Leaderboard for Level {props.selectedLevel} </DialogTitle>
    <DialogContent>
      <DialogContentText>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' ,}}>
      {PopulateLeaderboard()}
    </List>
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={()=>props.setModalOpen(false)}>Close</Button>
    </DialogActions>
</Dialog>
}