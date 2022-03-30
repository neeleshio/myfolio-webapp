import React from 'react'
import { Topbar } from './Components'
import Modal from '../../components/Modal'
import { useSelector } from 'react-redux'

const MainLayout: React.FC<React.ReactNode> = ({ children }) => {
    // const modalState = useSelector((state: any) => state.modal)

    return (
        <>
            <div id="mainLayout">
                {/* {(modalState["open"] && sessionStorage.getItem("closed") !== "true") && <Modal />} */}

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
