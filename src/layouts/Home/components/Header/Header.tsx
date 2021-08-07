import { FaLinkedin, FaGithubSquare, FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";

const Header = () => {
    return (
        <header id="header">

            <div className="navbar">
                <div className="logo">
                    <h1>IO</h1>
                </div>
                <div className="navbar_container">
                    <a href="/">Home</a>
                    <a href="/#blog">Journal</a>
                    <a href="/#dsa">Get in touch</a>
                    <a href="/" className="linkedin">LinkedIn</a>
                    <a href="/" className="youtube">Youtube</a>
                    <a href="/" className="github">Github</a>
                </div>
            </div>

            {/* <div className="notification_banner">
                <h4>New video out. Watch now</h4>
            </div> */}
        </header>
    )
}

export default Header
