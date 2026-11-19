import { FaGithub } from "react-icons/fa";

import { trackEvent } from "../../../../utils/analytics";

function HeroSection() {
  return (
      <section className="hero-section">

        <div className="project-badge">
          Academic Final Year Project
        </div>

        <h1>
          Smart Bus Tracking & Crowd Management System
        </h1>

        <h3 className="hero-subtitle">
          Full Stack Public Transportation Management Platform
        </h3>

        <p className="hero-description">
          BusTrackPlus is a public transportation management platform
          developed using Flutter for the client applications and Spring
          Boot Microservices for the backend. The system includes separate
          applications for passengers, conductors, and administrators.
          Authentication is handled using JWT, MySQL stores transactional
          data, and Firebase Firestore is used for real-time bus tracking
          and occupancy updates.
        </p>

        <div className="tech-stack">

          <span>Flutter</span>
          <span>Spring Boot</span>
          <span>Firebase</span>
          <span>MySQL</span>

        </div>

        <div className="hero-buttons">

          <a
            href="https://github.com/orgs/Bus-Plus/repositories"
            target="_blank"
            rel="noreferrer"
            className="github-btn"
            onClick={() =>
              trackEvent("github_click", {
                project_name: "BusTrackPlus"
              })
            }
          >
            <FaGithub /> View Source Code
          </a>

        </div>

      </section>
  );
}

export default HeroSection;
