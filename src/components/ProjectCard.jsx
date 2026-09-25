export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-main">
        <div className="project-top">
          <span className="project-status">
            {project.status}
          </span>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Repository
          </a>
        </div>

        <div className="project-title">
          <h3>{project.name}</h3>

          <p>{project.description}</p>
        </div>

        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>

      <div className="project-card-side">
        <span>Technology</span>

        <div className="project-stack">
          {project.tags.slice(0, 4).map((tag) => (
            <strong key={tag}>{tag}</strong>
          ))}
        </div>

        <span className="project-year">
          2026
        </span>
      </div>
    </article>
  );
}
