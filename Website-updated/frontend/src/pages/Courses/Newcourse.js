import * as React from 'react';
import { useState,useEffect } from 'react';
import getCurrentUser from './Getcourse';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Select } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import '../../assets/css/main.css'

export default function Newcourse({onSubmit}) {
  const [user, setUser] = useState("");

    useEffect(() => {
        setUser(getCurrentUser());
    }, []);
  const [open, setOpen] = React.useState(false);
  const [course,setCourse]=React.useState({
    name:'',
    category:'',
    fee:NaN, 
    link:'',
    cby:'',
    se:[]
  });
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit=()=>{
    const { name, category, fee,link,cby} = course
        if( name && category && fee && link && cby)
        {    
            axios.post("http://localhost:8050/courses", course)
            .then( res => {
                window.alert(res.data.message)
            })
        } else {
            alert("Invalid Credentials")
        }
    onSubmit(course.name,course.category,course.fee,course.link, course.cby);
    setOpen(false);
  }

  return (
    <div>
      <Button variant='contained' color='inherit' onClick={handleClickOpen}>
        New Course
      </Button>
      <Dialog maxWidth='sm' open={open} onClose={handleClose}>
        <DialogTitle>New Course</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add a New Course.
          </DialogContentText>
          <TextField
            onChange={(e)=>setCourse({...course,name:e.target.value,cby:user.name})}
            autoFocus
            margin="dense"
            id="name"
            label="Course Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <></>
          <></>
          <Select
                labelId="Category"
                fullWidth
                id="category"
                value={course.category}
                label="Category"
                onChange={(e)=>setCourse({...course,category:e.target.value})}>
                    <MenuItem value="Web Development">Web Development</MenuItem>
                    <MenuItem value="Cyber Security">Cyber Security</MenuItem>
                    <MenuItem value="DBMS">DBMS</MenuItem>
                    <MenuItem value="Finance">Finance</MenuItem>
                    <MenuItem value="ML/AI">ML/AI</MenuItem>
            </Select>
          <TextField
          onChange={(e)=>setCourse({...course,fee:e.target.value})}
            autoFocus
            margin="dense"
            id="fee"
            label="Fee in INR"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
          onChange={(e)=>setCourse({...course,link:e.target.value})}
            autoFocus
            margin="dense"
            id="link"
            label="link"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
