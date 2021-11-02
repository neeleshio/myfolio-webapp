import React, { useEffect, useState } from 'react'
import { accomplishLists } from './AccomplishLists'
import './AccomplishmentsStyles.scss'

function Accomplishments() {
    const [counter, setCounter] = useState(0)
    const [card, setCard] = useState(0)
    const [items, setItems] = useState([])
    const [cardExit, setCardExit] = useState(false)

    const time: number = 5000;
    const delay: number = time * 0.25 / 100

    useEffect(() => {
        start()
    }, [counter])


    // useEffect(() => {
    //     setCardExit(false)
    // }, [cardExit])

    useEffect(() => {
        setCard(0)
    }, [card === Object.values(accomplishLists).length - 1])

    const start = (): void => {
        if (counter < 100) {
            setTimeout(() => {
                setCounter(counter + 0.25)
            }, delay);
        } else if (counter === 100) {
            currentCard()
            setCounter(0)
        }
    }

    const currentCard = () => {
        setCardExit(true)
        setCard(card + 1)
    }

    return (
        <div id="accomplishments">
            <div className="container">
                <h2>Facts about Me</h2>
                <div className="card-container">
                    <div className={cardExit ? "card first_card" : "card"}>
                        <div>
                            <h3>{accomplishLists?.[card]?.['title']}</h3>
                        </div>
                        <span
                            style={{ width: `${100 - counter}%` }}
                        ></span>
                    </div>
                    <div className="card">
                        <div>
                            <h3>{accomplishLists?.[card + 1]?.['title']}</h3>
                        </div>
                        <span
                            style={{ width: `${100}%` }}
                        ></span>
                    </div>
                    <div className="card">
                        <div>
                            <h3>{accomplishLists?.[card + 2]?.['title']}</h3>
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
