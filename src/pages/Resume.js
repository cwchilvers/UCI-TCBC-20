import React from "react";
import { Helmet } from "react-helmet-async";
import "../styles/pages/Resume.sass";
import icon from '../assets/images/document.png';
import pdf from '../assets/documents/resume.pdf';
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
            <div className="pdf-container">
                <iframe
                    title="Resume PDF"
                    src={pdf}
                    height="550px"
                ></iframe>
            </div>
            <div className="download-padding">
                <a
                    className="download"
                    href={pdf}
                    download="JohnDoeResume.pdf"
                >
                    Download Resume
                </a>
            </div>
            <Footer />
        </div>
    );
}

export default Resume;