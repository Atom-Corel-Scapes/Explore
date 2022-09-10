import React from 'react'
import VectorLogo from "../Images/Vector.svg"
import google from "../Images/google-logo-transparent-alphabet-4.png"
import "./css/Signup.css"
import { signup } from '../Redux/signupSlice'
import { Dispatch } from 'react'
(signup) => {
    const dispatch = useDispatch();
    const enter = (e) => {
        e.preventdefault();
        const firstname = e.target.elements[0].firstname;
        const lastname = e.target.elements[1].lastname;
        const email = e.target.elements[2].email;
        const password = e.target.elements[3].password;
        e.target.elements[0].firstname = "";
        e.target.elements[1].lastname = "";
        e.target.elements[2].email = "";
        e.target.elements[3].password = "";
        dispatch(signup({ firstname, lastname, email, password }))
    }
}
const Signup = () => {
    return ( <
        div className = "SignupContainer" >
        <
        img className = 'signuplogo'
        src = { VectorLogo }
        /> <
        p className = 'signup' > SIGN UP < /p> <
        div className = "name" >
        <
        input type = "text"
        placeholder = '   First Name *'
        required className = 'box1' > < /input> <
        input type = "text"
        placeholder = '   Last Name *'
        required className = 'box2' > < /input> < /
        div > <
        input type = "text"
        placeholder = '   Email Address *'
        required className = 'box3' > < /input> <
        input type = "text"
        placeholder = '   password *'
        required className = 'box4' > < /input> <
        button className = 'Sign-in-btn' > SIGN IN < /button> <
        button className = 'Sign-in-btn-glg' > < img className = 'Googlelogo'
        src = { google }
        />GOOGLE SIGN IN</button >
        <
        p className = 'Login-link' > Already Have An Account ? < a href = '#' > SIGN IN < /a></p >
        <
        /div>
    )
}

export default Signup