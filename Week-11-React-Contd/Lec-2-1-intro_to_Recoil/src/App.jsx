import React, { useState } from 'react'
import './App.css'
import IncreaseCount from '../Components/Increase';
import DecreaseCount from '../Components/Decrease';
import Counter from '../Components/Counter';


export const CountContext = React.createContext();

function App() {
  const [count,setCount] = useState(0);
  return (
    <div>
      <CountContext.Provider value = {{count:count,setCount:setCount}}>
        <Counter/>
        <IncreaseCount/>
        <DecreaseCount/>
      </CountContext.Provider>
    </div>
  )
}

export default App

// This is a demonstration of USING STATE MANAGEMENT using context API which is not an optimal approach.

// no of re-renders are not optimised when we used contextAPI.All components are re-rendering again and again EVEN IF I CHANGE ONLY 1 COMPONENT.This is not an optimised way to create a counter app.MAINLY STATE MANAGEMENT AND OPTIMISATIONS AT A GOOD LEVEL ARE REQUIRED WHEN WE ARE MAKING HIGH FPS APPS like games,real time apps like figma,canva and all.MAINLY ONLY {COUNTER} COMPONENT SHOULD RE-RENDER COZ IT CONTAINS THE COUNT WHICH IS CHANGING TIME TO TIME.
