import React from 'react'
import "./register.css"

export default function Register() {
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
                            <input placeholder="Username" className="logininput"  required/>
                            <input placeholder="Email" className="logininput" required/>
                            <input placeholder="Password" className="logininput" type="password" />
                            <input placeholder="Password Again" type="password" className="logininput"/>
                            <button className="loginbutton">Sign Up</button>
                            <span classname="span">Already Have an Account?</span>
                            <button className="loginregister">Log into Account</button>

                        </div>
                    </div>
        
            </div>
        </div>
    );
}
