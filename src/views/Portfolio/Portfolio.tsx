import React, { useState, useEffect } from 'react'
import { Accomplishments, Featured, Hero, LangsAndTools, WorkHistory } from './Components'
import './PortfolioStyles.scss'
import { handleOpenModal } from '../../redux/Modal/ModalReducer'
import { useDispatch } from 'react-redux'

function Portfolio() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(handleOpenModal({
            open: true,
            title: "Site under development",
            message: "Hi, this webapp is unoptimised as it is still in development. Only few features are avialble to public. Also you may expirience glitches & crashes, sorry for the inconvinience.",
            fix: {},
            reportLink: "https://hi.com",
            buttonName: "Close",
            buttonLink: "/"
        }))
    }, [])

    return (
        <div id={"portfolio"}>
            <Hero />
            <div className="grid-container">
                <div className="grid-item">
                    <LangsAndTools />

                    <WorkHistory />
                </div>
                <div className="grid-item">
                    <Accomplishments />

                    {<Featured />}
                </div>
            </div>
        </div>
    )
}

export default Portfolio
