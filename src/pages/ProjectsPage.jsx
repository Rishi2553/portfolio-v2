import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
function ProjectsPage() {
  return (


      <section id="project-section">
        <h2 className="section-heading">All Projects</h2>

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