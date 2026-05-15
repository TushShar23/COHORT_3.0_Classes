import { useState } from 'react'
import './App.css'
import {SideBar} from "./Components/Sidebar"

function App() {
  return(
    <div className='min-h-10 bg-[url(./assets/bg-1.jpg)] bg-center bg-cover box-border bg-origin-border bg-no-repeat'>
      <SideBar/>
    </div>
  )
}

export default App
