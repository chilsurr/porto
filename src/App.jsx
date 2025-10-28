import { useState } from 'react'
import './App.css'
import Heading from "./componen/heading"
import Profile from "./componen/profile"
import Project from "./componen/project"
import Sklills from './componen/skills'
import Contact from './componen/contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container-fluid">
        <section>
          <nav className="navbar fixed-top">
            <div className="container">
              <a className="navbar-brand" href="#">
                <img className='nav-profile' src="src/assets/man.png" alt="Bootstrap"/>
              </a>
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <a className="nav-link active" href="#project">Proyek</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#skills">Skills</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">Contact</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#profile">About</a>
                </li>
              </ul>
            </div>
          </nav>
        </section>
        <Heading/>
        <Profile/>
        <Project/>
        <Sklills/>
        <Contact/>
        <section>
          <div className="row d-flex justify-content-center">
            <div className="col-lg-10">
              <footer className='d-lg-flex justify-content-between'>
                <div className='d-flex justify-content-center align-items-center my-text-color'>Terms & Conditions</div>
                <div className='footer-sosmed my-sm-3 d-flex justify-content-sm-center align-items-center'>
                  <a href=''>
                      <img src="src/assets/instagram.png" alt="" />
                  </a>
                  <a href=''>
                      <img src="src/assets/linkedin.png" alt="" />
                  </a>
                  <a href=''>
                      <img src="src/assets/github.png" alt="" />
                  </a>
                </div>
                <div className='d-flex justify-content-center align-items-center my-text-color'>© 2025 Suryaa. All rights reserved.</div>
              </footer>
            </div>
          </div>
          
        </section>
      
      </div>
    </>
  )
}

export default App
