import React, { useState } from 'react'
import { Link } from "react-router-dom"
import "./Nav.css"

export default function NavigationBar() {
  
  const [ imageType, setImageType ] = useState('png')

  return (
    <>
      <nav className='nav__bar'>
          <img 
            src={require(`../../images/mushroom.${imageType}`)} 
            id="nav__logo" 
            alt="Mushroom Mascot"
            onMouseEnter={()=>setImageType('gif')}
            onMouseLeave={()=>setImageType('png')}
          />
          <header className='nav__title'>
            <h1>Omok</h1>
            <p>A MapleStory Resource Page</p>
          </header>
          <div id='nav__links'>
            <Link to="/Omok">Home</Link>
            <Link to="/LinksAndLegion">Links Legion</Link>
            <Link to="/TrainingMaps">Training</Link>
            <Link to="/SignIn">Sign In</Link>
          </div>
      </nav>
      <img src={require("../../images/banner.png")} id="banner" alt="Reddit Banner"/>
    </>
  )
}