import React from "react";
import { Link } from "react-router-dom";
import "../styles/_header.sass";

function Header () {
    return (
        <div className="header">
            <h1>John Doe</h1>
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