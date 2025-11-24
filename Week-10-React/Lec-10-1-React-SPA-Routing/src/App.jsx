import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import LandingPage from '../Components/LandingPage';
import Class11 from '../Components/Class11';
import Class12 from '../Components/Class12';
import NoContentFound from '../Components/ErrorPage'

function App() {

  return (
    <div style={{backgroundColor:"black",height:"90vh",color:"white"}}>
     <BrowserRouter>
        <Link to={"/"} style={{color:"yellow",fontSize:"30px"}}>ALLEN</Link>|
        <Link to={"/neet/online-coaching-class-11"} style={{color:"yellow",fontSize:"30px"}}>Class 11</Link>|
        <Link to={"/neet/online-coaching-class-12"} style={{color:"yellow",fontSize:"30px"}}>Class 12</Link>| 

        {/*  we have LINK component/TAG from "REACT ROUTER DOM" for navigation.<a> anchor tag cannot be used here coz if we use a tag then there is no sense of SPA coz every time we navigate to a new page.It RELOADS THE WHOLE CONTENT.THATSWHY <LINK> is USED.<a> again and again RELOADS THE WHOLE INDEX.JS on the page */}
        <Routes>
          <Route path="/" element={ <LandingPage/> }></Route>
          <Route path="/neet/online-coaching-class-11" element={ <Class11/> }></Route>
          <Route path="/neet/online-coaching-class-12" element={ <Class12/> }></Route>
          <Route path="*" element={ <NoContentFound/> }></Route>
        </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App



// for routing in react we have "REACT-ROUTER-DOM"
/*

React Router DOM is a library specifically designed for handling routing in React web applications. It is a crucial part of building Single Page Applications (SPAs) with React, allowing for smooth navigation between different views or components without requiring a full page reload

Library is like a cool dude because it has restrictions BUT NOT AS MUCH IN A FRAMEWORK


so far we have done a simple routing in react.WE HAVEN'T DONE NAVIGATION USING (a AND link component).TO BE PRECISE WE USE "link component/Tag" FOR MAKING OUR APPLICATION a true SINGLE PAGE APPLICATION.because <a> reloads the whole index.js file again and again

<LINK> will not RELOAD THE WHOLE PAGE AGAIN AND AGAIN.


> There are 2 ways to NAVIGATE A USER:
1. thru "<LINK> "- use this when user manually will CLICK A BUTTON
2." useNavigate()" ( hook) - use this when you automatically wants to take user back to a page.
ex - after SIGNING UP redirect user automatically to the HOME PAGE/USER INFO PAGE.Like this doesn't require users action.

*/
