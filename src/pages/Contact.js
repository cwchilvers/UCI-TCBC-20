import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Title from "../components/Title";
import Footer from "../components/Footer";

function Contact () {
    return (
        <div className="contact">
            <Helmet>
                <title>John Doe | Contact</title> {/* Set the title for this page */}
            </Helmet>
            <Header />
            <Title title='Contact' />
            <Footer />
        </div>
    );
}

export default Contact;