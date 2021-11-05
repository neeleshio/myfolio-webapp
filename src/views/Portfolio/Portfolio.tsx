import React, { useState, useEffect } from 'react'
import { Accomplishments, Featured, Hero, LangsAndTools, WorkHistory } from './Components'
import './PortfolioStyles.scss'
import { handleOpenModal } from '../../redux/Modal/ModalReducer'
import { useDispatch } from 'react-redux'
import Bowser from 'bowser'
import Axios from '../../axios'

function Portfolio() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(handleOpenModal({
            open: true,
            title: "Site under development",
            message: "Hi, this webapp is unoptimized as it is still in development. Only few features are available for public. Also you may experience some glitches & crashes, sorry for the inconvenience.",
            fix: {},
            reportLink: "https://hi.com",
            buttonName: "Ok",
            buttonLink: "/"
        }))

        handleUserAgent()
    }, [])

    const handleUserAgent = () => {
        fetch("https://api.ipify.org?format=json")
            .then((res) => res.json())
            .then((res) => {
                const userIp = res.ip
                const userBrowser = Bowser.parse(window.navigator.userAgent).browser;
                const userOS = Bowser.parse(window.navigator.userAgent).os;

                const body = {
                    ip: userIp,
                    os: userOS,
                    browser: userBrowser
                }

                Axios.post('/user-ag', body).then(res => {
                    // console.log(res)
                }).catch(err => {
                    // console.log(err)
                })
            });
    }

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
