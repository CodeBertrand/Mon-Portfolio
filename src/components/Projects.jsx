import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="portfolio-section" id="work">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Selected work</p>

          <h2>
            Things I've
            <br />
            <em>built.</em>
          </h2>
        </div>

        <p>
          A collection of software projects,
          backend systems and experiments.
        </p>
      </div>

      <div className="projects">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.name}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
