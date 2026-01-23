import { useState } from "react"
import SignUpForm  from "./SignUp-Form"
import { SignInForm } from "./SignIn-Form"
import "../src/Form.css"

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
        <div className="container">
            {state === true ? <SignUpForm/> : <SignInForm/>}
            {signup === true ?  <a href="#" onClick={(e)=>changeState(e)}>Already have an account</a> :  <a href="#" onClick={(e)=>changeState(e)}>Sign Up</a>}
           
        </div>
        
    )
}

export default Form

/*

IMPORTANT POINTS

> Whenever you use <a></a> tag for navigating in forms then always "PREVENT ITS DEFAULT BEHAVIOUR".

> NEVER USE "/" in <a></a> else :
You click Already have an account

changeState() runs ✅

React switches component (SignUp → SignIn)

Browser sees <a href="/">

Page reloads ❌

React state resets ❌

> <a> tag has DEFAULT behavior

It navigates
It reloads the page
React state gets reset
UI changes → then instantly refreshes

That’s why:

it switches for a moment → then refreshes back

> ALWAYS REMEMBER ()=>() or ()=> means "IMPLICIT RETURN" no need to mention RETURN
> ALWAYS REMEMBER ()=>{} means "EXPLICIT RETURN" its a proper function you need to mention RETURN explicitly



*/