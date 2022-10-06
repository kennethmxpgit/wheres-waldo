import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function winScreen(props){
    return <Dialog open={props.gameWon} >
    <DialogTitle>Awesome Job!! 🎉🎉 </DialogTitle>
    <DialogContent>
      <DialogContentText>
        Your time is 345s. Enter your name below
      </DialogContentText>
      <TextField
        label="Name"
        variant="standard"
      />
    </DialogContent>
    <DialogActions>
      <Button href="/level">Go Back</Button>
      <Button>Save</Button>
    </DialogActions>
  </Dialog>
}