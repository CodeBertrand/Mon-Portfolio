import { currently } from "../data/currently";

export default function Currently() {
  return (
    <section className="section" id="currently">
      <div className="section-head">
        <div>
          <div className="section-num">03</div>
          <h2>Currently</h2>
        </div>
      </div>
      <ul className="currently-list">
        {currently.map((item) => (
          <li key={item.tag + item.text}>
            <span className="currently-tag">{item.tag}</span>
            <span className="currently-text">{item.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
