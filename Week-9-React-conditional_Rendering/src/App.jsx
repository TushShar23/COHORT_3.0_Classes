import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Toggle_Button from '../Components/Togg_btn.jsx'
import Card from '../Components/Card.jsx'

function App() {
  return (
    <div style={{display:"flex",flexDirection:"column",gap:"2rem"}}>
     <Toggle_Button innerText="Click me"></Toggle_Button>
     <Toggle_Button innerText="Visit me"></Toggle_Button>
     <Toggle_Button innerText="Pay here"></Toggle_Button>

     <Card imageSource={'https://pbs.twimg.com/profile_images/1983000017217671168/SUpQ8NmV_400x400.jpg'} name="Tushar" username="profound_SDE" subtitle={'17 followers'} time={"5h ago"} maincontent={"How's your winter arc going"}></Card>

     <Card imageSource={'https://pbs.twimg.com/profile_images/1863554820877271040/cc6QQR9B_400x400.jpg'} name="Wali" username="Waliilaw" subtitle={'5996 followers'} time={"2h ago"} ></Card>

     <Card></Card>
    </div>
  )
}

export default App
