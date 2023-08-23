import React from "react";
import Header from "../components/Header";
import Title from "../components/Title";

function AboutMe () {
    return (
        <div className="home">
            <Header />
            <Title title='About Me' />
            <img src="../assets/images/john-doe.jpg" alt="John Doe" />
        </div>
    );
}

export default AboutMe;