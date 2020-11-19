import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AldeiasIndex from './pages/AldeiasIndex'
import AldeiasUpdate from './pages/AldeiasUpdate'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={AldeiasIndex} />
                <Route path="/teste/:id" exact component={AldeiasUpdate} />
                {/* <Route path="/app" component={} />
                <Route path="/orphanages/create" component={} />
                <Route path="/orphanages/:id" component={} />  */}
            </Switch>

        </BrowserRouter>
    );


}
export default Routes