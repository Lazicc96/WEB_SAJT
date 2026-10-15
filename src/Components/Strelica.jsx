import { useState, useEffect } from "react";
import "./Strelica.css";

const SHOW_AFTER = 400; // px — posle koliko skrola se dugme pojavi
const RING_LENGTH = 132; // obim kruga (2 * π * 21) — mora da se poklopi sa CSS-om

function ScrollToTop() {
  const [visible, setVisible] = useState(false); // da li je dugme prikazano
  const [progress, setProgress] = useState(0); // koliko je stranica pročitana (0 do 1)

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;

      setVisible(scrolled > SHOW_AFTER);
      setProgress(max > 0 ? scrolled / max : 0);
    };

    onScroll(); // proveri odmah pri učitavanju
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll); // čišćenje
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className={`to-top ${visible ? "is-visible" : ""}`}
      onClick={goToTop}
      aria-label="Nazad na vrh"
      tabIndex={visible ? 0 : -1}
    >
      {/* prsten koji se puni dok skroluješ */}
      <svg className="to-top-ring" viewBox="0 0 48 48" aria-hidden="true">
        <circle className="to-top-ring-bg" cx="24" cy="24" r="21" />
        <circle
          className="to-top-ring-bar"
          cx="24"
          cy="24"
          r="21"
          style={{ strokeDashoffset: RING_LENGTH * (1 - progress) }}
        />
      </svg>

      <svg className="to-top-arrow" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
        <path
          d="M10 16V4M4.5 9.5L10 4l5.5 5.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default ScrollToTop;
