import React from "react";
import { Helmet } from "react-helmet-async";
import '../styles/Contact.sass';
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
            <div className="center">
                <form className="center">
                    <div className="form-padding">
                        <div className="form-row">
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" id="name" required autoComplete="yes" />
                        </div>

                        <div className="form-row">
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" id="email" required autoComplete="yes" />
                        </div>

                        <div className="form-row">
                            <label htmlFor="message">Message:</label>
                            <textarea name="message" id="message" required autoComplete="off"></textarea>
                        </div>

                        <button type="submit">Send</button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;