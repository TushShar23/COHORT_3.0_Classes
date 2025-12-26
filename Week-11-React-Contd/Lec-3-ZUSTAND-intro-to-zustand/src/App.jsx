import { useState } from 'react'
import './App.css'
// import CountVal from '../Components/CounterComp.jsx'
import useCountStore from '../Stores/Count.js'

function App() {
  return (
    <div>
      <Counter/>
    </div>
  )
}

function Counter(){
  return (
    <div>
      <CountVal/>
      <Increase/>
      <Decrease/>
    </div>
  )
}

function CountVal(){
  const count = useCountStore((state)=>state.count);
  return (
    <div>
      {count}
    </div>
  )
}

function Increase(){
  const Increment = useCountStore((state)=>state.Increment);
  return(
    <div>
      <button onClick={Increment}>Increment</button>
    </div>
  )
}

function Decrease(){
  const Decrement = useCountStore((state)=>state.Decrement);
  return(
    <div>
      <button onClick={Decrement}>Decrement</button>
    </div>
  )
}

export default App

// This is intro to ZUSTAND(State management library for react)
