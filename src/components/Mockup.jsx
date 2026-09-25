export default function Mockup({ type, terminalLines }) {
  if (type === "terminal") {
    return (
      <div className="mockup">
        <div className="mockup-bar">
          <div className="mockup-dot"></div>
          <div className="mockup-dot"></div>
          <div className="mockup-dot"></div>
        </div>
        <div className="mockup-body">
          {(terminalLines || []).map((line, i) => (
            <div key={i} className={`tone-${line.type}`}>
              {line.text}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "phone") {
    return (
      <div className="mockup-phone">
        <div className="phone-shell">
          <div className="ph-bar"></div>
          <div className="ph-line"></div>
          <div className="ph-line short"></div>
          <div className="ph-card"></div>
        </div>
      </div>
    );
  }

  // fallback: simple browser-style placeholder
  return (
    <div className="mockup mockup-browser">
      <div className="mockup-bar">
        <div className="mockup-dot"></div>
        <div className="mockup-dot"></div>
        <div className="mockup-dot"></div>
      </div>
      <div className="mockup-body">preview</div>
    </div>
  );
}
