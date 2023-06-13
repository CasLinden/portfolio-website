import projects from "/src/projects.js";
import ProjectPolaroid from "./ProjectPolaroid"

import "/src/css/ProjectsSection.css";

function ProjectsSection() {
  return (
    <div className="projects-section">
      <div className="projects-container">
      <h2>My Work</h2>
        {projects.map((project) => (
          <ProjectPolaroid key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsSection;
