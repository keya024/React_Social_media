import React, { useEffect, useState } from "react";
import "./profile.css"
import Leftbar from "../../components/leftbar/Leftbar";
import Topbar from "../../components/topbar/Topbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";
import axios from "axios";
import { useParams } from "react-router";


export default function Profile(){
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user,setUser] = useState({});
    const username = useParams().username;

    useEffect(()=>{
        const fetchUser = async ()=>{
          const res = await axios.get(`/users?username=${username}`);
          setUser(res.data)
        }
        fetchUser();
      },[username]);


    return(
        <>
        <Topbar />
        <div className="profile">
            <Leftbar />
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img src={user.coverPicture ? PF + user.coverPicture : PF + "persons/noCover.jpg"} alt="" className="profileCoverImg" />
                        <img src={user.profilePicture ? PF + user.profilePicture : PF + "persons/no.jpg"} alt="" className="profileUserImg" />

                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">{user.username}</h4>
                        <span className="profileInfoDesc">{user.desc}</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed username={username}/>
                    <Rightbar user={user} />
                </div>
            </div>
            
        </div>
        
    </>
    )
}