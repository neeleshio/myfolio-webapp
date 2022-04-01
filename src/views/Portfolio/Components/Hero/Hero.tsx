import React, { useState, useEffect } from 'react'
import { links } from './data'
import './HeroStyles.scss'
import CountUp from 'react-countup';

function Hero() {
    const [year, setYear] = useState(0)
    const [months, setMonths] = useState(0)

    useEffect(() => {
        handleTotalExpirience()
    }, [])

    const handleTotalExpirience = () => {
        const dateFrom = new Date(2020, 10)
        const dateTo = new Date()
        const internship = 6 //months

        let totalExp = dateTo.getMonth() - dateFrom.getMonth() +
            (12 * (dateTo.getFullYear() - dateFrom.getFullYear())) + internship

        setYear(Math.floor(totalExp / 12))
        setMonths(totalExp % 12)
    }

    return (
        <div id="hero">
            <div className="hero-container">
                <div className="intro">
                    <h2>Hey der! &nbsp;I Am Neelesh</h2>
                    <h3>I'm a Frontend Development Engineer</h3>
                </div>
                {/* <div className="coder-img"> */}
                <img className="coder-img" src="./images/coder2.svg" alt="coder" />
                {/* </div> */}
                <div className="expirience">
                    <div className="expirience_numbers">
                        <h4>Expirience</h4>
                        <div>
                            <h3>
                                <CountUp
                                    start={0}
                                    end={year}
                                    duration={1}
                                    className="exp_count"
                                />
                                <span>Y</span>
                            </h3>
                            <h3>
                                <CountUp
                                    start={0}
                                    end={months}
                                    duration={1}
                                    className="exp_count"
                                />
                                <span>M</span>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="social-links">
                    {/* <h4>Lets connect..</h4> */}
                    <ul className="social-container">
                        {Object.values(links).map((el, index) => (
                            <a href={el?.["href"]} target="_blank" rel="noreferrer">
                                <div key={index} className="card">
                                    <img src={el.icon} alt={el.title} />
                                </div>
                            </a>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Hero
