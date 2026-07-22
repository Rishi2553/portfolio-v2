import { Link } from "react-router-dom";
import ProjectCard from "../../../components/ProjectCard";
import projects from "../../../data/projects";
import Reveal from "../../../components/Reveal";
import './Project.css';
function Project() {
  const homeProjects = projects.slice(0, 2);
  return (
    <div className="project-section">
      <Reveal direction="up">
        <h2 className="section-heading">Projects</h2>
      </Reveal>
      {homeProjects.map((project) => (
        <Reveal direction="up" delay={ 0.2}>
          <ProjectCard
            key={project.id}
            project={project}
          />
        </Reveal>
      ))}
      <Reveal direction="up">
      <div className="view-all-projects">
        <Link to="/projects" className="view-project-btn">
          View All Projects →
        </Link>
      </div>
      </Reveal>
    </div>
  );
}

export default Project;