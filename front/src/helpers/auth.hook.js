import { useState, useCallback } from 'react';

export const useAuth = () => {
    const [isAuth, setAuth] = useState(false);
    const [userName, setUsername] = useState('');
    const login = useCallback((name) => {
        setAuth(true);
        setUsername(name);
    }, []);
    const logout = useCallback(() => {
        setAuth(false);
    }, []);
    return { userName, isAuth, login, logout };
};
