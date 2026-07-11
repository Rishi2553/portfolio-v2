import { Link } from "react-router-dom";
import ProjectCard from "../../../components/ProjectCard";
import projects from "../../../data/projects";
import './Project.css';
function Project() {
  const homeProjects = projects.slice(0, 2);
  return (
    <div className="project-section">
      <h2 className="section-heading">Projects</h2>
      {homeProjects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
      <div className="view-all-projects">
        <Link to="/projects" className="view-project-btn">
          View All Projects →
        </Link>
      </div>
    </div>
  );
}

export default Project;