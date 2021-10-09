import React from 'react'
import { Switch, BrowserRouter } from 'react-router-dom'
import { PublicRoute } from './utils'
import { MainLayout } from './layouts'
import { Portfolio, Journal } from './views'

function Routes() {
    return (
        <BrowserRouter>
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
        </BrowserRouter>
    )
}

export default Routes
