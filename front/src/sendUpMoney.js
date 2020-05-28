import React, { useState } from 'react';
import { API } from './helpers/API';

export const SendUpMoney = () => {
    const [sendForm, setSendForm] = useState({ reciever: '', cost: '' });
    const handleSubmit = async (e) => {
        e.preventDefault();
        const r = await API.post('send', sendForm);
        console.log('Cigan-log: handleSubmit -> r', r);
    };
    return (
        <div>
            <h3>username</h3>
            <h4>Your balance is: {'400'}</h4>
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
