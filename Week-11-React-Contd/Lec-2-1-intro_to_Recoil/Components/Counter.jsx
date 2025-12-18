import { useContext } from "react";
import { CountContext } from "../src/App";

function Counter(){
    const {count : counter} = useContext(CountContext);
    return(
        <div>
            {counter}
        </div>
    )
}

export default Counter;