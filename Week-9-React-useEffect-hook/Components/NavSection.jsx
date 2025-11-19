import React from "react";
import { useState,useEffect } from "react";

function Nav_section(){
    const [currentTab,setTab] = useState("Home"); // this is simple useState()
    
    useEffect(()=>{
        console.log("Fetching data for "+currentTab);
    },[currentTab])
    // now whenever currentTab changes on clicking buttons and our app will re-render it will show a message.


    return (
        <div>
            <button onClick={()=>setTab("Home")} style={{color: currentTab == "Home" ? "red" : "white"}}>Home</button>
            <button onClick={()=>setTab("Post")} style={{color: currentTab == "Post" ? "red" : "white"}}>Post</button>
            <button onClick={()=>setTab("Notification")} style={{color: currentTab == "Notification" ? "red" : "white"}}>Notification</button>
            <button onClick={()=>setTab("Jobs")} style={{color: currentTab == "Jobs" ? "red" : "white"}}>Jobs</button>
        </div>
    )
}

export default Nav_section