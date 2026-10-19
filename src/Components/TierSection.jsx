import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./TierSection.css";

// Podaci za kartice — na drugoj stranici prosleđuješ svoj niz kroz prop "tiers"
const DEFAULT_TIERS = [
  {
    title: "Project-Based",
    lead: "For companies ready to build or overhaul cybersecurity governance with expert guidance.",
    text: "It's perfect for security leaders who want hands-on, collaborative support in building documentation that aligns with compliance, operational workflows, and stakeholder expectations.",
    to: "/professional-services",
  },
  {
    title: "Fixed-Pricing",
    lead: "For teams who want predictable pricing with documentation that reflects operational depth.",
    text: "Security and compliance requirements vary, and so does the complexity of documenting them. With this tier, pricing is based on the depth and regulatory impact of each policy or process.",
    to: "/professional-services",
  },
  {
    title: "SMB-Friendly Policy Bundles",
    lead: "For smaller organizations seeking foundational policies with flexibility and speed.",
    text: "Just getting started? We offer streamlined bundles tailored for small to mid-sized businesses (SMBs) that need essentials without the overhead. Choose individual policies à la carte or group them into affordable packages.",
    to: "/professional-services",
  },
];

function TiersSection({
  eyebrow = "Options to match your timeline, budget, and maturity.",
  heading = ["Flexible Tiers.", "Confidence, Delivered."], // svaki element = jedan red naslova
  tiers = DEFAULT_TIERS,
  buttonLabel = "View Service Details",
}) {
  const gridRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Kartice se pojave (fade + slide) kad sekcija uđe u vidno polje
  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="tiers-section">
      <div className="tiers-inner">
        <header className="tiers-head">
          <p className="tiers-eyebrow">{eyebrow}</p>
          <h2 className="tiers-heading">
            {heading.map((line) => (
              <span key={line} className="tiers-heading-line">
                {line}
              </span>
            ))}
          </h2>
        </header>

        <div ref={gridRef} className={`tiers-grid ${visible ? "is-in" : ""}`}>
          {tiers.map((tier, i) => (
            <article key={tier.title} className="tiers-card" style={{ transitionDelay: `${i * 120}ms` }}>
              <h3 className="tiers-card-title">{tier.title}</h3>
              <p className="tiers-card-lead">{tier.lead}</p>
              <p className="tiers-card-text">{tier.text}</p>
              <a href="#serivce-details" className="tiers-btn">
                {buttonLabel}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TiersSection;
