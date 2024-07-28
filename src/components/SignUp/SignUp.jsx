import React, { useState } from 'react';
import './SignUp.css';

function SignUp() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

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
                firstname,
                lastname,
                username,
                email,
                mobile_number: mobileNumber,
                password,
                confirm_Password: confirmPassword,
            }),
        });

        const data = await response.json();
        if (response.ok) {
            setSuccess('User successfully registered.'); 

            setFirstname('');
            setLastname('');
            setUsername('');
            setEmail('');
            setMobileNumber('');
            setPassword('');
            setConfirmPassword('');     //Clear the fields of form
        } else{
            setError(data.error);
        }
    };

    return (
        <div className='signup-container'>
            <h2>Sign Up</h2>
            {error && <p className='error'>{success}</p>}
            <form onSubmit={handleSignUp}>
                <label>
                    First Name:
                    <input
                        type="text"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        required
                    />
                </label>

                <label>
                    Last Name:
                    <input
                        type="text"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        required
                    />
                </label>

                <label>
          Username:
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>

        <label>
          Email:
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Mobile Number:
          <input
            type='text'
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            required
          />
        </label>

        <label>
          Password:
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <label>
          Confirm Password:
          <input
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;