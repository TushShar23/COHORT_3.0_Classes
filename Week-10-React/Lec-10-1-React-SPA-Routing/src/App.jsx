import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route,Link,Outlet} from 'react-router-dom'
import LandingPage from '../Components/LandingPage';
import Class11 from '../Components/Class11';
import Class12 from '../Components/Class12';
import NoContentFound from '../Components/ErrorPage'
import Layout from '../Components/Layout'
import Timer from '../Components/timer_useRef';

function App() {

  return (
    <div style={{backgroundColor:"black",height:"100vh",color:"white"}}>
     <BrowserRouter>
        {/* <Link to={"/"} style={{color:"yellow",fontSize:"30px"}}>ALLEN</Link>|
        <Link to={"/neet/online-coaching-class-11"} style={{color:"yellow",fontSize:"30px"}}>Class 11</Link>|
        <Link to={"/neet/online-coaching-class-12"} style={{color:"yellow",fontSize:"30px"}}>Class 12</Link>|  
        
        WE HAVE PUT THESE LINKS IN THE HEADER COMPONENT IN LAYOUT COMPONENT.
        
        
        */} 

        {/*  we have LINK component/TAG from "REACT ROUTER DOM" for navigation.<a> anchor tag cannot be used here coz if we use a tag then there is no sense of SPA coz every time we navigate to a new page.It RELOADS THE WHOLE CONTENT.THATSWHY <LINK> is USED.<a> again and again RELOADS THE WHOLE INDEX.JS on the page */}

        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path="/" element={ <LandingPage/> }></Route>
            <Route path="/neet/online-coaching-class-11" element={ <Class11/> }></Route>
            <Route path="/neet/online-coaching-class-12" element={ <Class12/> }></Route>
            <Route path="*" element={ <NoContentFound/> }></Route>
          </Route>
        </Routes>
     </BrowserRouter>
          

     <Timer />
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



The parent route’s path="/" doesn’t mean it catches all routes automatically.
It is like a BASE ROUTE.

Its main purpose here is to define the base URL for its children.

All the child routes are relative to this parent path.

<Route path="/" element={<Layout />}> This means Layout is the parent route. All the child routes inside this <Route> will render inside the <Outlet /> of Layout.
So Layout acts as a wrapper for all these child routes.


Oulet is like a unique container which contains the child routes of parent path.ex - we have a navbar in that navbar there is a section coaching -> class11 , class 12, JEE , NDA , Neet 
so what we can do is 

1) <Route path = "/Coaching" element = {<NavbarCoaching />} >
  <Route path = "Class11" element = {<class11/>}
  <Route path = "Class12" element = {<class12/>}
  <Route path = "JEE" element = {<JEE/>}
</Route>


** see if you put any ROUTE except with "/Coaching" or any child routes.Then it will not work/render thi

2) <Route path = "/Coaching" element = {<NavbarCoaching />} >
  <Route path = "/Coaching/Class11" element = {<class11/>}
  <Route path = "/Coacing/Class12" element = {<class12/>}
  <Route path = "/Coacing/JEE" element = {<JEE/>}
</Route>

But nesting ka benefit nahi milta
<Outlet /> kabhi render nahi hoga
Parent route ka behave layout ki tarah nahi hoga


** RECOMMENDED WAY = 1 (always make child routes relative.Don't make them ABSOLUTE ELSE THEY WILL BE INDEPENDENT)  ****



************

CHILD ROUTES should usually USE RELATIVE PATHS

Full URL = parent path + child relative path


Absolute path (starts with /) → independent, not combined with parent

Relative path (no /) → combined with parent

index route → special case, default child of parent


************


First LAYOUT will render
 |
Header 
 |
Outlet
 |
Footer

*/
