import { FaBullseye, FaLaptopCode, FaArrowUp } from "react-icons/fa";
import Reveal from "../../../../components/Reveal";

function OverviewSection() {
  return (
    <section className="overview-section">

      <Reveal><h2>Project Overview</h2></Reveal>

      <div className="overview-grid">

        <Reveal delay={0.08}>
        <div className="overview-card">

          <div className="overview-card-icon"><FaBullseye className="overview-icon" /></div>
          <span className="overview-eyebrow">Purpose</span>

          <h3>Why It Started</h3>

          <p>
            Portfolio Website V1 was created to build my first professional
            online presence where I could showcase my projects, technical
            skills, education, and resume in a single place.
          </p>

        </div>
        </Reveal>

        <Reveal delay={0.16}>
        <div className="overview-card">

          <div className="overview-card-icon"><FaLaptopCode className="overview-icon" /></div>
          <span className="overview-eyebrow">Development Journey</span>

          <h3>Development Journey</h3>

          <p>
            This project became my first complete React application. While
            building it, I learned component-based development, responsive
            layouts, routing, and modern frontend development practices.
          </p>

        </div>
        </Reveal>

        <Reveal delay={0.24}>
        <div className="overview-card">

          <div className="overview-card-icon"><FaArrowUp className="overview-icon" /></div>
          <span className="overview-eyebrow">What It Represents</span>

          <h3>Why It Still Matters</h3>

          <p>
            Although this portfolio has been replaced by the website you are
            currently viewing, it represents an important milestone in my
            learning journey and demonstrates how my frontend skills have
            evolved over time.
          </p>

        </div>
        </Reveal>

      </div>

    </section>
  );
}

export default OverviewSection;
