import React, { useState } from 'react';

const AuthForm = ({ onSubmit, errors }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();
        onSubmit({email, password});
    }

    return (
        <div className="row">
            <form onSubmit={onFormSubmit} className="col s4">
                <div className="input-field">
                    <input 
                        placeholder="Email"
                        value={email} 
                        onChange={e => setEmail(e.target.value)}
                        />
                </div>
                <div className="input-field">
                    <input 
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>

                {errors && errors.map((err) => <div className="errors" key={err}>{err}</div>)}

                <button className="btn">Submit</button>
            </form>
        </div>
    );
}

export default AuthForm;