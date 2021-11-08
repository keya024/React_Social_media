import React from 'react'
import "./register.css"
import { RadioGroup,Radio } from 'react-radio-group';

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
                        <input placeholder="Username" className="logininput"/>
                            <input placeholder="Email" className="logininput"/>
                            <label for="radio1" id="radio1" cssClass="radioMarginRight">
                            <RadioGroup name="Gender" input type="radio" name="radio">
                          
                            <Radio value="apple"/>Male 
                            <Radio value="orange" />Female
                           <Radio value="watermelon" />Others 
                            </RadioGroup>
                             </label>
                            
                            <input placeholder="Password" className="logininput"/>
                            <input placeholder="Password Again" type="password" className="logininput"/>
                            <button className="loginbutton">Sign Up</button>
                            <button className="loginregister">Log into Account</button>

                        </div>
                    </div>
        
            </div>
        </div>
    );
}
