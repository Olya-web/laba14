import React, { useState, useContext } from 'react';
import { API } from './helpers/API';
import { AuthContext } from './helpers/auth.context';

export const Account = () => {
    const { userName } = useContext(AuthContext);
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

        const r = await API.post('auth/changepassword', changePasswordForm);
        console.log('Cigan-log: handleSubmit -> r', r.data);
    };

    const deleteAccount = async () => {
        const r = await API.delete(`auth/${userName}`);
        console.log('Cigan-log: deleteAccount -> r', r.data);
    };

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h3>LK</h3>
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
        </div>
    );
};
