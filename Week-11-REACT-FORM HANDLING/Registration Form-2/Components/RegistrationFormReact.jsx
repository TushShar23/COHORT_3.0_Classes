import { useState } from "react"
import '../src/RegistrationForm.css'

const RegistrationFormReact = ()=>{
    const [user,setUser] = useState({
        FirstName:"",
        LastName:"",
        Email:"",
        Password:"",
        Phone:""
    })
    

    const handleSubmit = (e)=>{
        e.preventDefault();
        // console.log(user)
    }

    const handleInputData = (event)=>{
        const name = event.target.name // this is the name property of the input box.we know the event.target will be an input box and we are catching the data from it.
        const value = event.target.value
        
        setUser((prev)=>({...prev,[name]:value}))

        /* what does this mean "setUser((prev)=>({...prev,[name]:value}))"" ?
        
            Update one property of the user state while keeping all other properties unchanged.

            setUser((prev) => ({ ...prev, [name]: value })) uses a functional state update to immutably update a specific property in an object state while preserving the rest of the state.

            One golden rule 🧠

            When state is an object, always spread previous state before updating a key.

            { ...prev } do?

                This is the spread operator.

                { ...prev }


                Means:
                👉 “Copy all existing properties of prev into a new object”

                [name]: value mean?

            This is a computed property name.

            Assume:

            name = "email"
            value = "new@gmail.com"


            Then:

            { [name]: value }


            Becomes:

            { email: "new@gmail.com" }

            setUser((prev) => ({
            ...prev,
            [name]: value
            }));

            Step-by-step:

                Take old state (prev)

                Copy everything (...prev)

                Update only one key

                RETURN NEW OBJECT
        */
    }

    const showData = ()=>{
        console.log(user)
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
                    <input type="text" name="FirstName" id="fname" placeholder="Enter your first name" onChange={(e)=>handleInputData(e)} value={user.FirstName}/>
                </section>

                <section className="lname">
                    <label htmlFor="LastName">
                        <strong>Last Name</strong>
                    </label>
                    <input type="text" name="LastName" id="lname" placeholder="Enter your last name" onChange={(e)=>handleInputData(e)} value={user.LastName}/>
                </section>

                <section className="Email">
                    <label htmlFor="Email">
                        <strong>Email</strong>
                    </label>
                    <input type="text" name="Email" id="myemail" placeholder="Enter your email address" onChange={(e)=>handleInputData(e)} value={user.Email}/>
                </section>

                <section className="Password">
                    <label htmlFor="Password">
                        <strong>Password</strong>
                    </label>
                    <input type="password" name="Password" id="mypassword" placeholder="Enter your password" onChange={(e)=>handleInputData(e)} value={user.Password}/>
                </section>

                <section className="Phone">
                    <label htmlFor="Phone">
                        <strong>Phone Number</strong>
                    </label>
                    <input type="text" name="Phone" id="myphone" placeholder="Enter your phone number" onChange={(e)=>handleInputData(e)} value={user.Phone}/>
                </section>
                
                <section className="buttons">
                    <button onClick={showData}>Sign Up</button>
                </section>
            </form>
        </div>
    )
}


export default RegistrationFormReact


// If "NAME" and "PROPERTY OF THE USESTATE OBJECT" is not SAME THEN REACT TREAT IT AS A NEW PROPERTY AND ADD IT.