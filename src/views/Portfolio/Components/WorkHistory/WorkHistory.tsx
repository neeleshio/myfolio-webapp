import React, { useState, useEffect } from 'react'
import { companies } from './Companies'
import CardFlip from 'react-card-flip';

function WorkHistory() {
    const [state, setState] = useState<any>({})

    useEffect(() => {
        let obj: any = {}

        Object.values(companies).map((el, index) => {
            obj[`card${index}`] = true
        })

        setState(obj)
    }, [])

    const handleCardFlip: Function = (index: string): void => {
        setState((prevState: { [x: string]: any; }) => ({
            ...prevState,
            [index]: !prevState[index]
        }))
    }

    return (
        <div id="workHistory">
            <div className="container">
                <h2>Work History (Recent 3)</h2>
                <div className="card-container">
                    {Object.values(companies).map((el, index: number) => (
                        <CardFlip isFlipped={state?.[`card${index}`]} flipDirection="horizontal">
                            <div
                                key={index}
                                className={`card card${index + 1} card-back`}
                                onClick={() => handleCardFlip(`card${index}`)}
                            >
                                <h2>My Role</h2>
                                <p>{el.aboutRole}</p>
                            </div>
                            <div
                                key={index}
                                className={`card card${index + 1} card-front`}
                                onClick={() => handleCardFlip(`card${index}`)}
                            >
                                <div className="details-container">
                                    <h3>{el.designation.split(" ")[0]}</h3>
                                    <h3>{el.designation.split(" ")[1]}</h3>
                                    <h4>{el.timeline}</h4>
                                </div>
                                <div className="logo-container">
                                    <img alt={el.name} src={el.logo} />
                                    <h4>{el.name}</h4>
                                </div>
                            </div>
                        </CardFlip>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WorkHistory
