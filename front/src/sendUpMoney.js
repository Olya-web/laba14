import React, { useState, useContext } from 'react';
import { API } from './helpers/API';
import { AuthContext } from './helpers/auth.context';

export const SendUpMoney = () => {
    const { user, changeBalance } = useContext(AuthContext);
    const [sendForm, setSendForm] = useState({ reciever: '', cost: '' });
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Cigan-log: handleSubmit -> sendForm.cost', sendForm.cost);
        console.log(
            'Cigan-log: handleSubmit -> +sendForm.cost < +user.balance && +sendForm.cost > 0',
            +sendForm.cost < +user.balance && +sendForm.cost > 0
        );
        if (+sendForm.cost > +user.balance || +sendForm.cost < 0) {
            alert('Недостаточно денег');
            return;
        }
        const r = await API.put(`money/send/${user.id}`, sendForm);
        if (r.data.result) {
            changeBalance(r.data.balance);
            alert('Success');
        } else {
            alert('Такого юзера не существует');
        }
    };
    return (
        <div>
            <h3>Your name: {user.username}</h3>
            <h4>Your balance is: {user.balance}</h4>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="text"
                    placeholder="For whom we will send the money?"
                    value={sendForm.reciever}
                    onChange={(e) =>
                        setSendForm({ ...sendForm, reciever: e.target.value })
                    }
                />
                <input
                    type="number"
                    placeholder="how much we will send?"
                    value={sendForm.cost}
                    onChange={(e) =>
                        setSendForm({ ...sendForm, cost: e.target.value })
                    }
                />
                <button type="submit">Send money</button>
            </form>
        </div>
    );
};
