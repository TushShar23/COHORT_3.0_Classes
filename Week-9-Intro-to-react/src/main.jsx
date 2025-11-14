// import { StrictMode } from 'react'
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';


const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children : "click me to visit google.com"
}

function RetReactElem(){
  return (
    <>
      <div>My name is Tushar</div>
    </>
  )
}

const anotherReactElem = React.createElement(
  'a',
  {href:"https://google.com" , target:"_blank"},
  'Click me to visit google'
)



createRoot(document.getElementById('root')).render(
    <App />

    // RetReactElem() 
    // this will work coz we a functional component is under the hood a function

    // reactElement 
    //this won't its an object and its the way to see the object(this is how transpile the transpiles the code).This is just an object that we made using core JS but this type of object is not accepted in render().

    // anotherReactElem
    // this object WILL WORK coz we have made it using REACT METHODS and REACT LIBRARY.

)





// yaha pe humne react-dom se createRoot() function import karke maine usme apna root select kiya aur usme mai "app component " ko render kara raha hu.MAIN THING is happening in APP.Not here,not in index.html but in app.jsx and other components which we will be making and combining into App component and then we are using/ importing App component in root-div
