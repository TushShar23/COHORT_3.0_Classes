import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div>
      <Bgchanger />
    </div>
  )

}

function Bgchanger(){
  const [Color,setColor] = useState("white");

  useEffect(()=>{
    document.body.style.backgroundColor = Color;      
  },[Color]);

  function genColor(){
    let finalVal=0,randomVal=0;
    const arr = ['A','B','C','D','E','F'];
    const alpha = arr[Math.round((Math.random())*5)]
    console.log(alpha);
    for(let i=1;i<6;i++){
      const val = Math.round(((Math.random())*10)) 
      console.log(val)
      randomVal = Math.round((randomVal*10))+val;
    }

    finalVal = `#${alpha}${randomVal}`
    console.log(finalVal)

    setColor(finalVal)

  }

  return(
    <div>
      <button onClick={genColor}>Change Color</button>
    </div>
  )
}

export default App
