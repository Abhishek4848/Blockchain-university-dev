import React from 'react'
import { useState, useEffect } from 'react';
import '../../assets/css/main.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import getCurrentUser from './Getcourse';
import Customcard from './Customcard';
import Newcourse from './Newcourse';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import { List, ListItemButton, ListItemText, Typography } from '@mui/material';

export default function Courses() {
    
    const [user, setUser] = useState("");

    useEffect(() => {
        setUser(getCurrentUser());
    }, []);

const[tcourse,setTcourse]=React.useState('')

    const getcourses=()=>{
        axios.get('http://localhost:8050/fetchcourses')
            .then(res=>{
                    setTcourse(res.data)
                }
            )
            .catch(err=>{
                console.log(err)
            })
    }

    const handleSignOut=()=>{
        localStorage.removeItem("token");
        window.location.href='/'
}
    const [state, setstate] = useState(false);
    const [courses,setCourses]=useState([]);
    const handleAddc=(name,category,fee,link)=>{
        console.log('link:',link)
        const newCourse={name:name,category:category,fee:fee,link:link,cby:user.name};
        const newCourseData=courses.concat(newCourse);
        setTcourse(newCourseData);
    }
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
                <ListItemButton>
                    <ListItemText primary="Students"/>
                </ListItemButton>
                <ListItemButton onClick={handleSignOut}>
                    <ListItemText primary="Sign Out"/>
                </ListItemButton>
            </List>
            </div>

    )
  return (
    <><div id="page-wrapper" className="is-preload">

          <header id="header">
              <h1><a href="/courses">Blearning</a> Capstone Project</h1>
              <nav id="nav">
                  <ul>
                      <li><a href="/courses">Home</a></li>
                      <li ><a href="http://localhost:8888" target={'#'}> Gen Cert</a></li>
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
                  <h2>Welcome Back {user.name}</h2>
                  <p>Anybody can teach.</p>
              </header>
              <Newcourse onSubmit={handleAddc}/>
              <p>{getcourses()}</p>
              <Grid container spacing={3} className="grid">
            {(tcourse.length === 0)?(
            <div className='align-center'>
                <Typography variant='h2' component='p' style={{textAlign:'center'}}></Typography>
            </div>):
              tcourse.map((item)=>(
                <Grid item md={4} sm={6} xs={12}>
                    <Customcard item={item}/>
                </Grid>))}
              </Grid>
            </section>
     
          <footer id="footer">
              <ul className="icons">
                  <li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                  <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                  <li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                  <li><a href="#" className="icon brands fa-github"><span className="label">Github</span></a></li>
                  <li><a href="#" className="icon brands fa-dribbble"><span className="label">Dribbble</span></a></li>
                  <li><a href="#" className="icon brands fa-google-plus"><span className="label">Google+</span></a></li>
              </ul>
              <ul className="copyright">
                  <li>&copy; Untitled. All rights reserved.</li>
              </ul>
          </footer>

      </div><script src="assets/js/jquery.min.js"></script><script src="assets/js/jquery.dropotron.min.js"></script><script src="assets/js/jquery.scrollex.min.js"></script><script src="assets/js/browser.min.js"></script><script src="assets/js/breakpoints.min.js"></script><script src="assets/js/util.js"></script><script src="assets/js/main.js"></script></>

  )
}
