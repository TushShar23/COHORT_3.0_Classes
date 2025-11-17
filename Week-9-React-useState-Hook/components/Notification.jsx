import React from 'react';
import { useState } from 'react';


function Notification_Count(){
    const [notification,setNotification] = useState(0);

    function IncreaseCount(){
        setNotification(notification + 1);
    }

    return(
        <div>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"2rem"}}>
                <span style={{marginLeft:"2rem",background:"white",display:"inline-block",width:"30px",color:"black",textAlign:"center"}}>{notification}</span>
                <img src="https://cdn-icons-png.flaticon.com/512/472/472371.png" alt="img" style={{width:"40px"}}/>
            </div>
            <button onClick={IncreaseCount}>Increase the count</button>
        </div>
    )
}

export default Notification_Count