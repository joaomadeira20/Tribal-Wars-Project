import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AldeiasIndex from './pages/AldeiasIndex';
import AldeiasUpdate from './pages/AldeiasUpdate';
import Geral from './pages/Geral';
import NavBar from './components/navbar';

export default function Routes() {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route path="/" exact component={AldeiasIndex} />
                <Route path="/teste/:id" exact component={AldeiasUpdate} />
                <Route path="/guerras" exact component={AldeiasIndex} />
                <Route path="/profile" exact component={AldeiasIndex} />
                <Route path="/geral" exact component={Geral} />
            </Switch>
        </BrowserRouter>
    );
}




