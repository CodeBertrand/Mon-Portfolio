export default function Skills() {
  return (
    <section className="portfolio-section" id="skills">
      <div className="section-heading">
        <h2>
          Technical skills
          <br />
          <em>My toolbox.</em>
        </h2>
        <p>Technologies I use to design, build and ship software.</p>
      </div>

      <div className="skills-panel">
        <div className="skill-row">
          <h3>Languages</h3>
          <div className="skill-items">
            <span>Python</span>
            <span>Dart</span>
            <span>Java</span>
          </div>
        </div>

        <div className="skill-row">
          <h3>Frameworks</h3>
          <div className="skill-items">
            <span>FastAPI</span>
            <span>Spring Boot</span>
            <span>Flutter</span>
          </div>
        </div>

        <div className="skill-row">
          <h3>Tools & Platforms</h3>
          <div className="skill-items">
            <span>Supabase</span>
            <span>Docker</span>
            <span>Git</span>
          </div>
        </div>
      </div>
    </section>
  );
}