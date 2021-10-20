import React from 'react'
import { Topbar } from './Components'

const MainLayout: React.FC<React.ReactNode> = ({ children }) => {
    return (
        <div id="mainLayout">
            <Topbar />
            <main>
                <div className="navbar-bg"></div>
                {children}
            </main>
        </div>

    )
}

export default MainLayout
