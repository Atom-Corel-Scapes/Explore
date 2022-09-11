import React from 'react'
import VectorLogo from "../Images/Vector.svg"
import google from "../Images/google-logo-transparent-alphabet-4.png"
import "./css/Login.css"
import { useDispatch } from "react-redux"
import { getUser } from '../Redux/loginSlice'
import { Link } from 'react-router-dom'
const Login = () => {

  const dispatch = useDispatch();

  const signin = (e) => {
    e.preventDefault();
    const email = e.target.elements[0].value;
    const pass = e.target.elements[1].value;
    e.target.elements[0].value = "";
    e.target.elements[1].value = "";
    dispatch(getUser({ email, pass }));
  }

  return (
    <div className="LoginContainer">
      <img className='Vector' src={VectorLogo} />
      <form className='form' onSubmit={signin}>
        <input type="text" placeholder='   Email Address *' required className='Input-box1'></input>
        <input type="password" placeholder='   password *' required className='Input-box2'></input>
        <button className='Sign-in-btn'>SIGN IN</button>
      </form>

      <button className='Sign-in-btn-glg'><img className='Googlelogo' src={google} />GOOGLE SIGN IN</button>
      <p className='footer-signup-link'> Don't have an account ? <Link to="/signup" >SIGN UP</Link></p>
    </div>
  )

}

export default Login