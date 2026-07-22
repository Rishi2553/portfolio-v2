import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import "./ProjectsPage.css";
import Reveal from "../components/Reveal";
function ProjectsPage() {
  return (


    <section id="project-section">
      <Reveal direction="up">
      <h2 className="section-heading">
        Projects
      </h2>
      </Reveal>
      <Reveal direction="up" >

      <p className="section-subtitle">
        A collection of projects showcasing my skills in full-stack,
        mobile, and frontend development.
      </p>
      </Reveal>

      {projects.map((project) => (
        <Reveal direction="up" delay={0.2}>
        <ProjectCard
          key={project.id}
          project={project}
        />
        </Reveal>
      ))}
    </section>

  );
}

export default ProjectsPage;