import React from 'react'
import VectorLogo from "../Images/Vector.svg"
import google from "../Images/google-logo-transparent-alphabet-4.png"
import "./css/Signup.css"
import { signup } from '../Redux/signupSlice'
import { useDispatch,useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Signup = () => {

    const dispatch = useDispatch();
 const {signUpdata,loading} = useSelector((state)=>state.sigupd)
 console.log(signUpdata)
    const enter = (e) => {
        e.preventDefault();
        const firstname = e.target.elements[0].value;
        const lastname = e.target.elements[1].value;
        const email = e.target.elements[2].value;
        const password = e.target.elements[3].value;
        const phonenumber = e.target.elements[4].value;
        e.target.elements[0].value = "";
        e.target.elements[1].value = "";
        e.target.elements[2].value = "";
        e.target.elements[3].value = "";
        e.target.elements[4].value = "";
        dispatch(signup({ firstname, lastname, email, password,phonenumber }));
    }

    return (
        <form className="SignupContainer" onSubmit={enter}>

                <img className='signuplogo' src={VectorLogo} />
                <p className='signup' > SIGN UP </p>
                <div className="name" >
                    <input type="text" placeholder='   First Name *' required className='box1'></input>
                    <input type="text" placeholder='   Last Name *' required className='box2'></input>
                </div>
                <input type="text" placeholder='   Email Address *' required className='box3' ></input>
                <input type="text" placeholder='   Password *' required className='box4' ></input>
                <input type="tel" placeholder='    Phone Number *' required className='box5'></input>
                <button className='Sign-in-btn' > SIGN UP </button>
                <button className='Sign-in-btn-glg' > < img className='Googlelogo' src={google} />GOOGLE SIGN UP</button >
                <p className='Login-link' > Already Have An Account ? <Link to="/" >LOGIN</Link></p >
        </form>


    )
}

export default Signup