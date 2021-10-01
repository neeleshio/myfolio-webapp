import React from 'react'
import { Switch } from 'react-router-dom'
import { PublicRoute } from './utils'
import { MainLayout } from './layouts'
import { Portfolio, Journal } from './views'

function Routes() {
    return (
        <Switch>
            <PublicRoute
                path="/"
                layout={MainLayout}
                component={Portfolio}
                exact
            />
            <PublicRoute
                path="/journal"
                layout={MainLayout}
                component={Journal}
                exact
            />
        </Switch>
    )
}

export default Routes
