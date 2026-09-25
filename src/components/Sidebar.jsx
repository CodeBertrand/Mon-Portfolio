import { profile } from "../data/profile";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="sidebar-photo">
          <img
            src={profile.photo}
            alt={profile.name}
          />
        </div>

        <div className="sidebar-identity">
          <strong>
            Bertrand Houtoumtai
            <br />
            Boukar
          </strong>

          <span>@CodeBertrand</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        <a href="#work">Work</a>
        <a href="#skills">Skills</a>
        <a href="#currently">Currently</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-socials">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <span>Yaoundé, Cameroon</span>
      </div>
    </aside>
  );
}