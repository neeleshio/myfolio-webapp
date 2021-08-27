import React from 'react'
import { Accomplishments, Hero, LangsAndTools, WorkHistory } from './Components'
import '../../styles/Portfolio.scss'

function Portfolio() {
    return (
        <div id="portfolio">
            <Hero />
            <div className="grid-container">
                <div className="grid-item">
                    <LangsAndTools />

                    <WorkHistory />
                    <WorkHistory />
                </div>
                <div className="grid-item">
                    <Accomplishments />
                </div>
            </div>
        </div>
    )
}

export default Portfolio
