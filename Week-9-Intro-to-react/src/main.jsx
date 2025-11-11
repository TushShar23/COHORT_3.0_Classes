// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <App />
)

// yaha pe humne react-dom se createRoot() function import karke maine usme apna root select kiya aur usme mai "app component " ko render kara raha hu.MAIN THING is happening in APP.Not here,not in index.html but in app.jsx and other components which we will be making and combining into App component and then we are using/ importing App component in root-div
