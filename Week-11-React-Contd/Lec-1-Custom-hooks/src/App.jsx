import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from '../Components/Counter_customHook'

// we export this CUSTOM HOOK SO THAT WE CAN USE IN OUR COMPONENT LOCATED IN DIFFERENT FOLDER.
export function useCounter(){
  const [counter,setCounter] = useState(0);

  function IncreaseCount(){
    setCounter(count => count + 1) // implicit return 
  }

  return [counter,IncreaseCount]; // we are returning two thing from here.WE CAN DO THIS IN JS BUT IT SHOULD BE IN AN ARRAY OR AN OBJECT.
}

function App() {
  return(
    <div>
      <Counter />
    </div>
  )
}

// we are gonna learn about custom hooks.Custom hooks are nothing but just FUNCTIONS(which we can say kind of closures coz they return a function and its lexical scope too).If you want to define custom hook you have start its NAME WITH "use".And it uses other hooks inside it.


// IN OUR COUNTER COMPONENT WE HAVE USED OUR CUSTOM HOOK.SEE HOW CLEAN OUR APP COMPONENT IS.COZ WE HAVE DELEGATED THE WORK AND HAVEN'T SHOVED ALL THE CODE IN IT.


export default App
