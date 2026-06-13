import { useState } from 'react';
import ProfilePicture from '../assets/profile.png';
import './About-me.css';
function AboutMe() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="about-me">
      <div className="profile-picture">
        <img src={ProfilePicture} alt="Profile" />
      </div>
      <div className="contact-info">
        <h2 className="section-heading">About Me</h2>
        <p className="text">
          Hi there! 👋 I'm Rishi Panneerselvam, a B.E. Computer Science and Engineering graduate with a passion for building modern web and mobile applications. I enjoy turning ideas into real-world solutions and continuously expanding my knowledge in software development.
        </p>
        <p className="text">
          I have experience working with technologies such as Java, Spring Boot, React, Flutter, SQL, HTML, CSS, and JavaScript. I'm particularly interested in Full-Stack Development and Android App Development, and I love learning new tools and frameworks that help me create better user experiences.
        </p>
        <div className={`extra-content ${showMore ? 'show' : ''}`}>
          <p className="text">
            My journey started with a strong foundation in programming and problem-solving, and today I focus on developing scalable applications, exploring modern development practices, and improving my technical skills every day.
          </p>

          <p className="text">
            When I'm not coding, you'll usually find me exploring new technologies, working on personal projects, or learning something new in the world of software development.
          </p>
        </div>
        <div className="tooltip-container">
          <button
            className="view-more-btn"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'View Less ▲' : 'View More ▼'}
          </button>

          <span className="tooltip">
            {showMore
              ? 'Hide additional information'
              : 'Show additional information'}
          </span>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;