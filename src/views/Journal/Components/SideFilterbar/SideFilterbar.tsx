import React from 'react'
import { topics } from './Topics'
import './SideFilterbarStyles.scss'

function SideFilterbar() {
    return (
        <div id="sideFilterbar">
            <div>
                <h3>DISCOVER MORE</h3>
                <div>
                    {Object.values(topics).map(el => (
                        <button type="button">{el["title"]}</button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SideFilterbar
