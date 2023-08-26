import React from "react";

function Footer () {
    return (
        <footer>
            <p>© 2023 John Doe</p>
            <a
                href='https://www.example.com'
                target="_blank"
                rel="noopener noreferrer"
            >
                <img 
                    className="footerLinks"
                    src={require('../assets/images/github-white.png')}
                    alt="GitHub"
                />
            </a>
            <a
                href='https://www.example.com'
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    className="footerLinks"
                    src={require('../assets/images/linked-in.png')}
                    alt="LinkedIn"
                />
            </a>
            <a 
                href='https://www.example.com'
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    className="footerLinks"
                    src={require('../assets/images/twitter.png')}
                    alt="Twitter"
                />
            </a>
        </footer>
    );
}

export default Footer;