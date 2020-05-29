import React, { useState, useEffect } from 'react';
import { API } from './helpers/API';

export const Admin = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const getUsers = (async () => {
            const r = await API.get('auth/users');
            console.log('Cigan-log: Admin -> r', r);
            setUsers(r.data);
        })();
    }, []);

    const changeBalance = async (id, balance) => {
        console.log('Cigan-log: changeBalance -> balance', balance);
        const r = await API.put(`money/${id}`, { balance });
        if (r.data) alert('Баланс обновлен');
    };

    return (
        <div>
            {users.map((item) => {
                return (
                    <div key={item.id}>
                        <p>{item.username}</p>
                        <input
                            type="text"
                            placeholder="setup balance"
                            value={item.balance}
                            onChange={(e) => {
                                const index = users.findIndex(
                                    (finded) => finded.id === item.id
                                );
                                users[index].balance = e.target.value;
                                return setUsers([...users]);
                            }}
                        />
                        <button
                            onClick={(e) =>
                                changeBalance(item.id, item.balance)
                            }
                        >
                            sumbit
                        </button>
                    </div>
                );
            })}
        </div>
    );
};
