import {useState,useEffect} from 'react'

const RegistrationForm = () => 
{

    const [formData, setFormData] = useState({
        firstName : "",
        lastName : "",
        email: "",
        password: ""
    });


    const onCreateAccount = (evt)=>{

        evt.preventDefault();


        fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/users`,{
            method :"POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(formData)
        })
        .then(response=>response.json())
        .then(json=>{
    
              alert(json.message);
              setFormData({
                firstName : "",
                lastName : "",
                email: "",
                password: ""
            })
    
        })
        .catch(err=>{
            console.log(`Error ${err}`)
        })
    }
      


    return (
        <section id="register-section">

        <div className= "container">
        
            <center><h1>Create an Account</h1></center>

            <form action="" onSubmit={onCreateAccount}>

                <div className="form-control">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" value={formData.firstName} required/>
                </div>

                <div className="form-control">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" value={formData.lastName} required />
                </div>

                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email"  value={formData.email} required/>
                </div>


                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="text" id="password" valeu={formData.password} required/>
                </div>


                <div className="form-control">
                    <button className="btn" type="submit">Register</button>
                </div>

            </form>

        </div>

    </section>
    )
}

export default RegistrationForm