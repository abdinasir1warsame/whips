import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './login-signup.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = () => {
    if (!name || !email || !password || !repeatPassword) {
      setError('All fields are required.');
      return false;
    }
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return false;
    }
    if (password !== repeatPassword) {
      setError('Passwords do not match.');
      return false;
    }
    // Additional validation can be added here
    return true;
  };

  async function registerUser(ev) {
    ev.preventDefault();
    setError(''); // Clear any existing error messages

    if (!validateForm()) return;

    try {
      const response = await axios.post('/signup', {
        name,
        email,
        password,
      });
      alert('Registration successful, now you can log in.');
      navigate('/login'); // Navigate to the /login route after successful registration
    } catch (e) {
      // Handle specific error responses
      if (e.response) {
        // Server responded with a status other than 200 range
        setError(
          e.response.data.message ||
            'Registration failed, please try again later.'
        );
      } else if (e.request) {
        // Request was made but no response received
        setError('No response from the server. Please try again later.');
      } else {
        // Something else happened in setting up the request
        setError('An unexpected error occurred.');
      }
    }
  }

  return (
    <div>
      <div className="login-container">
        <div className="log-in-side">
          <div className="message-box">
            <h2>Create An Account Now</h2>
            <h3>Discover Exclusive Rental Services</h3>
            <p>
              Ready to embark on your next journey? Signing up grants you
              seamless access to manage your bookings, track your rental
              history, and unlock exclusive member benefits. Whether you're
              preparing for your next adventure or need to make changes to an
              existing reservation, our intuitive platform empowers you to take
              charge.
            </p>
          </div>
        </div>
        <div className="screen">
          <div className="screen__content">
            <form className="signup" onSubmit={registerUser}>
              {error && <p className="error-message">{error}</p>}
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  type="text"
                  className="login__input"
                  placeholder="Full Name"
                  value={name}
                  onChange={(ev) => setName(ev.target.value)}
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-envelope"></i>{' '}
                {/* Updated icon for email */}
                <input
                  type="text"
                  className="login__input"
                  placeholder="Email"
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                  type="password"
                  className="login__input"
                  placeholder="Password"
                  value={password}
                  onChange={(ev) => setPassword(ev.target.value)}
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                  type="password"
                  className="login__input"
                  placeholder="Repeat Password"
                  value={repeatPassword}
                  onChange={(ev) => setRepeatPassword(ev.target.value)}
                />
              </div>
              <button type="submit" className="button login__submit">
                <span className="button__text">Sign Up</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
            </form>
            <Link to={'/login'} className="form-question">
              <p>Already Have An Account? Login Here!</p>
            </Link>
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
  );
};

export default Signup;
