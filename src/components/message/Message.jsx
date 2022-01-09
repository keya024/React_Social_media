import React from "react";
import "./message.css";
import { format } from "timeago.js";

export default function Message({ message, own }){
    return(
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
               <img src="/images/persons/1.jfif" alt="" className="messageImg" />
               <p className="messageText">{message.text}</p>
            </div>
            <div className="messageBottom">
                {format(message.createdAt)}
            </div>
        </div>
    )
}