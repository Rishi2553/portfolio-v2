import { useState } from "react";
import {
  FaPlay
} from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import VideoModal from "../../../../components/VideoModal";
import busTrackVideo from "../../../../assets/projects/bus-track-plus/bustrackplus.mp4";

function HeroSection() {

  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
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
          >
            <FaGithub /> View Source Code
          </a>

          <button
            className="demo-btn"
            onClick={() => setIsVideoOpen(true)}
          >
            <FaPlay /> Watch Project Walkthrough
          </button>

        </div>

      </section>

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        src={busTrackVideo}
        title="BusTrackPlus Project Walkthrough"
        description="A 5-minute presentation covering the project overview, system architecture, database design, and a live demonstration of the Admin, Conductor, and Passenger applications."
      />
    </>
  );
}

export default HeroSection;