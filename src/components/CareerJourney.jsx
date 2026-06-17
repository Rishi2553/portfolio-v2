import { FaDownload } from 'react-icons/fa';
import './CareerJourney.css';

function CareerJourney() {
  return (
    <section className="career-section">
      <h2 className="section-heading">Career Journey</h2>

      <div className="career-container">

        {/* Experience */}
        <div className="timeline-column">
          <h3 className="timeline-title">Experience</h3>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>Software Intern</h4>
              <p>PercyBen OPC Private Limited</p>
              <span>December 2025 - February 2026</span>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>Python Instructor</h4>
              <p>Shriram Matriculation School</p>
              <span>January 2025 - August 2025</span>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>Junior Engineer Trainee</h4>
              <p>Sanmar Engineering Pvt. Ltd.</p>
              <span>July 2022 - July 2023</span>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="timeline-column">
          <h3 className="timeline-title">Education</h3>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>BE Computer Science & Engineering</h4>
              <p>SRM Easwari Engineering College</p>
              <span>2023 - 2026</span>
              <p>CGPA: 7.0 / 10</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>Diploma in Mechanical Engineering</h4>
              <p>Sairam Polytechnic College</p>
              <span>2019 - 2022</span>
              <p>Percentage: 89%</p>
            </div>
          </div>
        </div>

      </div>

      <div className="resume-download">
        <a
          href="/resume.pdf"
          download
          className="resume-btn"
        >
        <FaDownload />
    <span>Download Resume</span>
        </a>
      </div>

    </section>
  );
}

export default CareerJourney;