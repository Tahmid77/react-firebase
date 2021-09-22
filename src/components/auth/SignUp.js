import React, { useState } from 'react';

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [FName, setFName] = useState('');
    const [LName, setLName] = useState('');

    const handleChange = (e) =>{
        if(e.target.id === 'email'){
            setEmail(e.target.value);
        }else if(e.target.id === 'password'){
            setPassword(e.target.value);
        }else if(e.target.id === 'lastname'){
            setLName(e.target.value);
        }else{
            setFName(e.target.value);
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
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
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" id="firstname" value={FName} onChange={handleChange} />
                </div>

                <div className="input-field">
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" id="lastname" value={LName} onChange={handleChange} />
                </div>

                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Login</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;