import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import "./picture.css";

export default function Picture(){
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [cuser,setUser] = useState({});
    const username = useParams().username;
    const {user} = useContext(AuthContext);
    const [file,setFile] = useState(null);

    useEffect(()=>{
        const fetchUser = async ()=>{
          const res = await axios.get(`/users?username=${username}`);
          setUser(res.data)
        }
        fetchUser();
      },[username]);

    const submitHandler = async (e) => {
        e.preventDefault()
        const newPicture = {
            userId: user._id,
        };
        if (file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name", fileName);
            data.append("file", file);
            newPicture.profilePicture = fileName;
            console.log(newPicture);
            try {
              await axios.post("/upload", data);
              window.location.reload();
            } catch (err) {}
          }      
        try{
            await axios.post("/users",newPicture)
        }catch(err){}
    };
    return(
        <div>
            <form onSubmit={submitHandler}>
               <img src={cuser.coverPicture ? PF + cuser.coverPicture : PF + "persons/noCover.jpg"} alt="" className="profileCoverImg" />
               <img src={cuser.profilePicture ? PF + cuser.profilePicture : PF + "persons/no.jpg"} alt="" className="profileUserImg"  />
               <input type="file" id="file" accept=".png,.jpeg,.jpg" onChange={(e)=>setFile(e.target.files[0])} />
               <button className="shareButton" type="submit">Share</button>
            </form>
        </div>
    )
}