
import { useSetRecoilState } from "recoil"
import {Count} from "../Store/atoms/Count.js"

function Increase(){
    const setCount = useSetRecoilState(Count)
    //Returns a setter function for updating Recoil state. Does not subscribe the component to the given state.

    return (
        <div>
            <button onClick={()=>{setCount((count)=>count+1)}}>Increase</button>
        </div>
    )
}

export default Increase;