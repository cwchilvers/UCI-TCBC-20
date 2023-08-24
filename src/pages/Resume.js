import React from "react";
import { Helmet } from "react-helmet-async";
import icon from '../assets/images/document.png';
import Header from "../components/Header";
import Title from "../components/Title";
import Footer from "../components/Footer";

function Resume () {
    return (
        <div className="resume">
            <Helmet>
                <title>John Doe | Resume</title>
            </Helmet>
            <Header />
            <Title title='Resume' icon={icon} />
            <Footer />
        </div>
    );
}

export default Resume;