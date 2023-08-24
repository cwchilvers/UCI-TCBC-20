import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/_header.sass";
import computerIcon from "../assets/images/computer.png";

function Header () {
    return (
        <div className="header">
            <div className="logo">
                <img src={computerIcon} alt='Computer Icon' />
                <h1>John Doe</h1>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">About Me</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/resume">Resume</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;