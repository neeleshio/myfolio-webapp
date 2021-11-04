import React from 'react'
import './ModalStyles.scss';
import { handleOpenModal } from '../../redux/Modal/ModalReducer';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { ErrorRounded } from '@mui/icons-material';
import { NearbyErrorIcon } from './CustomIcons'
import _ from 'lodash';

function Modal(props: any) {
    const dispatch = useDispatch()
    const state = useSelector((state: any) => state.modal)

    return (
        <div id="modal" data-keyboard="false" data-backdrop="static">
            <div className="modal_wrapper">
                <div className="modal_header">
                    <h2>{state?.["title"]}</h2>
                    <i><NearbyErrorIcon /></i>
                </div>
                <hr />
                <div className="modal_body">
                    <h3>{state?.["message"]}</h3>
                    {!_.isEmpty(state?.["fix"]) && (
                        <div className="modal_troubleshoot">
                            <div>
                                <i><ErrorRounded /></i>
                                <h4>{state?.["fix"]?.["title"]}</h4>
                            </div>

                            <ol>
                                {state?.["fix"]?.["steps"].map((el: string) => (
                                    <li>{el}</li>
                                ))}
                            </ol>
                        </div>
                    )}
                </div>
                <div className="modal_footer">
                    <p>Report</p>
                    <NavLink to={state?.["buttonLink"]}>
                        <button
                            onClick={(event: React.MouseEvent<HTMLElement>) => {
                                dispatch(handleOpenModal({ open: false }))
                            }}
                        >{state?.["buttonName"]}</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Modal
