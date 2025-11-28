import BulbState from "./BulbState.jsx";
import BulbUpdator from './BulbUpdator.jsx';

function Light(){
    return(
        <div>
            <BulbState />
            <BulbUpdator />
        </div>
    )
}

export default Light;