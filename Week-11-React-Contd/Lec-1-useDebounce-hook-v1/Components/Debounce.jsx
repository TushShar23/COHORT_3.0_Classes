import { useRef } from "react";

function useDebounce(orgFunc){
    const currentclock = useRef();

    const mainFunc = ()=>{
        // first we clear/terminate the time/currentclock then assign the new clock.
        clearTimeout(currentclock.current);
        currentclock.current = setTimeout(orgFunc,200);
        // this means first we are clearing the "CURRENTCLOCK's CURRENT VALUE REFERENCE VARIABLE then assigning the new CLOCK IN THE current of currentclock"
    }

    return mainFunc;
}

// how we are implementing "debounce hook" is we store the currentclock like upto this ms IF USER IS AWAY FROM KEYWORD then send the REQUEST else wait for the user to move away from keyboard.

export default useDebounce;