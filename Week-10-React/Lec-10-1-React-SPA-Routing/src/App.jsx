import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LandingPage from '../Components/LandingPage';
import Class11 from '../Components/Class11';
import Class12 from '../Components/Class12';
import NoContentFound from '../Components/ErrorPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{backgroundColor:"black",height:"90vh",color:"white"}}>
     <BrowserRouter>
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


so far we have done a simple routing in react.WE HAVEN'T DONE NAVIGATION USING (a AND link component).TO BE PRECISE WE USE "link component" FOR MAKING OUR APPLICATION a true SINGLE PAGE APPLICATION.

*/
