import React, { useContext, useRef } from 'react'
import "./Login.css"
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';
import { CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Login() {
    const email = useRef();
    const password = useRef();
    const { user, isFecthing, error, dispatch } = useContext(AuthContext);

    const handleClick = (e) => {
        e.preventDefault();
        loginCall(
            {email:email.current.value,password:password.current.value},
            dispatch
        )
    };
    console.log(user);
    return (
        <div className="login">
            <div className="loginwrapper">
                <div className="loginleft">
                <h3 className="loginlogo">Techbook</h3>
                 <div className="loginBox"></div>
                    <span className="logindesc">
                        connect with friends and the world around you on Techbook.
                    </span>
                    </div>
                    <div className="loginright">
                        <form className="loginbox" onSubmit={handleClick}>
                            <input placeholder="Email" className="logininput" type="email" ref={email} required/>
                            <input placeholder="Password" type="password" minLength="6" className="logininput" ref={password} required/>
                            <button className="loginbutton"type="submit" disabled={isFecthing}>{isFecthing ? <CircularProgress color="white" size="20px" /> : "log in"}</button>
                            <span className="loginforgot">Forgot Password?</span>
                            <Link to="/register" className="loginregister">
                               <button className="loginregister">CREATE NEW ACCOUNT</button>
                            </Link>
                        </form>
                    </div>
        
            </div>
        </div>
    );
}
