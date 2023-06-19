import GitHubLink from "/src/components/links/GitHubLink";
import DeviceOutline from "./DeviceOutline";
import hyphenateString from "/src/utils/hyphenateString";
import link from "/src/assets/link.svg"
import "/src/css/ProjectPolaroid.css";
import "/src/css/ProjectScreenshots.css";

function ProjectPolaroid({ project }) {
  return (
    <div className="project-polaroid">
      <a className="live-preview-link" href={project.livePreview}>
        <div
          className={`image-section ${hyphenateString(project.title)}`}
          style={{ backgroundColor: project.colorAccent }}
        >
          <DeviceOutline project={project}></DeviceOutline>
        </div>
        <div className="link-icon">
          <img src={link} alt="icon depicting a chain link" />
        </div>
      </a>
      <div className="text-section">
        <a href={project.livePreview}>
          <h3 className="project-title">{project.title} <GitHubLink location={project.gitHub}></GitHubLink> </h3>
        </a>
        <div></div>
        <div className="project-tags-container">
          {project.tags &&
            project.tags.map((tag) => (
              <div className="project-tag" key={tag}>
                <i>{tag.toUpperCase()}</i>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectPolaroid;
