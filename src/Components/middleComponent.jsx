import { useState } from "react";
import "./MiddleComponent.css";

// Primer podataka — na svakoj stranici prosleđuješ svoj niz kroz prop "tabs"
const DEFAULT_TABS = [
  { title: "Assessments", text: "Procena stanja sistema, mreže i aplikacija — gde su slabe tačke i šta prvo popraviti." },
  { title: "Advisory", text: "Strateško savetovanje, politike i vCISO podrška za tim koji nema svog stručnjaka." },
  { title: "Training", text: "Obuke, tabletop vežbe i simulacije phishing napada za zaposlene." },
];

function MiddleComponent({ tabs = DEFAULT_TABS }) {
  const [selected, setSelected] = useState(0);
  const active = tabs[selected];

  return (
    <div className="drzac">
      {/* Dugmad (pill tabovi) */}
      <div className="line" role="tablist">
        {tabs.map((tab, i) => (
          <button
            key={tab.title}
            type="button"
            role="tab"
            aria-selected={selected === i}
            className={`tab-btn ${selected === i ? "is-active" : ""}`}
            onClick={() => setSelected(i)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Sadržaj izabranog taba — key forsira animaciju pri svakoj promeni */}
      <div className="content-tema">
        <div className="teme" key={selected} role="tabpanel">
          <span className="teme-number">{String(selected + 1).padStart(2, "0")}</span>
          <h3 className="teme-title">{active.title}</h3>
          <p className="teme-text">{active.text}</p>
        </div>
      </div>
    </div>
  );
}

export default MiddleComponent;
