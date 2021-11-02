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
                    <div className="wrapper">
                        <h3>New Article: Javscript Array and Linked List and DSA for dumminies and for non-beginners</h3>
                        <button>Check out</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured
