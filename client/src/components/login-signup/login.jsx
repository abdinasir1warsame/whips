import React from "react";
import "./login-signup.css"


const Login = () => {
    return (
        <div>
            
        <div className="login-container">
        <div className="log-in-side"><div class="message-box">
        <h2>Login to Your Account</h2>
    <h3>Explore our Exclusive Rental Services</h3>
    <p>Ready to hit the road again? Signing in allows you to effortlessly manage your bookings, track your rental history, and access exclusive member benefits. Whether you're planning your next adventure or need to modify an existing reservation, our user-friendly platform puts you in control.</p>
 
    
</div>
</div>
          <div className="screen">
            <div className="screen__content">
              <form className="login">
                <div className="login__field">
                  <i className="login__icon fas fa-user"></i>
                  <input type="text" className="login__input" placeholder=" Email" />
                </div>
                <div className="login__field">
                  <i className="login__icon fas fa-lock"></i>
                  <input type="password" className="login__input" placeholder="Password" />
                </div>
                <button className="button login__submit">
                  <span className="button__text">Log In</span>
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

export default Login