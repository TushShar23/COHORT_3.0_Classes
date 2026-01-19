import "../src/Uncontrolled.css"

const UncontrolledForm = ()=>{
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(e.target.value)
    }

    const showData = ()=>{
        const nameData = document.querySelector("#inputId");
        const ageData = document.querySelector("#ageId");
        const nameValue = nameData.value;
        const ageValue = ageData.value;
        console.log(nameData,ageData);
        console.table(nameValue,ageValue);
        // console.log(e.target.value)
    }
    return(
        <div className="container">
            <h1>Uncontrolled Form</h1>
            {/* onsubmit is an event handler that runs when a form is submitted. */}
            <form onSubmit={handleSubmit}>
                <label className="name">
                    <span>Name :</span>
                    <input type="text" name="inputName" id="inputId" />
                </label>
                <label className="age">
                    <span>Age :</span>
                    <input type="text" name="myage" id="ageId"  />
                </label>
                <br />
                <button onClick={showData}>Submit</button>
            </form>
        </div>
    )
}

export default UncontrolledForm;