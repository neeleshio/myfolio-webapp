import React from 'react'
import { Topbar } from './Components'
import Modal from '../../components/Modal'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const StyledMainLayout = styled.div`
    background-color: ${(props) => props.theme.layoutBg};
    height: 100vh;

    main {
        background-color: ${(props) => props.theme.layoutBg};
    }
`

const MainLayout = ({ children }) => {
    // const modalState = useSelector((state: any) => state.modal)

    return (
        <>
            <StyledMainLayout>
                {/* {(modalState["open"] && sessionStorage.getItem("closed") !== "true") && <Modal />} */}

                <Topbar />

                <main>
                    <div className="navbar-bg"></div>
                    {children}
                </main>
            </StyledMainLayout>
        </>
    )
}

export default MainLayout
