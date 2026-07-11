import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import "./ProjectsPage.css";
function ProjectsPage() {
  return (


    <section id="project-section">
      <h2 className="section-heading">
        Projects
      </h2>
      <p className="section-subtitle">
        A collection of projects showcasing my skills in full-stack,
        mobile, and frontend development.
      </p>

      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </section>

  );
}

export default ProjectsPage;