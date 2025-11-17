import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from '../components/Counter.jsx'

function App() {

  return (
    <>
      <Counter></Counter>
      <Counter innerText="Increment"></Counter>
      <Counter innerText="Increase value"></Counter>
      <Counter innerText="+"></Counter>
    </>
  )
}

export default App
