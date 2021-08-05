import React from 'react'
import { Route } from 'react-router-dom'

type Props = {
    path: string,
    component: React.ComponentType<any>,
    layout: React.ComponentType<any>,
    exact: boolean
}

const ProtectedRoute: React.FC<Props> = (props) => {
    const { component: Component, layout: Layout, ...rest } = props

    return (
        <Route
            {...rest}
            render={(matchProps) => (
                <Layout>
                    <Component {...matchProps} />
                </Layout>
            )}
        />
    )
}

export default ProtectedRoute;
