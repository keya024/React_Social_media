import React from "react";
import "./rightbar.css"
import { Users } from "../../dummydata";
import Online from "../online/Online";

export default function Rightbar({profile}){
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const HomeRightbar = () => {
        return(
            <>
                <div className="bithdayContainer">
                   <img src="images/birthday.jpg" alt="" className="birthdayImg" />
                   <span className="birthdayTest">
                       <b>Asmita Paul</b> and 3 other friends have a bithday today.
                   </span>
                </div>
                <img src="images/ad1.jpg" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <hr></hr>
                <ul className="rightbarFriendList">
                   {Users.map((u) => (
                       <Online key={u.id} user={u} />
                   ))}                  
                </ul>
            </>
        )
    }
    const ProfileRightbar=()=>{
        return(
               <>
                 <h4 className="rightbarTitle1">User information</h4>
                 <div className="rightbarInfo">
                     <div className="rightbarInfoItem">
                         <span className="rightInfoKey">City:</span>
                         <span className="rightInfoKeyValue">India</span>
                     </div>
                     <div className="rightbarInfoItem">
                         <span className="rightInfoKey">From:</span>
                         <span className="rightInfoKeyValue">Kolkata</span>
                     </div>
                     <div className="rightbarInfoItem">
                         <span className="rightInfoKey">Relationship:</span>
                         <span className="rightInfoKeyValue">Single</span>
                     </div>
                 </div>
                 <h4 className="rightbarTitle1">User Friends</h4>
                  <div className="rightbarFollowings">
                      <div className="rightbarFollowing">
                          <img src={`${PF}persons/8.jpg`} alt="" className="rightbarFollowingImg" />
                          <span className="rightbarFollowingName">Rita Roy</span>
                      </div>
                      <div className="rightbarFollowing">
                          <img src={`${PF}persons/8.jpg`} alt="" className="rightbarFollowingImg" />
                          <span className="rightbarFollowingName">Rita Roy</span>
                      </div>
                      <div className="rightbarFollowing">
                          <img src={`${PF}persons/8.jpg`} alt="" className="rightbarFollowingImg" />
                          <span className="rightbarFollowingName">Rita Roy</span>
                      </div>
                      <div className="rightbarFollowing">
                          <img src={`${PF}persons/8.jpg`} alt="" className="rightbarFollowingImg" />
                          <span className="rightbarFollowingName">Rita Roy</span>
                      </div>
                      <div className="rightbarFollowing">
                          <img src={`${PF}persons/8.jpg`} alt="" className="rightbarFollowingImg" />
                          <span className="rightbarFollowingName">Rita Roy</span>
                      </div>
                      <div className="rightbarFollowing">
                          <img src={`${PF}persons/8.jpg`} alt="" className="rightbarFollowingImg" />
                          <span className="rightbarFollowingName">Rita Roy</span>
                      </div>


                  </div>
               </>
            )
    }
    return(
        <div className="rightbar">
            <div className="rightbarWrapper">
                  {profile ? <ProfileRightbar /> : <HomeRightbar />}

            </div>
        </div>
    )
}