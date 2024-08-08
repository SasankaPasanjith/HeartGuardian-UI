import React, { useState } from 'react';
import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import { signUp } from '../../assets';

function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate(); //Usenavigate hook

    const handleSignUp = async (e) =>{
        e.preventDefault();
        setError('');
        setSuccess('');

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        const response = await fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                email,
                mobile_number: mobileNumber,
                password,
                confirm_password: confirmPassword
            }),
        });

        const data = await response.json();
        if (response.ok) {
            setSuccess('User successfully registered.');
            
            localStorage.setItem('username', username);
            setUsername('');
            setEmail('');
            setMobileNumber('');
            setPassword('');
            setConfirmPassword('');

            setTimeout(() => {
                navigate('/'); // Redirect to the header section after a delay
            }, 2000);
        } else {
            setError(data.error);
        }
    };

    return (
      <div className="signup-page">
          <div className="signup-left">
              <div className="signup-container">
                  <h2>Sign Up</h2>
                  {error && <p className="error">{error}</p>}
                  {success && <p className="success">{success}</p>}
                  <form onSubmit={handleSignUp}>
                      <label>
                          Username:
                          <input
                              type="text"
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                              required
                          />
                      </label>
                      <label>
                          Email:
                          <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                          />
                      </label>
                      <label>
                          Mobile Number:
                          <input
                              type="text"
                              value={mobileNumber}
                              onChange={(e) => setMobileNumber(e.target.value)}
                              required
                          />
                      </label>
                      <label>
                          Password:
                          <input
                              type="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              required
                          />
                      </label>
                      <label>
                          Confirm Password:
                          <input
                              type="password"
                              value={confirmPassword}
                              onChange={(e) => setConfirmPassword(e.target.value)}
                              required
                          />
                      </label>
                      <button type="submit">Sign Up</button>
                  </form>
                  <p className="login-link">
                      Already have an account? <Link to="/login">Log in</Link>
                  </p>
              </div>
          </div>
          <div className="signup-right">
              <img src={signUp} alt="Signup Illustration"/>
          </div>
      </div>
  );
}

export default SignUp;