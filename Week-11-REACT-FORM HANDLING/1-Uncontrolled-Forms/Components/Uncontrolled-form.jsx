
export const UncontrolledForm = ()=>{
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(e.target.value)
    }
    return(
        <div className="container">
            <h1>Uncontrolled Form</h1>
            {/* onsubmit is an event handler that runs when a form is submitted. */}
            <form onSubmit={handleSubmit}>
                <label>
                    Name : 
                    <input type="text" name="inputName" id="inputId" />
                </label>
                <label>
                    Age:
                    <input type="text" name="myage" id="agedid"  />
                </label>
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}