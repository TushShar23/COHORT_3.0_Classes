import React from 'react';
import {useNavigate} from 'react-router-dom'

function Class12(){
    // Returns a function that lets you navigate programmatically in the browser in response to user interactions or effects.

    const navigate = useNavigate();
    
    function redirectUser(){
        navigate("/")
    }

    return (
        <div style={{fontSize:"22px"}}>
            Class 12 section
            <br />
            <button onClick={redirectUser} style={{fontSize:"18px",marginTop:"1rem",marginLeft:"0.3rem",backgroundColor:"wheat",padding:"0.3rem",borderRadius:"0.5rem"}}>Back to home page</button>
        </div>
    )
}

export default Class12;

// let say after coming to class 12 section USER WANTS TO GO BACK WE NEED TO NAVIGATE USER TO THE HOME PAGE.
// This can be done using "useEffect()" but this is mostly used when we automatically wants to REDIRECT USER TO THE HOME PAGE.LIKE form submission,login etc..

// Here we are using "useNavigate()" from "react-router-dom" for navigating user BACK TO HOME