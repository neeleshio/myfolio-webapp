import { FaLinkedin, FaGithubSquare, FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Header = () => {
    return (
        <nav id="header">
            <div className="social_container">
                <a href="mailto:neeleshio@yandex.com" target="_blank" rel="noopener noreferrer">
                    <i><FiMail /></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <i><FaLinkedin /></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <i><FaGithubSquare /></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <i><FaInstagram /></i>
                </a>
            </div>
            <div className="navbar_container">
                <a href="/">Home</a>
                <a href="/#blog">Blog</a>
                <a href="/#dsa">DSA</a>
                <a href="/#contact">Contact</a>
            </div>
        </nav>
    )
}

export default Header
