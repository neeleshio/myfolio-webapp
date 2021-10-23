import React from 'react'
import './ModalStyles.scss';
import { handleOpenModal } from '../../redux/Modal/ModalReducer';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { ErrorRounded } from '@mui/icons-material';
import { WarningIcon, CheckCircleIcon, NearbyErrorIcon } from './CustomIcons'

function Modal(props: any) {
    const dispatch = useDispatch()
    const state = useSelector((state: any) => state.modal)

    return (
        <div id="modal" data-keyboard="false" data-backdrop="static">
            <div className="modal_wrapper">
                <div className="modal_header">
                    <h2>Something went wrong</h2>
                    <i><NearbyErrorIcon /></i>
                </div>
                <hr />
                <div className="modal_body">
                    <h3>Something went wrong and we were unable to fix.</h3>
                    <div className="modal_troubleshoot">
                        <div>
                            <i><ErrorRounded /></i>
                            <h4>How to fix this error:</h4>
                        </div>

                        <ol>
                            <li>1. Open the creative cloud desktop app to install XD.</li>
                            <li>2. If that does not work, quit the installer and launch it again to retry.</li>
                        </ol>
                    </div>
                </div>
                <div className="modal_footer">
                    <p>Report</p>
                    <NavLink to="/">
                        <button
                            onClick={(event: React.MouseEvent<HTMLElement>) => {
                                dispatch(handleOpenModal({ value: false }))
                            }}
                        >{state.button}</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Modal
