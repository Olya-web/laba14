import React from 'react';
import './App.css';
import { Register } from './register';
import { AuthContext } from './helpers/auth.context';
import { useAuth } from './helpers/auth.hook';
import { Account } from './lk';
import { SendUpMoney } from './sendUpMoney';
import { Login } from './login';
import { Admin } from './admin';

function App() {
    const { userName, isAuth, login, logout } = useAuth();
    return (
        <AuthContext.Provider value={{ userName, isAuth, login, logout }}>
            <div>
                <Admin />
                <SendUpMoney />
                <Login />
                <Account />
                <Register />
            </div>
        </AuthContext.Provider>
    );
}

export default App;
