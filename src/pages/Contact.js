import React from "react";
import { Helmet } from "react-helmet-async";
import icon from '../assets/images/email.png';
import Header from "../components/Header";
import Title from "../components/Title";
import Footer from "../components/Footer";

function Contact () {
    return (
        <div className="contact">
            <Helmet>
                <title>John Doe | Contact</title>
            </Helmet>
            <Header />
            <Title title='Contact' icon={icon} />
            <Footer />
        </div>
    );
}

export default Contact;