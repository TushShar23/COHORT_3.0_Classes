import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [counter, setCounter] = useState(1)

  // setInterval(() => {
  //   setCounter(counter+1);
  // }, 1000); //

  // when we use only setInterval() without using useEffect() what happens is it will go and stuck.Coz every time when state(counter updates its value) REACT RE-RENDERS our APP and when APP() runs the FUNCTION GETS CALLED again and again.

  /*

  Every time state updates → React re-renders → function runs → a new setInterval is created.

  So you get:
  Render 1 → creates setInterval #1  
  Render 2 → creates setInterval #2  
  Render 3 → creates setInterval #3  
...
    And all those intervals are running together, creating:

    multiple increments
    very fast jumps
    unpredictable behavior
    memory leaks
*/
// MAIN PROBLEM WITH THE ABOVE CODE IS THAT IT IS AGAIN AND AGAIN CALLING SETINTERVALS EVERY TIME OUR APP NEEDS TO RE-RENDER.

function updateVal(){
  // setCounter(currentval => currentval + 1)
  // In setCounter we have given it a anonymous implicit arrow function() which is implicitly returning the new value of counter everytime.IT IS USED WHEN WE DO NOT PASS ANY DEPENDENCY STILL WE WANT TO UPDATE THE STATE(EMPTY DEPENDENCY ARRAY)


  setCounter(counter+1);
}


useEffect(()=>{
  console.log("update val")
 setInterval(updateVal,1000)
},[])

// THIS useEffect() runs only ONCE when our component is MOUNTED(PUT ON SCREEN).Here our DEPENDENCIES ARRAY IS NOT CONTAINING ANY DEPENDENCY like any state variable or else.
// YOU CAN ALSO USE THIS FOR UPDATING STATE.THERE IS a jugaad.

useEffect(()=>{
  console.log("update value everytime when counter is updated")
  setInterval(updateVal,1000)
},[counter])

// THIS WILL RUN WHEN THE COMPONENT IS MOUNTED ON SCREEN AND ALSO WHEN there is any updation/change IN ANY STATE VARIABLE/STATE like counter.[counter] simply means that we have GIVEN YOU A DEPENDENCY NOW useEffect() is also dependent on this dependency.WHENEVER THIS DEPENDENCY WILL BE UPDATED/CHANGED USEFFECT WILL RUN.


  return (
    <>
      {counter}
    </>
  )
}


// story of useEffect starts with what if we want to do some side effects thingies like API calls,DOM manip.,Fetching details.



// Need to study few IMPORTANT TOPICS IN useEffect() - DEPENDENCY ARRAY,CLEARING/CLEANUP FUNCTION.

export default App
