import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LightBulb from '../Components/LightBulb'

function App() {
  return (
    <div>
      <LightBulb />
    </div>
  )
}


// TOPIC 1 - "rolling up state".

// let say you have a component in app() which is <lightbulb> which uses two more components <bulbState> and <TogglebulbState> and these components Uses COMMON STATE.IF WE DEFINE THAT STATE IN ANY OF THESE COMPONENT THE OTHER ONE WILL NOT BE ABLE TO ACCESS IT BECAUSE OF SCOPE SO FOR THAT PURPOSE WE DECLARE THAT STATE VARIABLE IN THE app() WHICH IS THE LOWEST COMMON ANCESTOR OF BOTH THE COMPONENTS.

/*

As your application grows, you might find that multiple components need access to the same state. Instead of duplicating state in each component, you can lift the state up to the LCA, allowing the common ancestor to manage it.

*/
export default App
