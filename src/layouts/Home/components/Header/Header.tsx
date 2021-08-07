import { FaLinkedin, FaGithubSquare, FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";

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
                <a href="/#blog">Journal</a>
                <a href="/#dsa">Get in touch</a>
            </div>
        </nav>
    )
}

export default Header
