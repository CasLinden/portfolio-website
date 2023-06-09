import GitHubLink from "/src/components/GitHubLink";
import ResponsivenessIcons from "./ResponsivenessIcons";
import yamanote from "/src/assets/screenshots/yamanote-320.png";
import "/src/css/ProjectsCard.css";

function ProjectsCard({ project }) {
  return (
    <div className="project-card">
      <a href={project.livePreview} target="_blank" rel="noopener noreferrer">
        <div
          className="project-screenshot"
          style={{
            backgroundImage: `url(${project.screenshot})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="top-of-screenshot"></div>

          <div className="project-link-icons">
            <GitHubLink location={project.gitHub}></GitHubLink>
          </div>
        </div>
      </a>
      <div className="card-bottom-half">
        <div className="title-and-icons-container">
          <h3 className="project-title">{project.title}</h3>
          <ResponsivenessIcons
            hasMobileVersion={project.hasMobileVersion}
          ></ResponsivenessIcons>
        </div>
        <p className="project-description">{project.description}</p>
      </div>
    </div>
  );
}

export default ProjectsCard;
