import React from "react";
import { useState } from "react";

function Toggle_Button({innerText}){
    const [isVisible,SetInvisible] = useState(false)

    return(
        <div style={{color:"white"}}>
            <button onClick={()=> SetInvisible(!isVisible)} style={{color:"white"}}>{innerText}</button>
            {isVisible && <p>You have clicked {innerText}ca button</p>}
        </div>
    )
}

export default Toggle_Button;