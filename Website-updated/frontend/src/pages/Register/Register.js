import React from "react";
import './css/style.css';
import '../../assets/css/main.css';
import './fonts/material-icon/css/material-design-iconic-font.min.css';
import su from './images/signup-image.jpg'
import { useState } from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom";

const Register = () => {
    const navigate=useNavigate();
    const [ data, setData] = useState({
        name:"",
        email:"",
        password:"",
        role: "",
        ssn: "",
        pubaddr:""
    })
    const [error, setError] = useState("");
    const handleChange = ({currentTarget:input})=>{
        setData({...data,[input.name]:input.value});
    }
    

    const register = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8050/register";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			alert(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

            

  return (
    <><div id="page-wrapper" className="is-preload">

          <header id="header">
              <h1><a href="/">Blearning</a> Capstone Project</h1>
              <nav id="nav">
                  <ul>
                      <li><a href="/">Home</a></li>
                      <li>
                          <a href="#" className="icon solid fa-angle-down">Layouts</a>
                          <ul>
                              <li><a href="generic.html">Generic</a></li>
                              <li><a href="contact.html">Contact</a></li>
                              <li><a href="elements.html">Elements</a></li>
                              <li>
                                  <a href="#">Submenu</a>
                                  <ul>
                                      <li><a href="#">Option One</a></li>
                                      <li><a href="#">Option Two</a></li>
                                      <li><a href="#">Option Three</a></li>
                                      <li><a href="#">Option Four</a></li>
                                  </ul>
                              </li>
                          </ul>
                      </li>
                      <li><a href="#" className="button">Sign Up</a></li>
                  </ul>
              </nav>
          </header>
      </div><div className="main">

              <section className="signup">
                  <div className="container">
                      <div className="signup-content">
                          <div className="signup-form">
                              <h2 className="form-title">Sign up</h2>
                              <form className="register-form" id="register-form">
                                  <div className="form-group">
                                      <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                      <input type="text" name="name" id="name" value={data.name} placeholder="Your Name" onChange={handleChange} required />
                                  </div>
                                  <div className="form-group">
                                      <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                                      <input type="email" name="email" id="email" value={data.email} placeholder="Your Email" onChange={handleChange} required />
                                  </div>
                                  <div className="form-group">
                                      <label htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                                      <input type="password" name="password" id="pass" value={data.password} placeholder="Password" onChange={handleChange} required />
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="ssn"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="text" name="ssn" id="ssn" value={data.ssn} placeholder="Your SSN" onChange={handleChange} required />
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="pubaddr"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="text" name="pubaddr" id="ssn" value={data.pubaddr} placeholder="Your Public Wallet Address" onChange={handleChange} required />
                                  </div>
                                  <div className="form-group">
                                  <select name="role" id="category" value={data.role} onChange={handleChange} required>
													<option value="">- Role -</option>
													<option value="1">Student</option>
													<option value="2">Teacher</option>
												</select>
                                    </div>
                                    {error && <div className="error_msg">{error}</div>}
                                  <button type="submit" className="button special" onClick={register}>Register</button>
            
                              </form>

                          </div>
                          <div className="signup-image">
                              <figure><img src={su} alt="sing up image" /></figure>
                              <li className="signup-image-link" onClick={() => navigate('/login')}>I am already member</li>
                          </div>
                      </div>
                  </div>
              </section>

          </div><script src="./vendor/jquery/jquery.min.js"></script><script src="./js/main.js"></script></>
  )
}
export default Register
