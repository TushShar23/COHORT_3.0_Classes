import { useState } from "react";
import "../src/Form.css"


const RegistrationForm = ()=>{
    const [fname,setFname] = useState("")
    const [lname,setLname] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [phone,setPhone] = useState(null)

    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    const handleInputData = (event)=>{
        const name = event.target.name // this is the name property of the input box.we know the event.target will be an input box and we are catching the data from it.
        const value = event.target.value

        switch (name) {
            case "FirstName":
                setFname(value)
                break;
            // value is the attribute of the input box which contains the state variable fname's value.
            case "LastName":
                setLname(value);
                break;

            case "email":
                setEmail(value);
                break;

            case "password":
                setPassword(value);
                break;

            case "phone":
                setPhone(value);
                break;
        
            default:
                break;
        }

    }

    const showData = ()=>{
        const dataObj = {
            firstname:fname,
            lastname:lname,
            email:email,
            password:password,
            phone:phone
        }

        console.log(dataObj)
    }


    return(
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account</p>

                <section className="fname">
                    <label htmlFor="FirstName">
                        <strong>First Name</strong>
                    </label>
                    <input type="text" name="FirstName" id="fname" placeholder="Enter your first name" onChange={(e)=>handleInputData(e)} value={fname}/>
                </section>

                <section className="lname">
                    <label htmlFor="LastName">
                        <strong>Last Name</strong>
                    </label>
                    <input type="text" name="LastName" id="lname" placeholder="Enter your last name" onChange={(e)=>handleInputData(e)} value={lname}/>
                </section>

                <section className="email">
                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input type="text" name="email" id="myemail" placeholder="Enter your email address" onChange={(e)=>handleInputData(e)} value={email}/>
                </section>

                <section className="Password">
                    <label htmlFor="password">
                        <strong>Password</strong>
                    </label>
                    <input type="text" name="password" id="mypassword" placeholder="Enter your password" onChange={(e)=>handleInputData(e)} value={password}/>
                </section>

                <section className="Phone">
                    <label htmlFor="phone">
                        <strong>Phone Number</strong>
                    </label>
                    <input type="text" name="phone" id="myphone" placeholder="Enter your phone number" onChange={(e)=>handleInputData(e)} value={phone}/>
                </section>
                
                <section className="buttons">
                    <button onClick={showData}>Sign Up</button>
                </section>
            </form>
        </div>
    )
}


export default RegistrationForm