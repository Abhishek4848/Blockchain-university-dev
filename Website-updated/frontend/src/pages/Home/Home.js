import React from 'react'
import '../../assets/css/main.css';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Home() {
const navigate=useNavigate();
const about=useRef(null);
const scrollToSection=(elementRef)=>{
            window.scrollTo({
                top:elementRef.current.offsetTop,
                behavior:'smooth'
        })};
  return (
    <><div id="page-wrapper" className="is-preload">

    <header id="header">
        <h1><a href="/">Blearning</a> Capstone Project</h1>
        <nav id="nav">
            <ul>
                <li><a href="/">Home</a></li>
                    <li><a onClick={()=>scrollToSection(about)}>About</a></li>
            
                <li><a href="/register" className="button">Sign Up</a></li>
            </ul>
        </nav>
    </header>

          <section id="banner">
              <h2>B-Learning</h2>
              <p>Blockchain based higher education ecosystem.</p>
              <ul className="actions special">
                  <li><button className="button primary" onClick={()=>{navigate("/register");}}>Sign Up</button></li>
                  <li><button className="button" onClick={()=>scrollToSection(about)}>Learn More</button></li>
              </ul>
          </section>


          <section id="main" className="container" ref={about}>

              <section className="box special">
                  <header className="major">
                      <h2 >Introducing a decentralized 
                          <br />
                          learning platform </h2>
                      <p>where the teachers and students freely interact without involving any central authority.</p>
                  </header>
                  <span className="image featured"><img src="images/pic01.jpg" alt="" /></span>
              </section>

              <section className="box special features">
                  <div className="features-row">
                      <section>
                          <span className="icon solid major fa-bolt accent2"></span>
                          <h3>Increased efficiency and speed</h3>
                          <p>Traditional paper-heavy processes are time-consuming, prone to human error, and often requires third-party mediation. By streamlining these processes with blockchain, transactions can be completed faster and more efficiently.</p>
                      </section>
                      <section>
                          <span className="icon solid major fa-chart-area accent3"></span>
                          <h3>Greater Transparency</h3>
                          <p>Without blockchain, each organization has to keep a separate database. Because blockchain uses a distributed ledger, transactions and data are recorded identically in multiple locations.</p>
                      </section>
                  </div>
                  <div className="features-row">
                      <section>
                          <span className="icon solid major fa-cloud accent4"></span>
                          <h3>Immutability</h3>
                          <p>mmutability simply means that transactions, once recorded on the blockchain, can't be changed or deleted. On the blockchain, all transactions are timestamped and date-stamped, so there's a permanent record. As such, blockchain can be used to track information over time, enabling a secure, reliable audit of information. </p>
                      </section>
                      <section>
                          <span className="icon solid major fa-lock accent5"></span>
                          <h3>Enhanced Security</h3>
                          <p>Information is stored across a network of computers rather than a single server, making it difficult for hackers to view data.</p>
                      </section>
                  </div>
                  </section>
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
                  <li>&copy; Untitled. All rights reserved.</li></ul>
          </footer>

      </div><script src="assets/js/jquery.min.js"></script><script src="assets/js/jquery.dropotron.min.js"></script><script src="assets/js/jquery.scrollex.min.js"></script><script src="assets/js/browser.min.js"></script><script src="assets/js/breakpoints.min.js"></script><script src="assets/js/util.js"></script><script src="assets/js/main.js"></script></>
  )
}
