import React from 'react'
import { Switch } from 'react-router-dom'
import { PublicRoute } from './utils'
import { MainLayout } from './layouts'
import { Portfolio } from './views'

function Routes() {
    return (
        <Switch>
            <PublicRoute
                path="/"
                layout={MainLayout}
                component={Portfolio}
                exact
            />
        </Switch>
    )
}

export default Routes
