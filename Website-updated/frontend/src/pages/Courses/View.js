import React from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import IconButton from '@mui/material/IconButton';
import SourceIcon from '@mui/icons-material/Source';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { Link } from "@mui/material";
import '../../assets/css/main.css'
//import { Typography } from "@mui/material";
export default function View({item}){
    const [open,setOpen]=React.useState(false)

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

return(
    <><IconButton variant='contained' color="inherit" onClick={handleClickOpen} className='card-button'>
        <SourceIcon/>
    </IconButton>
    <Dialog maxWidth='sm' open={open} onClose={handleClose}>
        <DialogTitle>Course link</DialogTitle>
        <DialogContent>
            <DialogContentText>
                <Link href={item.link}>{item.link}</Link>
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Close</Button>
        </DialogActions>
    </Dialog></>
  )
}