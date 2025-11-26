function BulbState({bulbState}){
    return (
        <div>
            {bulbState ? "Bulb On" : "Bulb Off"}
        </div>
    )
}

export default BulbState;