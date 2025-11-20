import React from 'react';
import {useState,useEffect} from 'react';

// Here we will learn about "children" PROP in react.

function Card_Component({children}){
    return (
        <div style={{border:"1px solid #ccc",borderRadius:"5px",padding:"20px",margin:"10px",boxShadow:"2px 2px 2px 5px rgba(0,0,0,0.1)"}}>
            {children}
        </div>
    )
}

export default Card_Component;