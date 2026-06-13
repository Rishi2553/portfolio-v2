import { useState } from 'react';
import portfolioDemo from '../assets/projects/portfolio/demo.mp4';
import './portfolio.css';
function Portfolio() {
    const [showMore, setShowMore] = useState(false);
    return (
        <div className="project-card">
            <h3>Portfolio</h3>
            <p className="text">
                This was my first portfolio website, built to present my projects,
                skills, and experience in a professional way. It served as an important
                step in improving my React, CSS, and UI design skills.
            </p>
            <div className={`project-details ${showMore ? "show" : ""}`}>
                <p className="text">
                    You might be wondering why a portfolio website is included in the
                    Projects section.

                    This is actually my first portfolio website, developed before the
                    one you are currently viewing. Building it helped me learn React,
                    component-based architecture, responsive design, CSS styling, and
                    modern web development practices.
                </p>

                <div className="video-container">
                    <video
                        controls
                        className="project-video">
                        <source src={portfolioDemo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

            </div>
            <button
                className="view-more-btn"
                title={showMore ? "Click to view less" : "Click to view more"}
                onClick={() => setShowMore(!showMore)}
            >
                {showMore ? "View Less ▲" : "View More ▼"}
            </button>
                <div className="portfolio-link">
                    <a
                        href="https://rishi-panneerselvam.web.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Portfolio
                    </a>
                </div>
        </div>
    );
}

export default Portfolio;