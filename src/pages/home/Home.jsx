import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/righbar/Rightbar";
import Leftbar from "../../components/leftbar/Leftbar";
import "./home.css"


class Home extends React.Component{
    render(){
        return(

            <>
                <Topbar />
                <div className="homecontainer">
                    <Leftbar />
                    <Feed />
                    <Rightbar />
                </div>
                
            </>
        );
    }
}

export default Home;