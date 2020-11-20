import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AldeiasIndex from './pages/AldeiasIndex'
import AldeiasUpdate from './pages/AldeiasUpdate'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={AldeiasIndex} />
                <Route path="/teste/:id" exact component={AldeiasUpdate} />
                <Route path="/guerras" exact component={AldeiasIndex} />
            </Switch>
        </BrowserRouter>
    );
}