import React from 'react';
import useState from 'react';

const firstDiv = {
    display:"flex",
    padding:"0.5rem",
    color:"black",
    alignItems:"flex-start",
    // justifyContent:"flex-start",
    backgroundColor:"white",
    borderRadius:"1.3rem",
    height:"200px",
    width:"300px",
    flexDirection:"column",
    
}

const detsdiv={
    fontSize:"14px",
    // border:"2px solid black",
    height:"fit-content",
    marginTop:"-0.7rem",
    display:"flex",
    flexDirection:"column",
    alignItems:"flex-start"
    
}

const seconddiv = {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    // border:"2px solid black",
    margin:"-1.5rem auto",
    padding:"0.3rem 0.3rem",
    fontSize:"20px",
    fontWeight:"600"
}

function PostComponent({name,imageSrc,username,subtitle,description}){
    return (
        <div style={firstDiv}>
            <div style={{display:"flex",gap:"1rem",height:"50%",padding:"0.2rem 0.2rem",marginTop:"1rem"}}>
                <div className="img">
                    <img src={imageSrc} alt="userImg" style={{width:"60px",borderRadius:"50%"}}/>
                </div>
                <div className="dets" style={detsdiv}>
                    <h3>{name} {username}</h3>
                    <h3 style={{fontWeight:"400",marginRight:"1.3rem",marginTop:"-1rem"}}>{subtitle}</h3>
                </div>
            </div>
            <div className="second" style={seconddiv}>
                <p>{description}</p>
            </div>
        </div>
        
    )
}



export default PostComponent