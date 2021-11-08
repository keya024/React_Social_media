import React from "react";
import "./rightbar.css"

export default function Rightbar({profile}){
    
    return(
        <div className="rightbar">
            <div className="rightbarWrapper">
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
            </div>
        </div>
    )
}