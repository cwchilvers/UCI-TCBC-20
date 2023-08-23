import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Title from "../components/Title";
import Footer from "../components/Footer";

function Portfolio () {
    return (
        <div className="portfolio">
            <Helmet>
                <title>John Doe | Portfolio</title> {/* Set the title for this page */}
            </Helmet>
            <Header />
            <Title title='Portfolio' />
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
            <Footer />
        </div>
    );
}

export default Portfolio;