import { useContext } from "react";
import {BulbContext} from '../src/App.jsx'

function BulbState(){
    const { BulbOn } = useContext(BulbContext);
    return(
        <div>
          Bulb: {BulbOn ? "On" : "Off"}
        </div>
    )
}

export default BulbState;


// WHAT I WAS DOING WRONG 
/*

 WRONG IMPORT :
 import BulbContext from '../src/App.jsx'

 You must import ONLY the context object, not the entire App component.

 CORRECT IMPORT:
 import { BulbContext } from "../App";
*/