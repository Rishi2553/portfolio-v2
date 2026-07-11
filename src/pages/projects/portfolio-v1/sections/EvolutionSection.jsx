import {
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

function EvolutionSection() {

  return (
    <section className="evolution-section">

      <h2>How This Project Shaped My Current Portfolio</h2>

      <p className="evolution-intro">
        Portfolio Website V1 marked the beginning of my frontend
        development journey. Building this project gave me practical
        experience with React, responsive design, and component-based
        development. Those lessons directly influenced the design and
        architecture of the portfolio you are currently viewing.
      </p>

      <div className="evolution-grid">

        <div className="evolution-card">

          <h3>Portfolio V1</h3>

          <ul>

            <li>
              <FaCheckCircle />
              First React portfolio website
            </li>

            <li>
              <FaCheckCircle />
              Responsive user interface
            </li>

            <li>
              <FaCheckCircle />
              Project showcase
            </li>

            <li>
              <FaCheckCircle />
              Technical skills section
            </li>

            <li>
              <FaCheckCircle />
              Contact information
            </li>

          </ul>

        </div>

        <div className="evolution-arrow">

          <FaArrowRight />

        </div>

        <div className="evolution-card">

          <h3>Portfolio V2 (Current)</h3>

          <ul>

            <li>
              <FaCheckCircle />
              Modular React architecture
            </li>

            <li>
              <FaCheckCircle />
              Dedicated project pages
            </li>

            <li>
              <FaCheckCircle />
              Reusable React components
            </li>

            <li>
              <FaCheckCircle />
              Improved UI and UX
            </li>

            <li>
              <FaCheckCircle />
              Better responsive design
            </li>

          </ul>

        </div>

      </div>

    </section>
  );
}

export default EvolutionSection;