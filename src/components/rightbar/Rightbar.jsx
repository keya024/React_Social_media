import React, { useContext, useEffect, useState } from "react";
import "./rightbar.css"
import { Users } from "../../dummydata";
import Online from "../online/Online";
import axios from "axios";
import { Link , useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Add, Remove } from "@material-ui/icons";

export default function Rightbar({ user }){
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [friends, setFriends] = useState([]);
    const {user:currentUser , dispatch } = useContext(AuthContext);
    const [followed, setFollowed] = useState(
        currentUser.followings.includes(user?.id)
    );

    const history = useHistory();
    
    function logout()
    {
         localStorage.clear();
         history.push('/login');
    }

    useEffect(()=>{
        const getFriends = async () => {
           try{
               const friendList = await axios.get("/users/friends/" + user._id);
               setFriends(friendList.data);
            } catch(err){
               console.log(err);
           }
        };
        getFriends();
    },[user]);

    const handleClick = async () => {
        try {
          if (followed) {
            await axios.put(`/users/${user._id}/unfollow`, {
              userId: currentUser._id,
            });
            dispatch({ type: "UNFOLLOW", payload: user._id });
          } else {
            await axios.put(`/users/${user._id}/follow`, {
              userId: currentUser._id,
            });
            dispatch({ type: "FOLLOW", payload: user._id });
          }
          setFollowed(!followed);
        } catch (err) {
        }
      };

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
                {user.username !== currentUser.username &&(
                    <button className="rightbarFollowButton" onClick={handleClick}>
                      {followed ? "Unfollow" : "Follow"}
                      {followed ? <Remove /> : <Add />}
                    </button>
                )}
                 <h4 className="rightbarTitle1">User information</h4>
                 <div className="rightbarInfo">
                     <div className="rightbarInfoItem">
                         <span className="rightInfoKey">City:</span>
                         <span className="rightInfoKeyValue">{user.city}</span>
                     </div>
                     <div className="rightbarInfoItem">
                         <span className="rightInfoKey">From:</span>
                         <span className="rightInfoKeyValue">{user.from}</span>
                     </div>
                     <div className="rightbarInfoItem">
                         <span className="rightInfoKey">Relationship:</span>
                         <span className="rightInfoKeyValue">{user.relationship ===1 ? "Single" : user.relationship ===1 ? "Married" : "-"}</span>
                     </div>
                     <div className="logoutbtn">
                         <button type="submit" onClick={logout}>Log out</button>
                     </div>
                 </div>
                 <h4 className="rightbarTitle1">User Friends</h4>
                  <div className="rightbarFollowings">
                       {friends.map((friend) => (
                           <Link to={"/profile/" +friend.username} style={{textDecoration:"none"}}>
                               <div className="rightbarFollowing">
                                    <img src={friend.profilePicture ? PF+friend.profilePicture : PF+"persons/no.jpg"} alt="" className="rightbarFollowingImg" />
                                    <span className="rightbarFollowingName">{friend.username}</span>
                               </div>
                           </Link>
                       ))}
                   </div>
               </>
            )
    }
    return(
        <div className="rightbar">
            <div className="rightbarWrapper">
                  {user ? <ProfileRightbar /> : <HomeRightbar />}

            </div>
        </div>
    )
}