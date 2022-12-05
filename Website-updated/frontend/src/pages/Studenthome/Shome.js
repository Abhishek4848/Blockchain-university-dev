import React from 'react'
import '../../assets/css/main.css'
import { useEffect,useState} from 'react';
import {useNavigate}  from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid';
import Customcards from './Customcards';
import getCurrentUser from '../Courses/Getcourse';
import { List, ListItemButton, ListItemText, Typography } from '@mui/material';
import axios from 'axios';

export default function Shome() {
    
    const navigate=useNavigate();

    const [user, setUser] = useState("");

    useEffect(() => {
        setUser(getCurrentUser());
    }, []);
    const handleSignOut=()=>{
        localStorage.removeItem("token");
        window.location.href='/'
}
const mycourse=()=>{
    window.location.href='/mycourses'
}
    const[courses,setCourses]=React.useState('')
    const getcourses=()=>{
        axios.get('http://localhost:8050/fetchcourses')
            .then(res=>{
                setCourses(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    }
    const[certificates,setCertificates]=React.useState('')
    const getcertificates=()=>{
        axios.get('http://localhost:8050/fetchcertificates')
            .then(res=>{
                setCertificates(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    }
    const [state, setstate] = React.useState(false);
    const toggleDrawer=(toggle)=>(event)=>{
        if(
            event.type==="keydown"&&
            (event.key==="Tab"||event.key==="Shift"))
            {
                return;
            }
        setstate(toggle);
    }
    const list=()=>(
        <div className='list' role='presentation' onClick={toggleDrawer(false)}>
            <List>
                <ListItemButton>
                    <ListItemText primary=""/>
                </ListItemButton>
                <ListItemButton>
                    <ListItemText primary=""/>
                </ListItemButton>
                <ListItemButton>
                    <ListItemText primary="Profile"/>
                </ListItemButton>
                <ListItemButton onClick={mycourse}>
                    <ListItemText primary="My Courses"/>
                </ListItemButton>
                <ListItemButton onClick={handleSignOut}>
                    <ListItemText primary="Sign Out"/>
                </ListItemButton>
            </List>
            </div>)

  return (
    <div id="page-wrapper" className="is-preload">

          <header id="header">
              <h1><a href="/shome">Blearning</a> Capstone Project</h1>
              <nav id="nav">
                  <ul>
                      <li><a href="/shome">Home</a></li>
                      <IconButton color="inherit" aria-label="Dashboard" onClick={toggleDrawer(true)}>
                        <MenuIcon/>
                      </IconButton>
                      <Drawer anchor='right' open={state} onClose={toggleDrawer(false)}>
                        {list()}
                      </Drawer>
                  </ul>
              </nav>
          </header>

          <section id="main" className="container">
              <header>
                  <h2>Welcome Back {user.name}!</h2>
                  <p>Anybody can Learn.</p>
                  <p>{getcourses()}</p>
                  <Grid container spacing={6} className="grid">
                    {(courses.length === 0)?(
                        <div className='align-center'>
                            <Typography variant='h2' component='p' style={{textAlign:'center'}}></Typography>
                        </div>):
                        courses.map((item)=>(
                        <Grid item md={4} sm={6} xs={12} key={item.id}>
                            <Customcards item={item}/>
                        </Grid>))}
                </Grid>
                <p>{getcertificates()}</p>
                <div padding-left="70px">
                    {(certificates.length === 0)?(
                        <br></br>):
                        <table>
                            <tr>
                                <th align='right'>Course Name</th>
                                <th align='left'>certificate ID</th>
                            </tr>
                        {certificates.map((item)=>(
                        <tr>
                            <td align='left'>{item.courseName}</td>
                            <td align='left'><a href={'http://localhost:3001/display/certificate/' + item.certificateId} target={'#'}>{item.certificateId}</a></td>
                        </tr>
                        ))}
                        </table>
                    }
                </div>
              </header>
              </section>
              </div>
  )
}
