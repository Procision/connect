import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import { Provider as BumbagProvider } from 'bumbag';
import './App.css';
import Login from './pages/Login';

function App() {
    return (
        <BumbagProvider>
            <Router>
                <Switch>
                    <Route path="/login/" component={Login} />
                </Switch>
            </Router>
        </BumbagProvider>

    );
}

export default App;
