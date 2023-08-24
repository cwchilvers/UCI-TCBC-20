import React from "react";
import { Helmet } from "react-helmet-async";
import "../styles/pages/Portfolio.sass";
import icon from '../assets/images/folder.png';
import Header from "../components/Header";
import Title from "../components/Title";
import Footer from "../components/Footer";

function Portfolio () {
    return (
        <div className="portfolio">
            <Helmet>
                <title>John Doe | Portfolio</title>
            </Helmet>
            <Header />
            <Title title='Portfolio' icon={icon} />
            <div className="center">
                <div className="portfolio-container">
                    <div className="portfolio-item">
                        <h2>Project 1</h2>
                    </div>
                    <div className="portfolio-item">
                        <h2>Project 2</h2>
                    </div>
                    <div className="portfolio-item">
                        <h2>Project 3</h2>
                    </div>
                    <div className="portfolio-item">
                        <h2>Project 4</h2>
                    </div>
                    <div className="portfolio-item">
                        <h2>Project 5</h2>
                    </div>
                    <div className="portfolio-item">
                        <h2>Project 6</h2>
                    </div>
                    <div className="portfolio-item">
                        <h2>Project 7</h2>
                    </div>
                    <div className="portfolio-item">
                        <h2>Project 8</h2>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Portfolio;