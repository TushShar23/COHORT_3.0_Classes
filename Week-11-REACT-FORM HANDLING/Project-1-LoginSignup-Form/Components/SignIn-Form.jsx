 import "../src/Sign-in.css"

 const SignInForm = ()=>{

    const handleSubmit=(e)=>{
        e.preventDefault()
    }
    return(
        <form onSubmit={handleSubmit}>
            <h1>Sign In</h1>
                
                <section className="fname">
                    <label htmlFor="FirstName">
                        <strong>First Name</strong>
                    </label>
                    <input type="text" name="FirstName" id="fname" placeholder="Enter your first name"/>
                </section>

                <section className="LastName">
                    <label htmlFor="LastName">
                        <strong>Last Name</strong>
                    </label>
                    <input type="text" name="LastName" id="lname" placeholder="Enter your last name"/>
                </section>

                <section className="buttons">
                    <button>Sign In</button>
                </section>
        </form>
    )
}


export default SignInForm

