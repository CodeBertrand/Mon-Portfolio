import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <div className="eyebrow">{profile.eyebrow}</div>
        <h1>
          {profile.headline.slice(0, -1)}
          <span className="accent-dot">.</span>
        </h1>
        <p className="hero-sub">{profile.bio}</p>
        <div className="hero-cta">
          <a className="btn btn-primary" href="#work">
            View Work
          </a>
          <a
            className="btn btn-ghost"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </div>
      <div className="hero-photo-col">
        <div className="hero-photo-frame">
          <img src={profile.photo} alt={profile.name} />
          <div className="hero-photo-tag">
            <span>bertrand.jpg</span>
            <span>
              <b>●</b> available for {profile.availableFor}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
