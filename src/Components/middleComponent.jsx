import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./MiddleComponent.css";
import { getPageTabs } from "./pageTabs"; // prilagodi putanju

function MiddleComponent({ tabs }) {
  const { pathname } = useLocation();
  const data = tabs ?? getPageTabs(pathname);
  const [selected, setSelected] = useState(0);

  // nova stranica = uvek krećemo od prvog taba
  useEffect(() => {
    setSelected(0);
  }, [pathname]);

  const active = data[selected] ?? data[0];
  const pad = (n) => String(n).padStart(2, "0");

  return (
    <div className="drzac" id="serivce-details">
      <div className="line" role="tablist" aria-orientation="vertical">
        {data.map((tab, i) => (
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

      <div className="content-tema">
        <div className="teme" key={`${pathname}-${selected}`} role="tabpanel">
          <span className="teme-number">
            {pad(selected + 1)} / {pad(data.length)}
          </span>
          <h3 className="teme-title">{active.title}</h3>
          <p className="teme-text">{active.text}</p>

          {active.points?.length > 0 && (
            <ul className="teme-points">
              {active.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          )}

          <Link to="/contact" className="teme-link">
            Talk to an expert <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MiddleComponent;