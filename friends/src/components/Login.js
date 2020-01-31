import React, { useState } from 'react';
import axios from 'axios';

const Login = (props) => {
    const [credentials, setCredentials] = useState({});



    const handleChanges = e => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    
    }

    const login = e => {
        e.preventDefault();

        axios.post("http://localhost:5000/api/login", credentials)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            props.history.push('/friends')
            
        })
        .catch(err => {
            console.log(err)
        })

    }

    return(
        <div>
            <form onSubmit={login}>
            <label htmlFor="username">Username</label>
            <input
            id="username"
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChanges}
            />    
            <br/>
            <label htmlFor="password">Password</label>
            <input
            id="password"
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChanges}
            />    
            <br/>
            <button>Login</button>


            </form >
        </div>
    )
}

export default Login