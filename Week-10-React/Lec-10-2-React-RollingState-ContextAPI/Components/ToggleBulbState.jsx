function ToggleState({setBulbState}){
    function toggle(){
        setBulbState(currentval => !currentval)
    }

    return (
        <div>
            <button onClick={toggle}>Toggle the bulb</button>
        </div>
    )
}

export default ToggleState;