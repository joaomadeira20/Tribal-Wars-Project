import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AldeiasIndex from './pages/AldeiasIndex'


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={AldeiasIndex} />
                {/* <Route path="/app" component={} />
                <Route path="/orphanages/create" component={} />
                <Route path="/orphanages/:id" component={} />  */}
            </Switch>

        </BrowserRouter>
    );


}
export default Routes