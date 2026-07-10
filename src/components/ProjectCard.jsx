import { Link } from "react-router-dom";
import "./ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <div className="project-card">

      <div className="project-image">
        <img
          src={project.image}
          alt={project.title}
        />
      </div>

      <div className="project-content">

        <h3>{project.title}</h3>

        <p className="project-description">
          {project.shortDescription}
        </p>

        <div className="project-tech">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-chip">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-footer">
          <Link
            to={project.route}
            className="project-btn"
          >
            View Details →
          </Link>
        </div>

      </div>

    </div>
  );
}

export default ProjectCard;