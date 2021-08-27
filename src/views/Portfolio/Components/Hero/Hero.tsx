import React from 'react'

function Hero() {
    return (
        <div id="hero">
            <div className="hero-container">
                <div className="intro">
                    <h2>Hellooo! &nbsp;I Am Neelesh.</h2>
                    <h3>I'm a Frontend Development Engineer.</h3>
                </div>
                <div className="coder-img">
                    <img src="./images/coder.svg" alt="coder" height="144px" />
                </div>
                <div className="expirience">
                    <h4>Total Expirience</h4>
                    <div className="expirience_numbers">
                        <h3>1<span>Y</span></h3>
                        <h3>2<span>M</span></h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
