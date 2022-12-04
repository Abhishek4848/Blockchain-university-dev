import React from 'react'
import './App.css';
import { useState } from 'react';
import Home from './pages/Home/Home'
import Register from './pages/Register/Register';
import Login from './pages/Register/Login';
import Courses from './pages/Courses/Courses'
import Shome from './pages/Studenthome/Shome';
import Mcourse from './pages/Studenthome/mycourses';
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom" 
function App() {
  const user=localStorage.getItem("token")
  console.log(user)
  return (
   <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        {user && <Route exact path="/courses" element={<Courses/>}/>}
          <Route path="/login" element={<Login/>}/>
        <Route path="/courses" exact element={<Navigate replace to="/login"/>}/>
        {user && <Route exact path="/shome" element={<Shome/>}/>}
        <Route path="/shome" exact element={<Navigate replace to="/login"/>}/>
        {user && <Route exact path="/mycourses" element={<Mcourse/>}/>}
        <Route path="/mycourses" exact element={<Navigate replace to="/login"/>}/>
      </Routes>
    </Router>
   </div>
  );
}

export default App;
