import { useState } from "react";
import { FaPlay, FaGlobe } from "react-icons/fa";

import VideoModal from "../../../../components/VideoModal";
import portfolioDemo from "../../../../assets/projects/portfolio/demo.mp4";

function HeroSection() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <>
            <section className="hero-section">

                <div className="project-badge">
                    Personal Web Project
                </div>

                <h1>
                    Portfolio Website V1
                </h1>

                <h3 className="hero-subtitle">
                    My First React Portfolio Website
                </h3>

                <p className="hero-description">
                    This was my first portfolio website developed using React and CSS.
                    It was created to showcase my projects, technical skills, education,
                    and resume while learning modern frontend development. Although this
                    portfolio has now been replaced by the one you are currently viewing,
                    it represents the beginning of my web development journey.
                </p>

                <div className="tech-stack">

                    <span>React</span>
                    <span>JavaScript</span>
                    <span>CSS</span>
                    <span>Firebase</span>

                </div>

                <div className="hero-buttons">

                    <a
                        href="https://portfolio-b2316.web.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="github-btn"
                    >
                        <FaGlobe />
                        Visit Portfolio
                    </a>

                    <button
                        className="demo-btn"
                        onClick={() => setIsVideoOpen(true)}
                    >
                        <FaPlay />
                        Website Demo
                    </button>

                </div>

            </section>

            <VideoModal
                isOpen={isVideoOpen}
                onClose={() => setIsVideoOpen(false)}
                src={portfolioDemo}
                title="Portfolio V1 Walkthrough"
                description="A walkthrough of my first portfolio website showcasing its design, project section, responsive layout, and the features I built while learning React."
            />
        </>
    );
}

export default HeroSection;