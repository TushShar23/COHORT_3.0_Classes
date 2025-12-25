import {count} from '../Store/atoms/Count'

function CounterState(){
    return (
        <div>
            {count}
        </div>
    )
}

export default CounterState