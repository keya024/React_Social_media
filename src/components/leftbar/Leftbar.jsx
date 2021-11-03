import React from "react";
import "./leftbar.css"
import { Group, OndemandVideo, RssFeed, Settings } from "@material-ui/icons";

export default function Leftbar(){
     return(
         <div className="leftbar">
            <div className="leftbarWrapper">
                 <ul className="leftbarList">
                      <li className="leftbarListItem">
                         <RssFeed className="leftbarIcon"/>
                         <span className="leftbarListItemText">Feed</span>
                      </li>
                      <li className="leftbarListItem">
                         <OndemandVideo className="leftbarIcon"/>
                         <span className="leftbarListItemText">Video</span>
                      </li>
                      <li className="leftbarListItem">
                         <Group className="leftbarIcon"/>
                         <span className="leftbarListItemText">Group</span>
                      </li>
                      <li className="leftbarListItem">
                         <Settings className="leftbarIcon"/>
                         <span className="leftbarListItemText">Settings</span>
                      </li>
                    </ul>
                     <button className="leftbarButton">Show more</button>
                    <hr className="leftbarHr"></hr>
                    <ul className="leftbarFriendList">
                         <li className="leftbarFriend">
                              <img src="/images/persons/2.jfif" alt="" className="leftbarFriendImg" />
                              <span className="leftbarFriendName">Aritra Majhumdar</span>
                         </li>
                         <li className="leftbarFriend">
                              <img src="/images/persons/3.jpg" alt="" className="leftbarFriendImg" />
                              <span className="leftbarFriendName">Andrew Thompson</span>
                         </li>
                         <li className="leftbarFriend">
                              <img src="/images/persons/4.jpg" alt="" className="leftbarFriendImg" />
                              <span className="leftbarFriendName">Arindom Ghosh</span>
                         </li>
                         <li className="leftbarFriend">
                              <img src="/images/persons/5.jfif" alt="" className="leftbarFriendImg" />
                              <span className="leftbarFriendName">SimaRoy</span>
                         </li>
                         <li className="leftbarFriend">
                              <img src="/images/persons/6.jpg" alt="" className="leftbarFriendImg" />
                              <span className="leftbarFriendName">Riya Sen</span>
                         </li>
                         <li className="leftbarFriend">
                              <img src="/images/persons/7.jpg" alt="" className="leftbarFriendImg" />
                              <span className="leftbarFriendName">Anjana Shaw</span>
                         </li>
                         <li className="leftbarFriend">
                              <img src="/images/persons/8.jpg" alt="" className="leftbarFriendImg" />
                              <span className="leftbarFriendName">Mary Watson</span>
                         </li>
                    </ul>
               </div>
         </div>
     )
}

