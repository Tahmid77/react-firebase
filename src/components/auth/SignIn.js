import React, { useState,useContext } from 'react';
//import firebase from '../../fb/fbConfig';
import { AuthContext } from '../../contexts/AuthContext';


const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {signIn,status} = useContext(AuthContext);
    

    const handleChange = (e) =>{
        if(e.target.id === 'email'){
            setEmail(e.target.value);
        }else{
            setPassword(e.target.value);
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        signIn(email,password);
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h4 className="grey-text text-darken-3">Sign In</h4>
                <br />
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={email} onChange={handleChange} />
                </div> 

                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={handleChange} />
                </div>

                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Login</button>
                </div>
                <div>
                    {status? <p>{status}</p> : 'signed in'}
                </div>
            </form>
        </div>
    );
};

export default SignIn;