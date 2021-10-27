import React from 'react'
import { Topbar } from './Components'
import Modal from '../../components/Modal'
import { useSelector } from 'react-redux'
import { Ellipsis } from '../../components/Loaders/Ellipsis'

const MainLayout: React.FC<React.ReactNode> = ({ children }) => {
    const state = useSelector((state: any) => state.modal)

    return (
        <div id="mainLayout">
            {
                state["open"] && <Modal />
            }

            {/* <Ellipsis /> */}

            <Topbar />
            <main>
                <div className="navbar-bg"></div>
                {children}
            </main>
        </div>

    )
}

export default MainLayout
