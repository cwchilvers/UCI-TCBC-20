import React from "react";

function PortfolioItem({ projectName }) {
    return (
        <div className="portfolio-item">
            <h2>{projectName}</h2>
            <div className="links">
                <a
                    className="github"
                    href='https://www.example.com'
                    target="_blank"
                >
                    <img src={require('../assets/images/github.png')} alt="github" />
                </a>
                <a
                    className="live"
                    href='https://www.example.com'
                    target="_blank"
                >
                    <img src={require('../assets/images/globe.png')} alt="live" />
                </a>
            </div>
        </div>
    );
}

export default PortfolioItem;
