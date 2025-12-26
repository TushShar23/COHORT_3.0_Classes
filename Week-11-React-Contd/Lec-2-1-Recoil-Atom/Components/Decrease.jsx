import { useSetRecoilState } from "recoil"
import {count, Count} from "../Store/atoms/Count.js"

function Decrease(){
    const setCount = useSetRecoilState(Count);
    // console.log(count)
    return (
        <div>
            <button onClick={()=>{setCount(count=>count-1)}}>Decrease</button>
        </div>
    )
}

export default Decrease;