import React from "react";
import "./topbar.css";
import {Chat, Person, Search} from "@material-ui/icons";

export default function Topbar(){
    return(
        <div className="topbarContainer">
            <div className="topbarLeft">
                   <span className="logo" >Techbook</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                  <Search />
                  <input placeholder="Seach for friends" className="searchInput"/>
                </div>
            </div>

            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLinks">Homepage</span>
                    <span className="topbarLinks">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">
                            1
                        </span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">
                            2
                        </span>
                    </div>
                </div>
                <img src="/images/persons/1.jfif" alt="" className="topbarImg"/>
            </div>
            
        </div>
    );
}
 