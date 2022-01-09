import React, { useContext } from "react";
import "./topbar.css";
import {Chat, Person, Search} from "@material-ui/icons";
import { Link } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";

export default function Topbar(){
    const {user} = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return(
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/" style={{textDecoration:"none"}}>
                    <span className="logo" >Alohomora!</span>
                    <keyIcon />
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                  <Search className="searchicon"/>
                  <input placeholder="Seach for friends or post or pages here" className="searchInput"/>
                </div>
            </div>

            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLinks">Homepage</span>
                    <span className="topbarLinks">Timeline</span>
                </div>
                <div className="topbarIcons">
                    
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">
                            2
                        </span>
                    </div>
                </div>
                <Link to={`/profile/${user.username}`}>
                  <img src={user.profilePicture ? PF + user.profilePicture : PF + "persons/no.jpg"} alt="" className="topbarImg"/>
                </Link>
            </div>
            
        </div>
    );
}
 