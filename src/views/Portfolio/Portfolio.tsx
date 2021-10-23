import React from 'react'
import { Accomplishments, Hero, LangsAndTools, WorkHistory } from './Components'
import './PortfolioStyles.scss'

function Portfolio() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;

    return (
        <div id="portfolio">
            <Hero />
            <div className="grid-container">
                <div className="grid-item">
                    <LangsAndTools />

                    <WorkHistory />
                </div>
                <div className="grid-item">
                    <Accomplishments />

                    {/* <Accomplishments /> */}
                </div>
            </div>
        </div>
    )
}

export default Portfolio
