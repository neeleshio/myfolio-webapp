import React, { useEffect, useState } from 'react'
import { accomplishLists } from './data'
import './AccomplishmentsStyles.scss'

function Accomplishments() {
    const [counter, setCounter] = useState(0)
    const [card, setCard] = useState(0)
    const [items, setItems] = useState([])

    const [one, setOne] = useState(0)
    const [two, setTwo] = useState(1)
    const [three, setThree] = useState(2)

    const time: number = 5000;
    const delay: number = time * 0.25 / 100

    useEffect(() => {
        start()
    }, [counter])

    useEffect(() => {
        setOne(card)
    }, [card])

    useEffect(() => {
        setTwo(one + 1)
    }, [one])

    useEffect(() => {
        setThree(two + 1)
    }, [two])

    useEffect(() => {
        setThree(0)
    }, [three === Object.values(accomplishLists).length])

    useEffect(() => {
        setTwo(0)
        setThree(1)
    }, [two === Object.values(accomplishLists).length])

    useEffect(() => {
        setOne(0)
        setTwo(1)
        setThree(2)
        setCard(0)
    }, [one === Object.values(accomplishLists).length])

    const start = (): void => {
        if (counter < 100) {
            setTimeout(() => {
                setCounter(counter + 0.25)
            }, delay);
        } else if (counter === 100) {
            setCard(card + 1)
            setCounter(0)
        }
    }

    return (
        <div id="accomplishments">
            <div className="container">
                <h2>Facts about Me</h2>
                <div className="card-container">
                    <div className="card">
                        <div>
                            <h3>{accomplishLists?.[one]?.['title']}</h3>
                        </div>
                        <span
                            style={{ width: `${100 - counter}%` }}
                        ></span>
                    </div>
                    <div className="card">
                        <div>
                            <h3>{accomplishLists?.[two]?.['title']}</h3>
                        </div>
                        <span
                            style={{ width: `${100}%` }}
                        ></span>
                    </div>
                    <div className="card">
                        <div>
                            <h3>{accomplishLists?.[three]?.['title']}</h3>
                        </div>
                        <span
                            style={{ width: `${100}%` }}
                        ></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accomplishments
