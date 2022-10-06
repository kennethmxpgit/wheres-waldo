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
    
return <Dialog open={props.modalOpen} onClose={()=>props.setModalOpen(false)}>
        <DialogTitle>🏆 Leaderboard for Level {props.selectedLevel} </DialogTitle>
    <DialogContent>
      <DialogContentText>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' ,}}>
      <ListItem>
        <ListItemText primary="356 s" secondary="Kenny" />
      </ListItem>
      <ListItem>
        <ListItemText primary="132 s" secondary="Koni" />
      </ListItem>
      <ListItem><ListItemText primary="353 s" secondary="Kenderman" /></ListItem>
    </List>
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={()=>props.setModalOpen(false)}>Close</Button>
    </DialogActions>
</Dialog>
}