import React from "react";
import "./chatOnline.css"

export default function ChatOnline(){
    return (
        <div className="chatOnline">
            <div className="chatOnlineFriend">
              <div className="chatOnlineImgContainer">
                <img
                  className="chatOnlineImg"
                  src="/images/persons/8.jpg"
                  alt=""
                />
                <div className="chatOnlineBadge"></div>
              </div>
              <span className="chatOnlineName">Keya Mitra</span>
            </div>
        </div>
    )
}