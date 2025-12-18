import { CountContext } from "../src/App"
import { useContext } from "react"


function IncreaseCount(){
    const {setCount} = useContext(CountContext)
    return(
        <span>
            <button onClick={()=>{setCount((val)=>val+1)}}>Increase</button>
        </span>
    )
}

export default IncreaseCount;