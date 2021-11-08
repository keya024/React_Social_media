import React from "react";
import "./post.css";
import { MoreVert } from "@material-ui/icons"

export default function Post(){
    return(
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                   <div className="postTopLeft">
                       <img src="/images/persons/1.jfif" alt="" className="postProfileImg" />
                       <span className="postUserName">Keya Mitra</span>
                       <span className="PostDate">5 mins ago</span>
                   </div>
                   <div className="postTopRight"></div>
                       <MoreVert />
                </div>
                <div className="postCenter">
                    <span className="postText">Hello Everyone,Good Morning!!</span>
                    <img src="/images/post/1.jfif" alt="" className="postImg" />
                </div>
                <div className="postBottom">
                     <div className="postBottomLeft">
                        <img src="images/like.jpg" alt="" className="likeIcon" />
                        <img src="images/heart.png" alt="" className="likeIcon" />
                        <span className="postLikeCounter">32 people like it</span>
                     </div>
                     <div className="postBottomRight">
                        <span className="postCommentText">9 comments </span>
                     </div>
                </div>
            </div>

        </div>
    )
}