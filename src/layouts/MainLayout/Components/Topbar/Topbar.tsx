import React from 'react'
import { links } from './data'
import { IoMdNotificationsOutline, IoIosMoon } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import './TopbarStyles.scss'
import logo from './main-logo.svg'

function Topbar() {
    return (
        <div id="topbar">
            <div className="topbar-container">
                <NavLink className="logo" to={'/'}>
                    <img src={logo} alt='logo'/>
                </NavLink>
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
                            <NavLink activeClassName='is-active' exact={link.path === "/" && true} to={link.path}>
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Topbar
