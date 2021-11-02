import React, { useEffect, useState } from 'react'
import { accomplishLists } from '../Accomplishments/AccomplishLists'
import './FeaturedStyles.scss'

function Featured() {
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
        <div id="featured">
            <div className="container">
                <h2>Featured ★</h2>
                <div className="card-container">

                </div>
            </div>
        </div>
    )
}

export default Featured
