import { currently } from "../data/currently";

export default function Currently() {
  return (
    <section
      className="portfolio-section"
      id="currently"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">Right now</p>

          <h2>
            What I'm
            <br />
            <em>working on.</em>
          </h2>
        </div>

        <p>
          The ideas, technologies and projects
          currently taking my attention.
        </p>
      </div>

      <div className="currently-grid">
        {currently.map((item) => (
          <article
            className="currently-card"
            key={item.tag}
          >
            <span>{item.tag}</span>

            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}