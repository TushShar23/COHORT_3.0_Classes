// the usePrevious hook gives us a reference to its old* value.

import { useEffect, useRef } from "react";

function usePrev(value){
    const ref = useRef();
    console.log("re-renders happens with the value : "+value);
    //a mutable reference to a value that can be changed with the assignment operator and without causing re-renderings

    useEffect(()=>{
        console.log("updated the ref with the value: "+value);
        ref.current = value;
    },[value])
    
    console.log("Returned value : "+ref.current)
    return ref.current;
}

export default usePrev;

// what problem here is when there is a re-render on the page it will not run the effect BUT IT NOW RETURNS THE REF.CURRENT VALUE means PREVIOUS AND CURRENT VALUE WILL BECOME SAME.


// BUT THE ABOVE IS NOT THE RIGHT IMPLEMENTATION OF THE "usePrev"

// MOST IMPORTANT PROPERTY OF REACT WHEN IT COMES TO HANDLING EFFECTS IS :
// React "renders" FIRST then RUN the EFFECTS.
//the useEffect callback DOES NOT run before, but after this function returns

/*

Here when the value is 0 the current value which will be returned is "UNDEFINED" and then the "ref.current " will be set to "0" -> "ref.current = 0".Then again on clicking button value becomes 1 so here first "0" will be returned as current value and then the effect will run and set "ref.current" to "1".

*/

// You can say that "NODE JS GLOBAL VARIABLE is something like REFS in react coz we don't component to re-render"