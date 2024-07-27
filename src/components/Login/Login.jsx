import React, { useState } from 'react';
import './Login.css';

function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) =>{
        e.preventDefault();
        setError('');

        const responce = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, password}),
        });

        const data = await responce.json();
        if (responce.ok){
            localStorage.setItem('token', data.token);
            localStorage.setItem('username', data.username);
            localStorage.setItem('email', data.email);
            window.location.href = '/header';         //redirected to Header
            } else{
                setError(data.error);
            }
        };

        return(
            <div className="login-container">
                <h2>Login</h2>
                {error && <p className='error'>{error}</p>}
                <form onSubmit={handleLogin}>
                    <label>Username:
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}
                        required/>
                    </label>
                    <label>
                        Password:
                        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}
                        required/>
                    </label>
                    <button type='submit'>Login</button>
                </form>
            </div>
        );
    }

    export default Login;