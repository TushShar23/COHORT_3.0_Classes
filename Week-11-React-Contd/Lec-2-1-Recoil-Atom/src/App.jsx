import { useState } from 'react'
import './App.css'
import { RecoilRoot,useRecoilValue,useSetRecoilState,atom } from 'recoil'
// import Increase  from '../Components/Increase'
// import Decrease from '../Components/Decrease'
// import CounterVal from '../Components/CounterComp'
import {count} from '../Store/atoms/Count.js'


function App() {
  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  )
}


function Counter(){
  return(
    <div>
      <ShowVal/>
      <Increase/>
      <Decrease/>
    </div>
  )
}


function ShowVal(){
  const val = useRecoilValue(count)
  // console.log(val)
  return (
    <p>
      {val}
    </p>
  )
}
function Increase(){
  const setCount = useSetRecoilState(count);
  console.log(count)
  return(
    <div>
      <button onClick={()=>{setCount(count=>count+1)}}>Increase</button>
    </div>
  )
}

function Decrease(){
  const setCount = useSetRecoilState(count);
  console.log(count)
  console.log(count.key)
  return(
    <div>
      <button onClick={()=>{setCount(count=>count-1)}}>Decrease</button>
    </div>
  )
}



export default App

// i need to create increase , decrease , counter , counter






// Here we are going to learn about (RECOIL = State management library).

// But we can also use useState() hook or Context API then why we are using this ?
// Coz useState() and Context API are not the optimal ways to do state management coz they performs unnecessary re-renders which is not good for our APP.

// RECOIL MINIMIZES UNNECESSARY RENDERS BY ONLY RE-RENDERING COMPONENTS THAT DEPENDS ON CHANGED ATOM.

// ****** THE PERFORMANCE OF A REACT APP IS MEASURED BY THE NO.OF RE-RENDERS.EACH RE-RENDER IS EXPENSIVE.

/*

LET SAY YOU HAVE A TOPBAR AND THAT COMPONENT CONTAINS NOTIFICATION COUNT VARIABLE WHICH CHANGES ITS STATE.IF A NOTIFICATION COMES THEN ONLY THAT NOTIFICATION VARIABLE SHOULD CHANGE AND RE-RENDER NOT WHOLE TOPBAR.IF WE USE useState() or Context API then it re-renders the whole component BUT RECOIL WILL LET YOU RE-RENDER ONLY A SPECIFIC PART.

KEY CONCEPTS IN RECOIL

1. ATOM
2. SELECTORS


*/


