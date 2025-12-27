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
  const Increment = useCountStore((state)=>state.Increment);// this is a SELECTOR
  /*
  const count = useCountStore((state) => state.count);
  (means)
  Give this component the current value of count from the global store,
  and re-render this component ONLY when count changes.”

  Why this is written as a function
  (state) => state.count


  This function is called a selector.

  Selector = “what slice of state do I care about?”

  You’re telling Zustand:

  Here is the full store state
  Pick only count
  Ignore everything else

1 . Component renders

  useCountStore((state) => state.count)

  Zustand:

  Calls your selector
  Passes the current state
  Gets back 5

2. Component Subscribes

  Behind the scenes, Zustand does:
  “This component depends on state.count.”
  So it subscribes this component to that slice.

3. State updates somewhere else
  set({ theme: "light" });


  Zustand checks:

  Old count → 5

  New count → 5

  Since it didn’t change 👉 NO re-render

4. count updates
    set(state => ({ count: state.count + 1 }));


    Now:

    Old count → 5

    New count → 6

    Zustand:

    Sees change

    Tells React to re-render only this component
  */

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

// This is intro to ZUSTAND(State management library for react).
// EVERYTHING IN ZUSTAND IS A HOOK.YOUR STORE IS A HOOK.
// FOR MANAGING/SHARING STATES ACROSS COMPONENTS we use state management libraries.
