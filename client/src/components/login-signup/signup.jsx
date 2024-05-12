import React, { useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
import "./login-signup.css"


const Signup= () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
 async function registerUser (ev)  {
    ev.preventDefault();
  try {   await axios.post('/signup', {
    name,
    email,
    password,
  });
  alert('registration Successful, now you can log in.')} catch (e) {
    alert("registration failed, please try again later")
  }

    
  }
    return (
        <div>
            
        <div className="login-container">
        <div className="log-in-side">  <div className="message-box">
        <h2>Create An Account Now</h2>
        <h3>Discover Exclusive Rental Services</h3>
        <p>Ready to embark on your next journey? Signing up grants you seamless access to manage your bookings, track your rental history, and unlock exclusive member benefits. Whether you're preparing for your next adventure or need to make changes to an existing reservation, our intuitive platform empowers you to take charge.</p>
    </div>
</div>
          <div className="screen">
            <div className="screen__content">
              <form className="signup">
              <div className="login__field">
                  <i className="login__icon fas fa-user"></i>
                  <input type="text" className="login__input" placeholder=" Full Name" value={name} onChange={ev => setName(ev.target.value)} />
                </div>
                <div className="login__field">
                  <i className="login__icon fas fa-user"></i>
                  <input type="text" className="login__input" placeholder=" Email" value={email} onChange={ev => setEmail(ev.target.value)}  />
                </div>
                <div className="login__field">
                  <i className="login__icon fas fa-lock"></i>
                  <input type="password" className="login__input" placeholder="Password" value={password} onChange={ev => setPassword(ev.target.value)}  />
                </div>
                <div className="login__field">
                  <i className="login__icon fas fa-lock"></i> 
                  <input type="password" className="login__input" placeholder="Repeat Password" />
                </div>
                <Link to={"/login"} className="form-question"><p >Already Have An Account?<br/> Login In Here!</p></Link>
                <button onClick={registerUser} className="button login__submit">
                  <span className="button__text">Sign Up </span>
                  <i className="button__icon fas fa-chevron-right"></i>
                </button>        
              </form>
              
           
            </div>
            <div className="screen__background">
              <span className="screen__background__shape screen__background__shape4"></span>
              <span className="screen__background__shape screen__background__shape3"></span>   
              <span className="screen__background__shape screen__background__shape2"></span>
              <span className="screen__background__shape screen__background__shape1"></span>
            </div>      
          </div>
   
        </div>
 
      </div>
    )
}

export default Signup