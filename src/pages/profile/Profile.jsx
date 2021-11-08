import React from "react";
import "./profile.css"
import Leftbar from "../../components/leftbar/Leftbar";
import Topbar from "../../components/topbar/Topbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";


export default function Profile(){
    return(
        <>
        <Topbar />
        <div className="profile">
            <Leftbar />
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img src="images/post/2.jpg" alt="" className="profileCoverImg" />
                        <img src="images/persons/4.jpg" alt="" className="profileUserImg" />

                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">keya mitra</h4>
                        <span className="profileInfoDesc">hello my friends!!</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed />
                    <Rightbar  profile />
                </div>
            </div>
            
        </div>
        
    </>
    )
}