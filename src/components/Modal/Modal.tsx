import React from 'react'
import { Warning, ErrorRounded } from '@mui/icons-material';
import './ModalStyles.scss'

function Modal(): JSX.Element {
    return (
        <div id="modal" data-keyboard="false" data-backdrop="static">
            <div className="modal_wrapper">
                <div className="modal_header">
                    <h2>There was a problem installing XD.</h2>
                    <i><Warning /></i>
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
                    <button>Ok</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
