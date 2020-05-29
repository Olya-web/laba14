import { useState, useCallback } from 'react';

export const useAuth = () => {
    const [isAuth, setAuth] = useState(false);
    const [user, setUser] = useState({ id: '', name: '' });
    const login = useCallback((user) => {
        console.log('Cigan-log: login -> user', user);
        setAuth(true);
        setUser(user);
    }, []);
    const logout = useCallback(() => {
        setAuth(false);
        setUser({ id: '', name: '' });
    }, []);
    const changeBalance = useCallback((newBalance) => {
        setUser({ ...user, balance: newBalance });
    });
    return { user, isAuth, login, logout, changeBalance };
};
