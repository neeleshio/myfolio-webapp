import React from 'react'
import { links } from './Links'
import { IoMdNotificationsOutline, IoIosMoon } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import './TopbarStyles.scss'

function Topbar() {
    return (
        <div id="topbar">
            <div className="topbar-container">
                <div className="logo">
                    <button className="btn-1"></button>
                    <button className="btn-2"></button>
                    <button className="btn-3"></button>
                </div>
                {/* <div>
                    <input />
                </div> */}
                <div className="topbar_right">
                    <div className="nav-links">
                        <ul>
                            {Object.values(links).map((link, index) => (
                                <li key={index}>
                                    <NavLink activeClassName='is-active' exact={link.path === "/" && true} to={link.path}>
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="extra-buttons">
                        <NavLink to="/journal/new-article">
                            <button className="write_btn">
                                Write
                            </button>
                        </NavLink>
                        <button>
                            <IoIosMoon />
                        </button>
                        <button>
                            <IoMdNotificationsOutline />
                        </button>
                    </div>
                </div>
            </div>
            <div className="topbar-mini">
                <ul>
                    {Object.values(links).map((link, index) => (
                        <li key={index}>
                            <a href={link.path}>
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Topbar
