import { CountContext } from "../src/App"
import { useContext } from "react"


function DecreaseCount(){
    const {setCount,count} = useContext(CountContext)
    function change(){
        if(count >= 1){
            setCount((val)=>val-1)
        }
    }
    return(
        <span>
            <button onClick={change}>Decrease</button>
        </span>
    )
}

export default DecreaseCount;


