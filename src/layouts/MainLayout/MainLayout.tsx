import React from 'react'
import '../../styles/Layouts.scss'
import { Sidebar, Topbar } from './Components'

const MainLayout: React.FC<React.ReactNode> = ({ children }) => {
    return (
        <div id="mainLayout">
            {/* <Sidebar /> */}
            <main>
                <Topbar />
                {children}
            </main>
        </div>

    )
}

export default MainLayout
