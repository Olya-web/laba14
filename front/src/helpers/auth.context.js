import { createContext } from 'react';

function noop() {}

export const AuthContext = createContext({
    userName: '',
    isAuth: false,
    login: noop(),
    logout: noop(),
});
