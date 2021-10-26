import React from 'react'
import { Accomplishments, Hero, LangsAndTools, WorkHistory } from './Components'
import './PortfolioStyles.scss'
// import Highlight from 'react-highlight'

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
                    {/* <Highlight data-language={"javascript"}>
                        {`function foo() { return 'bar' }`}
                    </Highlight> */}
                </div>
            </div>
        </div>
    )
}

export default Portfolio
