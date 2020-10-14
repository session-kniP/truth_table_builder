import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import {HomePage} from './pages/HomePage';
import {TruthTablePage} from './pages/TruthTablePage';
import {AboutPage} from './pages/AboutPage';

export const useRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/builder">
                    <TruthTablePage />
                </Route>
                <Route exact path="/about">
                    <AboutPage />
                </Route>
                <Redirect to="/" />
            </Switch>
        </Router>
    );
};
