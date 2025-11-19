import React from 'react';
import {useState,useEffect} from 'react';

function Timer(){
  const [seconds,setSeconds] = useState(0);

    useEffect(()=>{
        const intervalID = setInterval(()=>{
            setSeconds(prev => prev + 1)
        },1000)


        return ()=>{
            clearInterval(intervalID)
        }

  },[]);

  /**

   
  Your timer is jumping in 2-second steps because the cleanup is not clearing the interval you created.
This causes multiple intervals to run together → doubling the speed every render.



Since interval is never cleared, React Strict Mode mounts & unmounts the component twice in dev environment.

Meaning:

First mount → interval #1 starts

Strict mode unmounts → cleanup fails (clearInterval didn’t work)

Second mount → interval #2 starts

➡ Now you have two intervals running





   
    intervalId = not saved ❌
    cleanup → clearInterval(undefined) ❌
    result → interval keeps running → doubled timer ❌

    Because the interval is never cleared, and React Strict Mode creates TWO intervals, making the timer count twice as fast

    I was storing the useEffect() in clock

    //   const clock = useEffect(()=>{
//         const intervalID = setInterval(()=>{
//             setSeconds(prev => prev + 1)
//         },1000)


//         return ()=>{
//             clearInterval(intervalID)
//         }

//   },[]);

// In "CLOCK" i was storing useEffect() WHICH IS RETURNING NOTHING.AND WHEN WE WERE CLEARING INTERVAL WE WERE CLEARING UNDEFINED "clearInterval(undefined)".When we store setInterval() in a variable then it returns us an ID which in clearInterval looks like clearInterval(ID) AND ACTUALLY NOW CLEARS.NOW THIS CLEANUP CODE IS UNMOUNTING THE COMPONENT.


   */


    
    // this FUNCTION WHICH WE ARE RETURNING is the CLEANUP FUNCTION.We Will need this when we have different section on an application and we switch between them.

    return(
        <div>
            {seconds} seconds elapsed
        </div>
    )
}

// this we are making to understand "CLEANUP CODE IN USEFFECT".

export default Timer;