function BulbState({bulbState}){
    return (
        <div>
            {bulbState ? "Bulb On" : "Bulb Off"}
        </div>
    )
}

export default BulbState;

// IF you are using any other name except "props" then YOU NEED TO DESTRUCTURE THAT NAME AND PARAMETER AND ARGUMENT NAME SHOULD BE SAME.