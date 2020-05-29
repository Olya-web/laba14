import React, { useState, useContext } from 'react';
import { API } from './helpers/API';
import { AuthContext } from './helpers/auth.context';

export const Account = () => {
    const { user, logout } = useContext(AuthContext);
    const [changePasswordForm, setChangePasswordForm] = useState({
        oldPassword: '',
        newPassword: '',
    });
    const [repeatPassword, setRepeatPassword] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (changePasswordForm.newPassword !== repeatPassword) {
            alert('новые пароли должны совпадать');
            return;
        }

        const r = await API.put(`auth/password/${user.id}`, changePasswordForm);
        if (r.data.result) alert('Пароль успешно изменён');
        else alert('Старый пароль не подходит');
    };

    const deleteAccount = async () => {
        console.log('Cigan-log: deleteAccount -> user.id', user.id);
        const r = await API.delete(`auth/${user.id}`);
        console.log('Cigan-log: deleteAccount -> r', r);
        if (r.data.result) {
            alert('Ваш аккаунт был удалён');
            logout();
        } else {
            alert('Произошла ошибка');
        }
    };

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h3>LK, Приветствуем Вас: {user.username}</h3>
                <input
                    type="text"
                    placeholder="old password"
                    value={changePasswordForm.oldPassword}
                    onChange={(e) =>
                        setChangePasswordForm({
                            ...changePasswordForm,
                            oldPassword: e.target.value,
                        })
                    }
                />
                <input
                    type="text"
                    placeholder="new password"
                    value={changePasswordForm.newPassword}
                    onChange={(e) =>
                        setChangePasswordForm({
                            ...changePasswordForm,
                            newPassword: e.target.value,
                        })
                    }
                />
                <input
                    type="text"
                    placeholder="repeat new password"
                    value={repeatPassword}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                />
                <button type="submit">submit</button>
            </form>
            <button onClick={(e) => deleteAccount()}>remove account</button>
            <button onClick={(e) => logout()}>Logout</button>
        </div>
    );
};
