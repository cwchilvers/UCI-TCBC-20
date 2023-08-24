import React from "react";
import { Helmet } from "react-helmet-async";
import "../styles/pages/AboutMe.sass";
import Header from "../components/Header";
import Title from "../components/Title";
import Footer from "../components/Footer";
import icon from '../assets/images/help.png';
import johnDoe from "../assets/images/john-doe.jpeg";

function AboutMe () {
    return (
        <div className="about-me">
            <Helmet>
                <title>John Doe | About Me</title>
            </Helmet>
            <Header />
            <Title title='About Me' icon={icon} />
            <div className="center">
                <img src={johnDoe} alt="John Doe" />
                <div className="about-me-text">
                    <p>
                        &emsp; Hi there! I'm John Doe, a passionate web developer and technology
                        enthusiast. With a strong background in coding and a knack for problem
                        solving, I love bringing creative and functional websites to life.
                    </p>
                    <br></br>
                    <p>
                        &emsp; My journey in the world of web development began several years ago
                        when I built my first personal website from scratch. Since then, I've
                        continuously honed my skills, exploring various technologies and
                        frameworks to stay up-to-date with the ever-evolving web landscape.
                    </p>
                    <br></br>
                    <p>
                        &emsp; When I'm not coding, you'll likely find me immersed in a good book,
                        exploring new hiking trails, or experimenting with new recipes in the
                        kitchen. I'm always excited to tackle new challenges and collaborate
                        with fellow developers to create amazing digital experiences.
                    </p>
                    <br></br>
                    <p>
                        &emsp; Feel free to reach out to me via the contact page to discuss potential
                        projects, collaborations, or just to say hello. Let's bring your ideas
                        to life together!
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AboutMe;