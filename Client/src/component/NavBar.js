import React from 'react'
import "./css/NavBar.css"
import Logo from "../Images/Explore.jpg"

const NavBar = () => {
  return (
    <div className='NavBarConatiner'>
        <img  className='Logo' src={Logo}/>
        <button className='Btn-signin'>SIGN IN</button>
    </div>
  )
}

export default NavBar