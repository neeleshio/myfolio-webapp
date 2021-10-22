import React from 'react'
import { Topbar } from './Components'
import Modal from '../../components/Modal'

const MainLayout: React.FC<React.ReactNode> = ({ children }) => {
    return (
        <div id="mainLayout">
            <Modal />
            <Topbar />
            <main>
                <div className="navbar-bg"></div>
                {children}
            </main>
        </div>

    )
}

export default MainLayout
