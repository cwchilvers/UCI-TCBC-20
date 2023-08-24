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
            <form>
                <div className="form-row">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" required />
                </div>

                <div className="form-row">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" required />
                </div>

                <div className="form-row">
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" id="message" required></textarea>
                </div>

                <button type="submit">Send</button>
            </form>
            <Footer />
        </div>
    );
}

export default Contact;