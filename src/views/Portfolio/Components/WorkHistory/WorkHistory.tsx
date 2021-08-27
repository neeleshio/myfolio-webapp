import React from 'react'
import { companies } from './Companies'

function WorkHistory() {
    return (
        <div id="workHistory">
            <div className="container">
                <h2>Work History (Recent 3)</h2>
                <div className="card-container">

                    {Object.values(companies).map((el, index) => (
                        <div key={index} className={`card card${index + 1}`}>
                            <div className="details-container">
                                <h3>{el.designation.split(" ")[0]}</h3>
                                <h3>{el.designation.split(" ")[1]}</h3>
                                <h4>{el.timeline}</h4>
                            </div>
                            <div className="logo-container">
                                <img alt={el.name} src={el.logo} />
                                <h4>{el.name}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WorkHistory
