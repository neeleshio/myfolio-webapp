import React, { useEffect, useState } from 'react'
import { accomplishLists } from './AccomplishLists'
import './AccomplishmentsStyles.scss'

function Accomplishments() {
    const [counter, setCounter] = useState(0)

    const time: number = 5000;
    const delay: number = time * 0.25 / 100

    useEffect(() => {
        start()
    }, [counter])

    const start = (): void => {
        if (counter <= 100) {
            setTimeout(() => {
                setCounter(counter + 0.25)
            }, delay);
        }
    }

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
