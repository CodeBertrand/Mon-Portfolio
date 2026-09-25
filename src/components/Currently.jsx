export default function Currently() {
  return (
    <section className="portfolio-section" id="currently">
      <div className="section-heading">
        <h2>
          Currently
          <br />
          <em>learning & building.</em>
        </h2>
        <p>What I'm focused on right now.</p>
      </div>

      <div className="currently-grid">
        <div className="currently-card">
          <span>01 / Focus</span>
          <p>Building scalable backend APIs and exploring modern LLM integration architectures.</p>
        </div>

        <div className="currently-card">
          <span>02 / Education</span>
          <p>Deepening knowledge in Artificial Intelligence and Big Data systems.</p>
        </div>

        <div className="currently-card">
          <span>03 / Goal</span>
          <p>Designing high-performance software systems that solve real-world problems.</p>
        </div>
      </div>
    </section>
  );
}