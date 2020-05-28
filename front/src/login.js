import React, { useState } from 'react';
import { API } from './helpers/API';

export const Login = () => {
    const [loginForm, setLoginForm] = useState({
        name: '',
        password: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const r = await API.post('auth/signin/', loginForm);
        console.log('Cigan-log: handleSubmit -> r', r);
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
        </form>
    );
};
