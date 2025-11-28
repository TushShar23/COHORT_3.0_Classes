import { useContext } from "react";
import {BulbContext}  from "../src/App.jsx";

function BulbFunc(){
    const {setBulbState} = useContext(BulbContext)
    // using the context and destructuring the Context Object.

    function Toggle(){
        setBulbState(currval=>!currval) // implicit return
        // setBulbState((currVal)=>{return !currVal}) // explicit return
    } 

    return(
        <div>
            <button onClick={Toggle}>Toggle the bulb</button>
        </div>
    )
}

export default BulbFunc;