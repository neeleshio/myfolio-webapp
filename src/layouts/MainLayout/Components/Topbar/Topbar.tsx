import React from 'react'
import { links } from './Links'
import { IoMoonSharp } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";

function Topbar() {
    return (
        <div id="topbar">
            <div className="topbar-container">
                <div className="section-title">
                    <h1>DEV.</h1>
                </div>
                <div className="topbar_right">
                    <div className="social-links">
                        <ul>
                            {Object.values(links).map((el, index) => (
                                <li key={index}>
                                    <a href={el.url}>
                                        {el.icon}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="extra-buttons">
                        <button>
                            <IoMoonSharp />
                        </button>
                        <button>
                            <IoMdNotificationsOutline />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
