import React from 'react'
import './css/style.css';
import '../../assets/css/main.css';
import './fonts/material-icon/css/material-design-iconic-font.min.css';
import si from './images/signin-image.jpg'
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ( ) => {

            const navigate = useNavigate()
            const [error,setError]=useState("")
            const [ data, setData] = useState({
                email:"",
                password:"",
                role:""
            })
        
            const handleChange = e => {
                const { name, value } = e.target
                setData({
                    ...data,
                    [name]: value
                })
            }
            const login = async (e) => {
                e.preventDefault();
                try {
                    const url = "http://localhost:8050/login";
                    const { data: res } = await axios.post(url, data);
                    localStorage.setItem("token", res.data);
                    alert(res.message)
                    const ur=data.role
                    if(ur === "2"){
                        window.location.href="/courses"}
                        else{window.location.href="/shome"}
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
                      <li><a href="/register" className="button">Sign Up</a></li>
                  </ul>
              </nav>
          </header>
      </div><div className="main">
              <section className="sign-in">
                  <div className="container">
                      <div className="signin-content">
                          <div className="signin-image">
                              <figure><img src={si} alt="sing up image" /></figure>
                              <li className="signup-image-link" onClick={() => navigate('/register')}>Create an account</li>
                          </div>

                          <div className="signin-form">
                              <h2 className="form-title" >Sign In</h2>
                              <form className="register-form" id="login-form">
                                    <div className="form-group">
                                      <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                                      <input type="email" name="email" id="email" value={data.email} placeholder="Your Email" onChange={handleChange} required />
                                    </div>
                                  <div className="form-group">
                                      <label htmlFor="you_pass"><i className="zmdi zmdi-lock"></i></label>
                                      <input type="password" name="password" id="your_pass" value={data.password} placeholder="Password" onChange={handleChange} required/>
                                  </div>
                                  <div className="form-group">
                                  <select name="role" id="category" value={data.role} onChange={handleChange} required>
													<option value="">- Role -</option>
													<option value="1">Student</option>
													<option value="2">Teacher</option>
												</select>
                                    </div>
                                  <div className="form-group">
                                      <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                                      <label htmlFor="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                                  </div>
                                  {error && <div className="error_msg">{error}</div>}
                                  <button type="submit" className="button special" onClick={login}>Login</button>
                              </form>
                              <div className="social-login">
                                  <span className="social-label">Or login with</span>
                                  <ul className="socials">
                                      <li><a href="https://www.facebook.com/"><i className="display-flex-center zmdi zmdi-facebook"></i></a></li>
                                      <li><a href="https://twitter.com/i/flow/login"><i className="display-flex-center zmdi zmdi-twitter"></i></a></li>
                                      <li><a href="https://accounts.google.com/v3/signin/identifier?dsh=S-1290799619%3A1668205232705649&authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F&ec=GAlAwAE&hl=en&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession"><i className="display-flex-center zmdi zmdi-google"></i></a></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>

          </div><script src="./vendor/jquery/jquery.min.js"></script><script src="./js/main.js"></script></>

  )
  }
  export default Login
