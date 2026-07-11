// import React,\ { useState } from 'react';
import AboutMe from './About-me';
import Skill from './Skill';
import Project from './Project';
import CareerJourney from './CareerJourney';
import Contact from './Contact';
import Home from './Home';
import Reveal from '../../../components/Reveal';
// import { FaBars,FaTimes } from "react-icons/fa";

function MainContent() {
    // const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
       <>

            <div className="section-divider"></div>
            <section id="home">
                <Reveal direction="fade">
                    <Home />
                </Reveal>

            </section>

            <div className="section-divider"></div>
            <section id="about">


                <AboutMe />
            </section>
            <div className="section-divider"></div>


            <section id="skills">
                <Skill />
            </section>
            <div className="section-divider"></div>

            <section id="projects">
                <Project />
            </section>
            <div className="section-divider"></div>

            <section id="career">
                <CareerJourney />
            </section>
            <div className="section-divider"></div>

            <section id="contact">
                <Contact />
            </section>
            <div className="section-divider"></div>
        </>
    );
}

export default MainContent;