import axios from 'axios';
import React, { useRef } from 'react'
import "./register.css"
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const history = useHistory();

    const handleClick = async (e) => {
        e.preventDefault();
        if(passwordAgain.current.value !== password.current.value){
            passwordAgain.current.setCustomValidity("Password doesn't match!!");
        }else{
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            }
            try{
                await axios.post("/auth/register", user);
                history.push("/login");
            }catch(err){
                console.log(err);
            }
        }
    };

    return (
        <div className="login">
            <div className="loginwrapper">
                <div className="loginleft">
                <h3 className="loginlogo">Alohomora!</h3>
                 <div className="loginBox"></div>
                    <span className="logindesc">
                        Open new doors to connect with friends and the world around you.
                    </span>
                    </div>
                    <div className="loginright">
                        <form className="loginbox" onSubmit={handleClick}>
                            <input placeholder="Username" ref={username} className="logininput"  required/>
                            <input placeholder="Email" type="email" ref={email} className="logininput" required/>
                            <input placeholder="Password" type="password" ref={password} className="logininput" minLengths="6" type="password" required/>
                            <input placeholder="Password Again" type="password" ref={passwordAgain} className="logininput" required/>
                            <button className="loginbutton" type="submit" >Sign Up</button>
                            <span classname="span">Already Have an Account?</span>
                            <Link to="/login" className="loginregister">
                               <button className="loginregister">Log into Account</button>
                            </Link>
                        </form>
                    </div>
        
            </div>
        </div>
    );
}
