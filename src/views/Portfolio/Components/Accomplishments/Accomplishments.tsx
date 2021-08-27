import React from 'react'
import { accomplishLists } from './AccomplishLists'

function Accomplishments() {
    return (
        <div id="accomplishments">
            <div className="container">
                <h2>Accomplishments</h2>
                <div className="card-container">
                    {Object.values(accomplishLists).map((list, index) => (
                        <div className="card">

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Accomplishments
