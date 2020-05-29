import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import { Register } from './register';
import { AuthContext } from './helpers/auth.context';
import { useAuth } from './helpers/auth.hook';
import { Account } from './lk';
import { SendUpMoney } from './sendUpMoney';
import { Login } from './login';
import { Admin } from './admin';

function App() {
    const { user, isAuth, login, logout, changeBalance } = useAuth();
    return (
        <AuthContext.Provider
            value={{ user, isAuth, login, logout, changeBalance }}
        >
            <Router>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/lk">lk</Link>
                    <Link to="/admin">admin</Link>
                </nav>
                <Switch>
                    <div>
                        <Route path="/" exact>
                            {isAuth ? <SendUpMoney /> : <Login />}
                        </Route>

                        <Route path="/login">
                            {isAuth ? <SendUpMoney /> : <Login />}
                        </Route>
                        <Route path="/admin">
                            {isAuth ? <Admin /> : <Login />}
                        </Route>
                        <Route path="/lk">
                            {isAuth ? <Account /> : <Login />}
                        </Route>

                        <Route path="/register">
                            <Register />
                        </Route>
                    </div>
                </Switch>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;
