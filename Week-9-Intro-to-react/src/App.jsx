import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return(
    <Postcomponent/>
  )
}

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

function Postcomponent(){
  return (
    <div style={{width:400, height:300, backgroundColor:"black",display:"flex",flexDirection:"column",alignItems:"center",color:"white",padding:"30px",borderRadius:"2rem"}}>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"0.6rem"}}>
        <img src="https://pbs.twimg.com/profile_images/1983000017217671168/SUpQ8NmV_400x400.jpg" alt="profilepic" style={{borderRadius:"50%",width:"60px",marginRight:"2rem",marginLeft:"-3rem"}}/>
        <h3>Tushar Sharma</h3>
        <span>@profound_SDE</span>
      </div>
      <p style={style}>How's your winter arc going ?</p>
      <div style={iconStyle}>
        <i class="ri-chat-1-line"></i>
        <i class="ri-upload-line"></i>
        <i class="ri-heart-3-line"></i>
        <i class="ri-file-chart-line"></i>
        <i class="ri-bookmark-line"></i>
      </div>
    </div>
  )
}

export default App


// We have made a "functional component" name PostComposition where we have made a twitter like post component.In function component we return the "div" which contains the structure and styling of the component.
// In component "App()" we are using that "Postcomponent" like an html element but its jsx and returning a div in "App()" and that is being used in our main jsx and then main jsx in index.html

// PostComponent() -> App() -> main.jsx(where we have createdreactDom and in that we have selected "root-div") -> index.html

// We are able to return xml/html from a function that is JSX.
