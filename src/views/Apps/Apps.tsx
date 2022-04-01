import React from 'react'
import './AppsStyles.scss'
import { appsList} from './data'

function Apps() {
    return (
        <div id="apps">
            <div>
                <div>
                    {
appsList.map((el, idx) => (
    <div>
        <span>{el?.title}</span>
    </div>
))
                    }
                </div>
            </div>
        </div>
    )
}

export default Apps
