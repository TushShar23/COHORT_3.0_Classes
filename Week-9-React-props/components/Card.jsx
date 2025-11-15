import React from "react";





const style ={
  margin:"50px auto",
  fontSize:"28px",
  // border:"2px solid white",
  padding:"5px",
}

const iconStyle = {
  display:"flex",
  justifyContent:"space-between",
  alignItems:"center",
  padding:"10px",
  fontSize:"25px",
  gap:"3rem",
  flexWrap:"wrap",
  width:"100%",
  marginTop:"2rem",
  cursor:"pointer"
}

// THIS IS HOW ORIGINALLY PROPS ARE USED

// function Card(props){
//     return (
//         <div>
//         <div style={{width:400, height:300, backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"center",color:"black",padding:"30px",borderRadius:"2rem",marginBottom:"2rem"}}>
//       <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"0.6rem"}}>
//         <img src="https://pbs.twimg.com/profile_images/1983000017217671168/SUpQ8NmV_400x400.jpg" alt="profilepic" style={{borderRadius:"50%",width:"60px",marginRight:"2rem",marginLeft:"-3rem"}}/>
//         <h3>{props.name}</h3> 
//         {/* Here we have a prop we send that name prop from app.jsx in card component and here it is receiving the value */}
//         <span>@profound_SDE</span>
//       </div>
//       <p style={style}>{props.para}</p>
//       <div style={iconStyle}>
//         <i className="ri-chat-1-line"></i>
//         <i className="ri-upload-line"></i>
//         <i className="ri-heart-3-line"></i>
//         <i className="ri-file-chart-line"></i>
//         <i className="ri-bookmark-line"></i>
//       </div>
//     </div>
//     </div>
//     )
// }

// THIS IS HOW IN MOSTLY CASES IN PROD. WE USE PROPS BY directly object destructuring.
function Card({name:username = "anon", para:maincontent}){
    // destructured PROPS object with my custom variables
    // what we have done :
    /*
    
    1. we have destructured the PROPS object.
    2. We gave the CUSTOM NAMES to the PROPS KEYS/PROPS ((name -> username),(para -> maincontent))
    3. We have provided a default value to username/name property.IF SOMEONE HAS NOT GIVEN/PROVIDED NAME IN THE COMPONENT AS ARGUMENT THEN SET "ANON" AS DEFAULT VALUE OF THE "USERNAME"(This is core javascript functions concept)
    
    */
   
    return (
        <div>
        <div style={{width:400, height:300, backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"center",color:"black",padding:"30px",borderRadius:"2rem",marginBottom:"2rem"}}>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"0.6rem"}}>
        <img src="https://pbs.twimg.com/profile_images/1983000017217671168/SUpQ8NmV_400x400.jpg" alt="profilepic" style={{borderRadius:"50%",width:"60px",marginRight:"2rem",marginLeft:"-3rem"}}/>
        <h3>{username}</h3> 
        {/* Here we have a prop we send that name prop from app.jsx in card component and here it is receiving the value */}
        <span>@profound_SDE</span>
      </div>
      <p style={style}>{maincontent}</p>
      <div style={iconStyle}>
        <i className="ri-chat-1-line"></i>
        <i className="ri-upload-line"></i>
        <i className="ri-heart-3-line"></i>
        <i className="ri-file-chart-line"></i>
        <i className="ri-bookmark-line"></i>
      </div>
    </div>
    </div>
    )
}







// console.log(props) // Its just an empty object till you pass some properties to it.

// Card is a component
// Props is an object which store the properties/state for a particular component.
// EVERY COMPONENT HAS ITS OWN PROPS OBJECT
// PROPS is not a global object

export default Card