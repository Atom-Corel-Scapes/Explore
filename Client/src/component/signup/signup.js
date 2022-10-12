import React from 'react'
import { useState, useEffect } from 'react'
import VectorLogo from "../Images/Vector.svg"
import google from "../Images/google-logo-transparent-alphabet-4.png"
import { signup } from '../../Redux/Slice/signupSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import "../signup/signup.css"

const Signup = () => {

    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const { data, loading } = useSelector((state) => state.sigupdata);
    const [loginStatus, setLoginStatus] = useState({ status: 0, message: '' });

    useEffect(() => {
        if (data.response === 'success') {
            setLoginStatus({
                status: 1,
                message: 'success'
            })
            // Navigate('/LandingPage')
        } else if (data._message  === "signupData validation failed") {
            setLoginStatus({
                status: 1,
                message: 'failure'
            })
        } else if (data.response === "Invalid Email") {
            setLoginStatus({
                status: 1,
                message: 'invalid'
            })
        }

    }, [data])
    const enter = (e) => {
        e.preventDefault();
        const userFirstname = e.target.elements[0].value;
        const userLastname = e.target.elements[1].value;
        const userEmail = e.target.elements[2].value;
        const userPassword = e.target.elements[3].value;
        const userPhoneNumber = e.target.elements[4].value;
        // e.target.elements[0].value = "";
        // e.target.elements[1].value = "";
        // e.target.elements[2].value = "";
        // e.target.elements[3].value = "";
        // e.target.elements[4].value = "";
        console.log(userFirstname, userLastname, userEmail, userPassword, userPhoneNumber);
        dispatch(signup({ userFirstname, userLastname, userEmail, userPassword, userPhoneNumber }));
    }



    return (
        <>

            <div className='signup-container'>
                {
                    loginStatus.status > 0 &&
                    <div className='signup-status--container'>
                        {loginStatus.message === 'success' && <span className="signup-success">Signup Success!! Signin now</span>}
                        {loginStatus.message === 'failure' && <span className="signup-failure">Signup Fail!! Check the user date given</span>}
                        {loginStatus.message === 'invalid' && <span className="signup-failure">Email is already taken!! Use new Email or Login</span>}
                    </div>
                }

                <form className="signup-container--form" onSubmit={enter}>
                    <div className='sign-up'>
                    <img className='signup-icon' src={VectorLogo} />
                    </div>
                    <p className='signup' > SIGN UP </p>
                    <div className="name" >
                        <input type="text" placeholder='   First Name *' required className='box1'></input>
                        <input type="text" placeholder='   Last Name *' required className='box2'></input>
                    </div>
                    <input type="text" placeholder='   Email Address *' required className='box3' ></input>
                    <input type="text" placeholder='   Password *' required className='box4' ></input>
                    <input type="tel" placeholder='    Phone Number *' required className='box5'></input>
                    <button className='Sign-up-btn' > SIGN UP </button>
                    <button className='Sign-up-btn-glg' > < img className='SGooglelogo' src={google} />GOOGLE SIGN UP</button >
                    <p className='Login-link' > Already Have An Account ? <Link to="/" >LOGIN</Link></p >
                </form>
            </div>
        </>



    )

}

export default Signup
