import React from 'react'
import VectorLogo from "../Images/Vector.svg"
import google from "../Images/google-logo-transparent-alphabet-4.png"
import "./css/Signup.css"
const Signup = () => {
    return (
        <div className="SignupContainer">
            <img className='signuplogo' src={VectorLogo} />
            <p className='signup'>SIGN UP</p>
            <div className="name">
            <input type="text" placeholder='   First Name *' required className='box1'></input>
            <input type="text" placeholder='   Last Name *' required className='box2'></input>
            </div>
            <input type="text" placeholder='   Email Address *' required className='box3'></input>
            <input type="text" placeholder='   password *' required className='box4'></input>
            <button className='Sign-in-btn'>SIGN IN</button>
            <button className='Sign-in-btn-glg'><img className='Googlelogo' src={google} />GOOGLE SIGN IN</button>
            <p className='Login-link'> Already Have An Account ? <a href='#'>SIGN IN</a></p>
        </div>
    )
}

export default Signup