import React from 'react'
import { Alertbar, Topbar } from './Components'
import Modal from '../../components/Modal'
import { useSelector } from 'react-redux'

const MainLayout: React.FC<React.ReactNode> = ({ children }) => {
    const modalState = useSelector((state: any) => state.modal)
    const topbarState = useSelector((state: any) => state.topbar)

    return (
        <>
            <div id="mainLayout">
                {modalState["open"] && <Modal />}

                <Topbar />

                <main>
                    <div className="navbar-bg"></div>
                    {children}
                </main>
            </div>
        </>
    )
}

export default MainLayout
