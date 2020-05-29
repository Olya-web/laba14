import React, { useState } from 'react';
import { API } from './helpers/API';

export const Register = () => {
    const [registerForm, setRegisterForm] = useState({
        name: '',
        password: '',
    });
    const [repeatPassword, setRepeatPassword] = useState('');
    const handleChange = (field, text) => {
        setRegisterForm({ ...registerForm, [field]: text });
    };

    const validateField = (field) => {
        const regexp = /^[a-z0-9]+$/i;
        if (field.length < 6) return false;
        if (!regexp.test(field)) return false;
        else return true;
    };

    const validateFields = () => {
        if (
            validateField(repeatPassword) &&
            validateField(registerForm.name) &&
            validateField(registerForm.password)
        )
            return true;
        else return false;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateFields()) {
            if (repeatPassword !== registerForm.password) {
                alert('Пароли не совпадают');
            } else {
                const r = await API.post('auth/signup', registerForm);
                if (r.data) alert('Пользователь создан');
                else alert('Произошла ошибка');
                setRegisterForm({ name: '', password: '' });
                setRepeatPassword('');
            }
        } else alert('Только латинские буквы и цифры, мин длина 6 символов');
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <h3>Register</h3>
            <input
                type="text"
                placeholder="username"
                value={registerForm.name}
                onChange={(e) => handleChange('name', e.target.value)}
            />
            <input
                type="text"
                placeholder="password"
                value={registerForm.password}
                onChange={(e) => handleChange('password', e.target.value)}
            />
            <input
                type="text"
                placeholder="repeat password"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
            />
            <button type="submit">submit</button>
        </form>
    );
};
