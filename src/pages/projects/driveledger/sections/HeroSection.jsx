import {
  FaGithub,
  FaDownload,
} from "react-icons/fa";

import FloatingPhones from "../components/FloatingPhones";

import "../styles/HeroSection.css";

function HeroSection() {

  return (

    <section className="drive-hero">

      <div className="drive-hero-content">

        <div className="project-badge">
          Personal Flutter Project
        </div>

        <h1>
          DriveLedger
        </h1>

        <h3 className="hero-subtitle">
          Offline Income & Expense Tracking Application for Cab Drivers
        </h3>

        <p className="hero-description">

          DriveLedger is an offline-first Flutter application developed to help
          cab drivers efficiently manage their daily income, expenses, profits,
          and transaction history. The application stores all data locally using
          SQLite and supports Excel import/export for backup and migration.

        </p>

        <div className="tech-stack">

          <span>Flutter</span>
          <span>SQLite</span>
          <span>Provider</span>
          <span>Excel</span>
          <span>Android</span>

        </div>

        <div className="hero-buttons">

          <a
            href="#"
            className="download-btn"
          >
            <FaDownload />
            Download APK
          </a>

          <a
            href="#"
            className="github-btn"
          >
            <FaGithub />
            GitHub Repository
          </a>

        </div>

      </div>

      <FloatingPhones />

    </section>

  );

}

export default HeroSection;