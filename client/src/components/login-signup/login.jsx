import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import { userContext } from '../../userContext.jsx';
import './login-signup.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState('');
  const { setUser } = useContext(userContext);

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = () => {
    if (!email || !password) {
      setError('Both email and password are required.');
      return false;
    }
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return false;
    }
    return true;
  };

  async function loginUser(ev) {
    ev.preventDefault();
    setError(''); // Clear any existing error messages

    if (!validateForm()) return;

    try {
      const response = await axios.post('/login', { email, password });
      setUser(response.data);
      alert('Login successful');
      setRedirect(true);
    } catch (e) {
      // Handle specific error responses
      if (e.response) {
        if (e.response.status === 422) {
          setError('User not found or incorrect password.');
        } else {
          setError(
            e.response.data.message || 'Login failed, please try again later.'
          );
        }
      } else if (e.request) {
        setError('No response from the server. Please try again later.');
      } else {
        setError('An unexpected error occurred.');
      }
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />;
  }

  return (
    <div>
      <div className="login-container">
        <div className="log-in-side">
          <div className="message-box">
            <h2>Login to Your Account</h2>
            <h3>Explore our Exclusive Rental Services</h3>
            <p>
              Ready to hit the road again? Signing in allows you to effortlessly
              manage your bookings, track your rental history, and access
              exclusive member benefits. Whether you're planning your next
              adventure or need to modify an existing reservation, our
              user-friendly platform puts you in control.
            </p>
          </div>
        </div>
        <div className="screen">
          <div className="screen__content">
            <form className="login" onSubmit={loginUser}>
              {error && <p className="error-message">{error}</p>}
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
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
              <button type="submit" className="button login__submit">
                <span className="button__text">Log In</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
              <Link to={'/signup'} className="form-question">
                <p className="login-q">
                  Don't Have An Account?
                  <br /> Sign Up Here!
                </p>
              </Link>
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
  );
};

export default Login;
