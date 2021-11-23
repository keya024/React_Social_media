import React from "react";
import "./leftbar.css"
import Closefriend from "../closefriends/Closefriend";
import { Users } from "../../dummydata";
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
                         {Users.map((u) => (
                           <Closefriend key={u.id} user={u} />
                         ))}
                    </ul>
               </div>
         </div>
     )
}

