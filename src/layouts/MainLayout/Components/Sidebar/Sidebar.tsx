import React, { useState } from 'react'
import { links } from './Links'

const Sidebar: React.FC<React.ReactNode> = () => {
    const [activeLink, setActiveLink] = useState("Home")

    return (
        <div id="sidebar">
            <div className="sidebar-container">
                <ul className="sidebar-lists">
                    {Object.values(links).map((el, index) => (
                        <li key={index} className={el.name === activeLink ? "active" : ""}>
                            <a
                                href={el.path}
                                onClick={e => setActiveLink(el.name)}
                            >{el.icon}{el.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
