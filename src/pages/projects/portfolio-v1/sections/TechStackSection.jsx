import {
  FaReact,
  FaJsSquare,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  
} from "react-icons/fa";

import { SiReactrouter , SiFirebase } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

function TechStackSection() {

  const technologies = [
    {
      icon: <FaReact />,
      title: "React",
      description: "Built the entire frontend using reusable React components."
    },
    {
      icon: <FaJsSquare />,
      title: "JavaScript",
      description: "Implemented application logic and interactivity."
    },
    {
      icon: <FaCss3Alt />,
      title: "CSS3",
      description: "Designed responsive layouts and custom user interface."
    },
    {
      icon: <SiReactrouter />,
      title: "React Router",
      description: "Handled page navigation inside the portfolio."
    },
    {
      icon: <SiFirebase />,
      title: "Firebase Hosting",
      description: "Deployed the portfolio as a live website."
    },
    {
      icon: <FaGitAlt />,
      title: "Git",
      description: "Tracked development using version control."
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      description: "Hosted the project source code."
    },
    {
      icon: <VscVscode />,
      title: "VS Code",
      description: "Primary development environment."
    }
  ];

  return (
    <section className="tech-section">

      <h2>Technology Stack</h2>

      <div className="tech-grid">

        {technologies.map((tech) => (

          <div
            className="tech-card"
            key={tech.title}
          >

            <div className="tech-icon">
              {tech.icon}
            </div>

            <h3>{tech.title}</h3>

            <p>{tech.description}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default TechStackSection;