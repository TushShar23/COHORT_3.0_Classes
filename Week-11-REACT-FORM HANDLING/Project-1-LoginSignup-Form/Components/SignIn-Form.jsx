 import { useState } from "react"
import "../src/Sign-in.css"

 const SignInForm = ()=>{
    const [user,setUser] = useState({
        Email:"",
        Password:"",
    })

    const handleInput = (e)=>{
        const name = e.target.name // Input box attribute
        const value = e.target.value

        setUser((prev)=>({...prev,[name]:value}));
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
    }

    const showData = ()=>{
        console.log(user)
    }
    return(
        <form onSubmit={handleSubmit}>
            <h1>Sign In</h1>
                
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
                    <input type="password" name="Password" id="passwordcd" placeholder="Enter your password" onChange={(e)=>handleInput(e)} value={user.Password}/>
                </section>

                <section className="buttons">
                    <button onClick={showData}>Sign In</button>
                </section>
        </form>
    )
}


export default SignInForm

