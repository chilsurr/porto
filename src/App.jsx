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
        <Heading/>
        <Profile/>
        <Project/>
        <Sklills/>
        <Contact/>
        
      </div>
    </>
  )
}

export default App
