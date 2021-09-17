import React from 'react'
import { links } from './Links'
import { IoMoonSharp } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";

function Topbar() {
    return (
        <div id="topbar">
            <div className="topbar-container">
                <div className="logo">
                    <h1>PORTFOLIO</h1>
                </div>
                <div className="topbar_right">
                    <div className="nav-links">
                        <ul>
                            {Object.values(links).map((el, index) => (
                                <li key={index}>
                                    <a href={el.path}>
                                        {el.name}
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
            <div className="topbar-mini">
                <ul>
                    {Object.values(links).map((el, index) => (
                        <li key={index}>
                            <a href={el.path}>
                                {el.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Topbar
