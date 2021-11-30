import React, { useContext, useState , useRef} from "react";
import "./share.css";
import { Cancel, EmojiEmotions, Label, PermMedia, Room } from "@material-ui/icons";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";


export default function Share(){

    const {user} = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const desc = useRef();
    const [file,setFile] = useState(null);

    const submitHandler = async (e) => {
        e.preventDefault()
        const newPost = {
            userId: user._id,
            desc: desc.current.value,
        };
        if (file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name", fileName);
            data.append("file", file);
            newPost.img = fileName;
            console.log(newPost);
            try {
              await axios.post("/upload", data);
              window.location.reload();
            } catch (err) {}
          }      
        try{
            await axios.post("/posts",newPost)
        }catch(err){}
    };

    return(
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src={user.profilePicture ? PF + user.profilePicture : PF + "persons/no.jpg"} alt="" className="shareProfileImg" />
                    <input placeholder={"What's in your mind " + user.username + " ?"} className="shareInput" ref={desc} />

                </div>
                <hr className="shareHr"></hr>
                {file && (
                    <div className="shareImgContainer">
                        <img src={URL.createObjectURL(file)} alt="" className="shareimage" />
                        <Cancel className="shareCancelImg" onClick={()=>setFile(null)} />
                    </div>
                )}
                <form className="shareBottom" onSubmit={submitHandler}>
                    <div className="shareOptions">
                        <label htmlFor="file" className="shareOption">
                            <PermMedia htmlColor="tomato" className="shaceIcon" />
                            <span className="shareOptionText">Photo or Video</span>
                            <input style={{display:"none"}} type="file" id="file" accept=".png,.jpeg,.jpg" onChange={(e)=>setFile(e.target.files[0])} />
                        
                        </label>
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
                    <button className="shareButton" type="submit">Share</button>
                </form>
            </div>
        </div>
    )
}