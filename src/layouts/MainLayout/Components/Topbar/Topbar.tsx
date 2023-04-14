import React from 'react'
import { links } from './data'
import { IoMdNotificationsOutline, IoIosMoon } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import { FaSun } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import './TopbarStyles.scss'
import logo from './main-logo.svg'
import { useDispatch, useSelector } from 'react-redux';
import { handleToggleTheme } from '../../../../redux/Topbar/TopbarReducer';

function Topbar() {
    const dispatch = useDispatch()
    const state = useSelector((state: any) => state.topbar)

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
                        <button onClick={(event: React.MouseEvent<HTMLElement>) => dispatch(handleToggleTheme())}>
                            {state.darkTheme ? <FaSun /> : <MdDarkMode/>}
                        </button>
                        <NavLink to="/journal/new-article">
                            <button className="write_btn">
                                Write
                            </button>
                        </NavLink>
                        {/* <button>
                            <IoMdNotificationsOutline />
                        </button> */}
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
