import { Clear } from '@mui/icons-material'
import React, { useState } from 'react'
import './AlertbarStyles.scss'
import { handleClose } from '../../../../redux/Topbar/TopbarReducer'
import { useDispatch } from 'react-redux'

function Alertbar() {
    const dispatch = useDispatch()

    return (
        <div id="alertbar">
            <div className="container">
                <h4>This site is still in development. So not all the features are available yet.</h4>
                <button onClick={(event: React.MouseEvent<HTMLElement>) => dispatch(handleClose())}>
                    <Clear />
                </button>
            </div>
        </div>
    )
}

export default Alertbar
