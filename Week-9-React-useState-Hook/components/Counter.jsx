import React, { useState } from "react";


function Counter_btn({innerText="Counter"}){
    const [counter,setCounter] = useState(0);
    // useState() hook is just a function which returns us 2 things in an array [variable,function_to_update_val].We have just destructured those things.
    // useState(0) means useState() expects a parameter which is INIITAL VALUE OF THE VARIABLE.

    function OnClickHandler(){
        setCounter(counter + 1);
    }
    return(
        <div>
            <button onClick={OnClickHandler}>{innerText}</button>
            <p>Counter : {counter}</p>
        </div>
    )
    // we have used props and useState() hook to demonstrate its use
}

export default Counter_btn;

/*


Feature             export default	                                Named Exports (export)
Quantity	        Only one per module.	                         Multiple per module.
Import Syntax	    No curly braces (import name from '...').	Requires curly braces (import { name } from '...').
Import Name	Can be imported with any name.	                        Must use the exact name as exported (or an alias with as).
Use Case	Single, primary export.	                Multiple secondary values or utility functions.


*/