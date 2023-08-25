import React from "react";
import { Helmet } from "react-helmet-async";
import "../styles/pages/Portfolio.sass";
import icon from '../assets/images/folder.png';
import Header from "../components/Header";
import Title from "../components/Title";
import Footer from "../components/Footer";
import PortfolioItem from "../components/PortfolioItem";

function Portfolio () {
    const projectNames = [
        "fitness-app",
        "learning-platform",
        "personal-blog",
        "recipe-app",
        "task-manager",
        "weather-app",
        "e-commerce-app",
        "portfolio-site",
    ];

    return (
        <div className="portfolio">
            <Helmet>
                <title>John Doe | Portfolio</title>
            </Helmet>
            <Header />
            <Title title='Portfolio' icon={icon} />
            <div className="center">
                <div className="portfolio-container">
                    {projectNames.map((projectName, index) => (
                        <PortfolioItem key={index} projectName={projectName} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Portfolio;