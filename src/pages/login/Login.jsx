import React from 'react'
import "./Login.css"

export default function Login() {
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
                        <div className="loginbox">
                            <input placeholder="Email" className="logininput" required/>
                            <input placeholder="Password" type="password" className="logininput" required/>
                            <button className="loginbutton">Log In</button>
                            <span className="loginforgot">Forgot Password?</span>
                            <button className="loginregister">Create a new Account</button>
                        </div>
                    </div>
        
            </div>
        </div>
    );
}
