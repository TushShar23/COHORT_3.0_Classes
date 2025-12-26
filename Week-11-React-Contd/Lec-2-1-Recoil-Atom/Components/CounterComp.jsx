import { useRecoilValue } from 'recoil'
import {Count} from '../Store/atoms/Count.js'

function CounterVal(){
    const countState = useRecoilValue(Count)
    console.log(countState)
    return(
        <div>
            {countState}
        </div>
    )
}

export default CounterVal;