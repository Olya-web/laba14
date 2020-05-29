import { createContext } from 'react';

function noop() {}

export const AuthContext = createContext({
    user: { id: '', name: '' },
    isAuth: false,
    login: noop(),
    logout: noop(),
    changeBalance: noop(),
});
