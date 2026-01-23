import { useState } from "react";
import "../src/Sign-Up.css"

const SignUpForm = ()=>{

    const [user,setUser] = useState({
        FirstName:"",
        LastName:"",
        Email:"",
        Password:"",
        Phone:""
    })


    const handleInput = (e)=>{
        // name and value are properties of INPUT BOX that we are sending here
        const name = e.target.name
        const value = e.target.value
        // we have fetched the name and value from our target which is an INPUT BOX

        setUser((prev)=>({...prev,[name]:value}))
        // ...prev will first put the previous object and then change THE PROPERTY WE HAVE GIVEN IN "name" and assign it "value".

        // JavaScript thinks ()=>{} is a function body, not an object.

        //SO FOR RETURNING AN OBJECT IMPLICITLY we use "()=>({})"

        //() => ({}) is an arrow function that returns an object literal. Parentheses are required so JavaScript doesn’t confuse the object with a function body.
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
    }

    const showData = ()=>{
        console.log(user)
    }

    return(
            <form onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account</p>
                
                <section className="fname">
                    <label htmlFor="FirstName">
                        <strong>First Name</strong>
                    </label>
                    <input type="text" name="FirstName" id="fname" placeholder="Enter your first name"onChange={(e)=>handleInput(e)} value={user.FirstName}/>
                </section>

                <section className="LastName">
                    <label htmlFor="LastName">
                        <strong>Last Name</strong>
                    </label>
                    <input type="text" name="LastName" id="lname" placeholder="Enter your last name" onChange={(e)=>handleInput(e)} value={user.LastName}/>
                </section>

                <section className="Email">
                    <label htmlFor="Email">
                        <strong>Email</strong>
                    </label>
                    <input type="email" name="Email" id="email" placeholder="Enter your email" onChange={(e)=>handleInput(e)} value={user.Email}/>
                </section>

                <section className="Password">
                    <label htmlFor="Password">
                        <strong>Password</strong>
                    </label>
                    <input type="password" name="Password" id="password" placeholder="Enter your password" onChange={(e)=>handleInput(e)} value={user.Password}/>
                </section>

                <section className="Phone">
                    <label htmlFor="Phone">
                        <strong>Phone Number</strong>
                    </label>
                    <input type="text" name="Phone" id="phone" placeholder="Enter your phone number" onChange={(e)=>handleInput(e)} value={user.Phone}/>
                </section>

                <section className="buttons">
                    <button onClick={showData}>Sign Up</button>
                </section>

            </form>
    )
}

export default SignUpForm