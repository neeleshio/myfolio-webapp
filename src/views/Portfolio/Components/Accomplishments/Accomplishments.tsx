import React, { useEffect, useState } from 'react'
import { accomplishLists } from './AccomplishLists'
import './AccomplishmentsStyles.scss'

function Accomplishments() {
    const width: string = "55"

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        if (counter < 400) {
            setTimeout(() => {
                setCounter(counter + 0.25)
            }, 12.5);
        }
    }, [counter])

    return (
        <div id="accomplishments">
            <div className="container">
                <h2>Accomplishments</h2>
                <div className="card-container">
                    {Object.values(accomplishLists).map((list, index) => (
                        <div className="card">
                            <div>
                                <h3>{list["title"]}</h3>
                            </div>
                            <span
                                style={{ width: `${100 - counter}%` }}
                            ></span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Accomplishments
