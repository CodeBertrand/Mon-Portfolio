import { profile } from "../data/profile";

export default function Contact() {
  return (
    <>
      <section className="contact" id="contact">
        <h2>Let's build something.</h2>
        <p>Open to fellowships, collaborations, and interesting problems.</p>
        <div className="contact-links">
          <a
            className="btn btn-primary"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="btn btn-ghost"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>
      <footer>Built with React &amp; Vite · Hosted on GitHub Pages</footer>
    </>
  );
}
