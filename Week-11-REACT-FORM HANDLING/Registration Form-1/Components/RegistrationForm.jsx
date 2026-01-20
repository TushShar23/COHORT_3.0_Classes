import "../src/Form.css"


const RegistrationForm = ()=>{


    const handleSubmit = (e)=>{
        e.preventDefault();
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
                    <input type="text" name="FirstName" id="fname" placeholder="Enter your first name"/>
                </section>

                <section className="lname">
                    <label htmlFor="LastName">
                        <strong>Last Name</strong>
                    </label>
                    <input type="text" name="LastName" id="lname" placeholder="Enter your last name"/>
                </section>

                <section className="email">
                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input type="text" name="email" id="myemail" placeholder="Enter your email address"/>
                </section>

                <section className="Password">
                    <label htmlFor="password">
                        <strong>Password</strong>
                    </label>
                    <input type="text" name="password" id="mypassword" placeholder="Enter your password"/>
                </section>

                <section className="Phone">
                    <label htmlFor="phone">
                        <strong>Phone Number</strong>
                    </label>
                    <input type="text" name="phone" id="myphone" placeholder="Enter your phone number"/>
                </section>
                
                <section className="buttons">
                    <button>Sign Up</button>
                </section>
            </form>
        </div>
    )
}


export default RegistrationForm