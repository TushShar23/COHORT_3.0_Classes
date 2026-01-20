import { useState } from "react";
import "../src/Controlled.css"


const ControlledForm = ()=>{
    const [name,setName] = useState("");
    const [age,setAge] = useState(null);

    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    const showData = ()=>{
        console.log(name)
        console.log(age)
    }
    return(
        <div className="container">
            <h1>Uncontrolled Form</h1>
            {/* onsubmit is an event handler that runs when a form is submitted. Using it is a good practise coz it supports Enter key form submission functionality,validation,accessibility etc.*/}
            <form onSubmit={handleSubmit}>
                <label className="name">
                    <span>Name :</span>
                    <input type="text" name="inputName" id="inputId"  value={name} onChange={(e)=>setName(e.target.value)}/>
                </label>
                <label className="age">
                    <span>Age :</span>
                    <input type="text" name="myage" id="ageId" value={age} onChange={(e)=>setAge(e.target.value)}/>
                </label>
                <br />
                <button onClick={showData}>Submit</button>
            </form>
        </div>
    )
}

/*

***** THIS ERROR WILL SHOW UP WHEN YOU REMOVE "VALUE" attribute OR "OnChange" attribute *****

A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component.

"VALUE" and "ONCHANGE" works TOGETHER NOT STANDALONE.

VALUE = STATE
ONCHANGE = STATE UPDATOR FUNCTION

 * WE MOSTLY USE CONTROLLED WAY OF FORM HANDLING 

*/

export default ControlledForm