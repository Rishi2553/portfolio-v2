import { FaBullseye, FaLaptopCode, FaArrowUp } from "react-icons/fa";

function OverviewSection() {
  return (
    <section className="overview-section">

      <h2>Project Overview</h2>

      <div className="overview-grid">

        <div className="overview-card">

          <FaBullseye className="overview-icon" />

          <h3>Purpose</h3>

          <p>
            Portfolio Website V1 was created to build my first professional
            online presence where I could showcase my projects, technical
            skills, education, and resume in a single place.
          </p>

        </div>

        <div className="overview-card">

          <FaLaptopCode className="overview-icon" />

          <h3>Development Journey</h3>

          <p>
            This project became my first complete React application. While
            building it, I learned component-based development, responsive
            layouts, routing, and modern frontend development practices.
          </p>

        </div>

        <div className="overview-card">

          <FaArrowUp className="overview-icon" />

          <h3>Why It's Here</h3>

          <p>
            Although this portfolio has been replaced by the website you are
            currently viewing, it represents an important milestone in my
            learning journey and demonstrates how my frontend skills have
            evolved over time.
          </p>

        </div>

      </div>

    </section>
  );
}

export default OverviewSection;