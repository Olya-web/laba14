import React, { useState, useContext } from 'react';
import { API } from './helpers/API';
import { AuthContext } from './helpers/auth.context';

export const Login = () => {
    const [loginForm, setLoginForm] = useState({
        name: '',
        password: '',
    });

    const { user, login } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const r = await API.post('auth/signin', loginForm);
        console.log('Cigan-log: handleSubmit -> r', r.data);
        if (r.data.result) {
            login(r.data.user);
            alert('Success');
        } else alert('Invalid credentials');
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <h3>Login</h3>
            <input
                type="text"
                placeholder="username"
                value={loginForm.name}
                onChange={(e) =>
                    setLoginForm({ ...loginForm, name: e.target.value })
                }
            />
            <input
                type="text"
                placeholder="password"
                value={loginForm.password}
                onChange={(e) =>
                    setLoginForm({ ...loginForm, password: e.target.value })
                }
            />
            <button type="submit">login</button>
        </form>
    );
};
