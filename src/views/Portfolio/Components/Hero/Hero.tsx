import React, { useState, useEffect } from 'react'
import { links } from './Social'

const tagList = [
    "I'm a Frontend Development Engineer",
    "Other than Coding I like Stock market",
    "Passionate but not obsessed"
]

function Hero() {
    const [tag, setTag] = useState("I'm a Frontend Development Engineer")

    let count = -1

    useEffect(() => {
        changeTag()
    }, [])

    const changeTag = () => {
        // if (count < tagList.length) {
        //     count = count + 1
        //     setTag(tagList[count])
        //     setTimeout(() => {
        //         changeTag()
        //     }, 3000)
        // } else {
        //     count = -1
        //     setTimeout(() => {
        //         changeTag()
        //     }, 3000)
        // }
    }

    return (
        <div id="hero">
            <div className="hero-container">
                <div className="intro">
                    <h2>Helloo👋 &nbsp;I Am Neelesh</h2>
                    <h3>{tag}</h3>
                </div>
                {/* <div className="coder-img"> */}
                <img className="coder-img" src="./images/coder2.svg" alt="coder" />
                {/* </div> */}
                <div className="expirience">
                    <div className="expirience_numbers">
                        <h4>Expirience</h4>
                        <div>
                            <h3>1<span>Y</span></h3>
                            <h3>2<span>M</span></h3>
                        </div>
                    </div>
                </div>
                <div className="social-links">
                    {/* <h4>Lets connect..</h4> */}
                    <ul className="social-container">
                        {Object.values(links).map((el, index) => (
                            <div key={index} className="card">
                                <img src={el.icon} alt={el.title} />
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Hero
