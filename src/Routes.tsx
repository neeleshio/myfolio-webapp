import React from 'react'
import { Switch } from 'react-router-dom'
import { ProtectedRoute, PublicRoute } from './utils'
import { Home } from './layouts'
import { Homepage } from './views'

function Routes() {
    return (
        <Switch>
            <ProtectedRoute
                path="/"
                component={Homepage}
                layout={Home}
                exact
            />
        </Switch>
    )
}

export default Routes
