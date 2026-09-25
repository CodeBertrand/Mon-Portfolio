import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* 1. Mot géant en arrière-plan (z-index: 1) */}
      <div className="hero-background-word">
        PORTFOLIO
      </div>

      {/* 2. Cercle Terracotta (z-index: 2) */}
      <div className="hero-circle" />

      {/* 3. Portrait détouré PNG (z-index: 3) */}
      <div className="hero-portrait">
        <img
          src="public/bertrand.jpg"
          alt="Bertrand Houtoumtai Boukar"
        />
      </div>

      {/* 4. Stamp / Badge flottant (z-index: 4) */}
      <div className="hero-stamp">
        <span>VIEW</span>
        <span>CERTAIN</span>
        <span>PROJECTS</span>
      </div>

      <div className="hero-topline">
        <span>SOFTWARE ENGINEERING</span>
        <span>AI</span>
        <span>BIG DATA</span>
      </div>

      <div className="hero-copy">
        <p className="hero-kicker">Portfolio</p>

        <h1>
          I build
          <br />
          software systems
          <br />
          <span>that matter.</span>
        </h1>

        <p className="hero-description">
          I'm Bertrand, a software engineering student specializing in AI and Big Data.
          I design and build backend systems, APIs and software products from idea to implementation.
        </p>

        <div className="hero-actions">
          <a href="#work" className="hero-button">
            View my work
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="hero-link"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="hero-bottom">
        <span>Software Engineer</span>
        <span>Building backend systems & AI products</span>
      </div>
    </section>
  );
}