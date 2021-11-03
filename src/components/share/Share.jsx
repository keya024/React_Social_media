import React from "react";
import "./share.css";
import { EmojiEmotions, Label, PermMedia, Room } from "@material-ui/icons";

export default function Share()
{
    return(
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/images/persons/1.jfif" alt="" className="shareProfileImg" />
                    <input placeholder="What's in your mind?" className="shareInput" />
                </div>
                <hr className="shareHr"></hr>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor="tomato" className="shaceIcon" />
                            <span className="shareOptionText">Photo or Video</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className="shaceIcon" />
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="yellow" className="shaceIcon" />
                            <span className="shareOptionText">Feelings</span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shaceIcon" />
                            <span className="shareOptionText">tag</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    )
}