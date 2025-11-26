import { useState } from "react";
import BulbState from '../Components/BulbState.jsx'
import ToggleBulbState from '../Components/ToggleBulbState.jsx'


function LightBulb(){
    const [bulbState,setBulbState] = useState(true);
    return (
        <div>
            <BulbState bulbState={bulbState} />
            <ToggleBulbState setBulbState={setBulbState} />
        </div>
    )
}

export default LightBulb;