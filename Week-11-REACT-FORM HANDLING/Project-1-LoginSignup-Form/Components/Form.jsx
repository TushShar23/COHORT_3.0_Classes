import { useState } from "react"
import { SignUpForm } from "./SignUp-Form";
import { SignInForm } from "./SignIn-Form"

const Form = ()=>{
    const [state,setState] = useState(true)
    const [signup,setSignup] = useState(true)

    const changeState = (e)=>{
        e.preventDefault()
        setState((prev)=>(!prev))
        setSignup((prev)=>(!prev))
        // when you do ()=>{} means you have to explicitly return something but when you do (prev)=>() means implicit return.
        //ERROR was i was doing {} and not returning explicitly.
    }
    return(
        <div>
            {state === true ? <SignUpForm/> : <SignInForm/>}
            {signup === true ?  <a href="#" onClick={(e)=>changeState(e)}>Already have an account</a> :  <a href="#" onClick={(e)=>changeState(e)}>Sign Up</a>}
           
        </div>
        
    )
}

export default Form