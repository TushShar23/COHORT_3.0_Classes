import {useRef, useState} from 'react'


const Timer = ()=>{
    const [currentCount,setCount] = useState(0);
    const Timer = useRef(); // useRef() returns an object which has only 1 property "current" which shows the current value of the variable.
    
    function StartClock(){
        console.log(Timer)
        console.log(Timer.current)

        if(Timer.current){
            return;
        }
        // If we will click start button multiple times it won't start multiple INTERVALS NOW.Because we are CHECKING THE WHETHER TIMER.CURRENT HAS ANY VALUE OR NOT and VALUE MEANS INTERVAL ID. IF IT CONTAINS ANY THEN IT WON'T start any other INTERVAL(s).
        else{

            let value = setInterval(function(){
                setCount( current=>current+1 )
            },1000)
    
            Timer.current = value
        }
        // Here the current value of Timer is "value" now which is and ID returned by the setInterval()
        // This is like "this" like where Timer is used.
    }

    function StopClock(){
        console.log(Timer)
        console.log(Timer.current)
        clearInterval(Timer.current)
        Timer.current = null;
        
        // Timer.current=null
        /*
        
        SEE WE HAVE DEFINED A MECHANISM WHERE WE KNOW MULTIPLE INTERVALS WILL NOT GET STARTED BUT when we STOP the counter AND again START it WON'T START COZ TIMER IS HAVING A VALUE ALREADY SO FOR CLEARING THAT VALUE FOR MAKE OUR START BUTTON WORK AGAIN WE NEED THIS LINE

         */
        // Here we are clearing the Timer.current value's
    }
    return (
        <div>
            <p>Timer : {currentCount}</p>
            <br />
            <button onClick={StartClock}>Start</button>
            <button onClick={StopClock}>Stop</button>
        </div>
    )
}

export default Timer;


// We can't use "raw variable like let timer = 0" coz the value stored in it will be limited to the current render.ON RE RENDER IT WILL BE LOST.
// We can use "useState()" but it creates/perform an extra RE-RENDER.

// We need something which can persists data throughout renders and don't perform extra rendering SO FOR THIS PURPOSE you can say useRef() was introduced and there are other high level things which useRef() can do.

//Refs let a component hold some information that isn’t used for rendering, like a DOM node or a timeout ID. Unlike with state, updating a ref does not re-render your component