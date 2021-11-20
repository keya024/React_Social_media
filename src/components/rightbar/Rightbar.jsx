import React from "react";
import "./rightbar.css"

export default function Rightbar(){
    
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
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src="images/persons/3.jpg" alt="" className="rightbarProfileImg" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Arindom Ghosh</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src="images/persons/3.jpg" alt="" className="rightbarProfileImg" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Arindom Ghosh</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src="images/persons/3.jpg" alt="" className="rightbarProfileImg" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Arindom Ghosh</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src="images/persons/3.jpg" alt="" className="rightbarProfileImg" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Arindom Ghosh</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src="images/persons/3.jpg" alt="" className="rightbarProfileImg" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Arindom Ghosh</span>
                    </li>
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
                          <img src="images/persons/8.jpg" alt="" className="rightbarFollowingImg" />
                          <span className="rightbarFollowingName">Rita Roy</span>
                      </div>
                      <div className="rightbarFollowing">
                          <img src="images/persons/8.jpg" alt="" className="rightbarFollowingImg" />
                          <span className="rightbarFollowingName">Rita Roy</span>
                      </div>
                      <div className="rightbarFollowing">
                          <img src="images/persons/8.jpg" alt="" className="rightbarFollowingImg" />
                          <span className="rightbarFollowingName">Rita Roy</span>
                      </div>
                      <div className="rightbarFollowing">
                          <img src="images/persons/8.jpg" alt="" className="rightbarFollowingImg" />
                          <span className="rightbarFollowingName">Rita Roy</span>
                      </div>
                      <div className="rightbarFollowing">
                          <img src="images/persons/8.jpg" alt="" className="rightbarFollowingImg" />
                          <span className="rightbarFollowingName">Rita Roy</span>
                      </div>
                      <div className="rightbarFollowing">
                          <img src="images/persons/8.jpg" alt="" className="rightbarFollowingImg" />
                          <span className="rightbarFollowingName">Rita Roy</span>
                      </div>


                  </div>
               </>
            )
    }
    return(
        <div className="rightbar">
            <div className="rightbarWrapper">
               <ProfileRightbar
                />
            </div>
        </div>
    )
}