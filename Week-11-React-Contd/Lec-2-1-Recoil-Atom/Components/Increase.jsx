
import { useSetRecoilState } from "recoil"
import { count } from "../Store/atoms/Count"

function Increase(){
    const setCount = useSetRecoilState(count)
    //Returns a setter function for updating Recoil state. Does not subscribe the component to the given state.

    return (
        <div>
            <button onChange={()=>{setCount((curr)=>curr+1)}}>Increase</button>
        </div>
    )
}

export default 