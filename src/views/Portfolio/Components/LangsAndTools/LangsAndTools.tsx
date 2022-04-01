import React, { useState } from 'react'
import { languages } from './data'
import './LangsAndToolsStyles.scss'

function LangsAndTools() {
    const [activeButton, setActiveButton] = useState("Main")

    return (
        <div id="langsAndTools">
            <div className="techsAndTools-container">
                <div className="heading-container">
                    <h2>Languages & Tools</h2>
                    {/* <div className="filter">
                        <button
                            className={activeButton === "Main" ? "active" : "filter-btn"}
                            onClick={e => setActiveButton("Main")}
                        >
                            Main
                        </button>
                        <button
                            className={activeButton === "Others" ? "active" : "filter-btn"}
                            onClick={e => setActiveButton("Others")}
                        >
                            Others
                        </button>
                    </div> */}
                </div>
                <div className="skills-container">
                    {Object.values(languages).map((el, index) => (
                        <div key={index} className="card">
                            <img src={el.icon} alt={el.title} />
                            <p>{el.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LangsAndTools
