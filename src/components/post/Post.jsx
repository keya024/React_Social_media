import React from "react";
import "./post.css";
import { MoreVert } from "@material-ui/icons"
import { useState , useEffect} from "react";
import axios from "axios";

export default function Post({post}){
    const [like,setLike] = useState(post.like)
    const [isLiked,setIsLiked] = useState(false)
    const [user,setUser] = useState({});
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(()=>{
        const fetchUser = async ()=>{
          const res = await axios.get(`users/${post.userId}`);
          setUser(res.data)
        }
        fetchUser();
      },[]);
    const likeHandler =()=>{
      setLike(isLiked ? like-1 : like+1)
      setIsLiked(!isLiked)
    }
    return(
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                   <div className="postTopLeft">
                       <img 
                          src={user.profilePicture || PF + "persons/no.jpg"}
                          alt="" className="postProfileImg" 
                        />
                       <span className="postUserName">
                         {user.username}
                       </span>
                       <span className="PostDate">{post.date}</span>
                   </div>
                   <div className="postTopRight"></div>
                       <MoreVert />
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={PF+post.photo} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                     <div className="postBottomLeft">
                        <img src={`${PF}like.jpg`} alt="" className="likeIcon" onClick={likeHandler} />
                        <img src={`${PF}heart.png`} alt="" className="likeIcon" onClick={likeHandler}/>
                        <span className="postLikeCounter">{like}people like it</span>
                     </div>
                     <div className="postBottomRight">
                        <span className="postCommentText">{post.comment}comments</span>
                     </div>
                </div>
            </div>

        </div>
    )
}