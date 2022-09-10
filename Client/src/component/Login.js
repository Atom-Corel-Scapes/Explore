import React from 'react'
import VectorLogo from "../Images/Vector.svg"
import google from "../Images/google-logo-transparent-alphabet-4.png"
import "./css/Login.css"
const Login = () => {
  return (
    <div className="LoginContainer">

       <img className='Vector' src={VectorLogo}/>
        <label></label>
       <input type="text" placeholder='   Email Address *' required className='Input-box1'></input>
       <input type="text" placeholder='   password *' required className='Input-box2'></input>
       <button className='Sign-in-btn'>SIGN IN</button>
       <button className='Sign-in-btn-glg'><img className='Googlelogo' src={google}/>GOOGLE SIGN IN</button>
       <p className='footer-signup-link'> Don't have an account ? <a href='#'>SIGN UP</a></p>

    </div>
  )
}

export default Login