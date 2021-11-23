import React from "react";
import "./closefriend.css"

export default function closefriend({user}){
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    
    return(
        <li className="leftbarFriend">
            <img src={PF+user.profilePicture} alt="" className="leftbarFriendImg" />
            <span className="leftbarFriendName">{user.username}</span>
       </li>
    )
}