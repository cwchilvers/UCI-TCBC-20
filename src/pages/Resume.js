import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Title from "../components/Title";
import Footer from "../components/Footer";

function Resume () {
    return (
        <div className="resume">
            <Helmet>
                <title>John Doe | Resume</title> {/* Set the title for this page */}
            </Helmet>
            <Header />
            <Title title='Resume' />
            <Footer />
        </div>
    );
}

export default Resume;