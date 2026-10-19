import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./homesections.css";
import { FAQ_ITEMS } from "./faqItems";


// Slike iz originalnog template-a
const CDN = "https://cdn.prod.website-files.com/686b7d020ea82bd1ba5003a8/";
const CDN_PORTFOLIO = "https://cdn.prod.website-files.com/686b7d020ea82bd1ba5003b1/";


// ==========================================
// PORTFOLIO IKONICE (Male, čiste, Flaticon stil)
// ==========================================

const IconDiscovery = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FD5701" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const IconTesting = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FD5701" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
);

const IconProtection = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FD5701" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <path d="M9 12l2 2 4-4"></path>
  </svg>
);



/* 
   IKONICE — "Industries we secure"
   */
const IND_PROPS = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  width: 26,
  height: 26,
  "aria-hidden": "true",
};

const IconFinance = () => (
  <svg {...IND_PROPS}>
    <path d="M3 10l9-6 9 6M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20h18" />
  </svg>
);
const IconCloud = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FD5701" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
  </svg>
);
const IconHealth = () => (
  <svg {...IND_PROPS}>
    <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
    <path d="M12 9v6M9 12h6" />
  </svg>
);
const IconShop = () => (
  <svg {...IND_PROPS}>
    <path d="M3 4h2l2.5 11h10L20 7H6.5" />
    <circle cx="9" cy="20" r="1" />
    <circle cx="17" cy="20" r="1" />
  </svg>
);

/* 
   POMOCNE KOMPONENTE
    */

// Scroll reveal (fade + slide up)
function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
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
    <div
      ref={ref}
      className={`hs-reveal ${visible ? "is-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M5.63068 12.4001L10.3691 8.0001L5.63068 3.6001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Dugme sa strelicom u krugu
function PrimaryButton({ to, children }) {
  return (
    <Link to={to} className="hs-btn hs-btn-primary">
      <span>{children}</span>
      <span className="hs-btn-arrow" aria-hidden="true">
        <svg width="14" height="14" viewBox="0 0 14 14">
          <path
            d="M3 7h8M7.5 3.5L11 7l-3.5 3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Link>
  );
}

// Kartica iz sekcije "Investment highlights"
function PortfolioCard({ to, logo, name, text, badge, year }) {
  return (
    <Link to={to} className="hs-pcard">
      <span className="hs-pcard-bg" aria-hidden="true"></span>
      <span className="hs-pcard-content">
        <span>
          {logo}
          <h3 className="hs-pcard-title">{name}</h3>
          <p className="hs-pcard-text">{text}</p>
        </span>
        <span className="hs-pcard-meta">
          <span className="hs-badge">{badge}</span>
          <span className="hs-pcard-year">{year}</span>
        </span>
        <span className="hs-pcard-arrow" aria-hidden="true">
          <ChevronRight />
        </span>
      </span>
    </Link>
  );
}

// Tab iz sekcije "Our approach" (accordion) — SVG ikona umesto slike
function ApproachTab({ title, text, icon, number, open, onSelect }) {
  const onKey = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect();
    }
  };
  return (
    <div
      className={`hs-tab ${open ? "is-open" : ""}`}
      role="button"
      tabIndex={0}
      aria-expanded={open}
      onClick={onSelect}
      onKeyDown={onKey}
    >
      <div className="hs-tab-head">
        <h3 className="hs-tab-title">{title}</h3>
        <span className="hs-icon-circle" aria-hidden="true">
          <ChevronRight />
        </span>
      </div>
      <div className="hs-collapse">
        <div className="hs-collapse-inner">
          <p className="hs-tab-text">{text}</p>
          <Link to="/contact" className="hs-link" onClick={(e) => e.stopPropagation()}>
            <span>Learn more</span>
            <ChevronRight />
          </Link>
          <div className="hs-tab-image">
            <div
              style={{
                width: "100%",
                height: "100%",
                minHeight: 240,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FD5701",
              }}
            >
              <div style={{ width: 150, height: 150 }}>{icon}</div>
            </div>
            <span className="hs-tab-number">{number}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Avatar sa prstenom (testimonials)
function Avatar({ src, alt }) {
  return (
    <span className="hs-avatar-ring">
      <img className="hs-avatar" src={src} alt={alt} loading="lazy" width="120" height="120" />
    </span>
  );
}

// Stavka FAQ accordion-a
function FaqItem({ number, title, text, open, onToggle }) {
  const onKey = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onToggle();
    }
  };
  return (
    <div
      className={`hs-faq ${open ? "is-open" : ""}`}
      role="button"
      tabIndex={0}
      aria-expanded={open}
      onClick={onToggle}
      onKeyDown={onKey}
    >
      <div className="hs-faq-content">
        <span className="hs-faq-number">{number}</span>
        <div className="hs-faq-main">
          <h3 className="hs-faq-title">{title}</h3>
          <div className="hs-collapse">
            <div className="hs-collapse-inner">
              <p className="hs-faq-text">{text}</p>
            </div>
          </div>
        </div>
        <span className="hs-icon-circle" aria-hidden="true">
          <ChevronRight />
        </span>
      </div>
      <img
        className="hs-faq-bg"
        src={CDN + "686d946c8458f386198e769f_faqs-bg-equity-webflow-template.jpg"}
        alt=""
        loading="lazy"
      />
    </div>
  );
}

/* 
   GLAVNA KOMPONENTA
    */
function HomeSections() {
  const [activeTab, setActiveTab] = useState(0); // koji tab je otvoren u "Our approach"
  const [openFaq, setOpenFaq] = useState(0); // koji FAQ je otvoren (null = nijedan)

  const toggleFaq = (i) => setOpenFaq((prev) => (prev === i ? null : i));

  return (
    <div className="hs-root">
      {/*  INVESTMENT HIGHLIGHTS — kartice  */}
      <section className="hs-section hs-cards-section">
        <div className="hs-container">
          <Reveal className="hs-cards-grid">
            <PortfolioCard
  to="/contact"
  logo={<IconCloud/>}
  name="Converra"
  text="Full-spectrum external footprint mapping and attack surface analysis. We identified exposed assets before malicious actors could exploit them."
  badge="Q2 2026"
  year="2026"
/>
<PortfolioCard
  to="/contact"
  logo={<IconTesting />}
  name="Nexora"
  text="In-depth web application penetration testing and secure code review. We safely exploited critical flaws prior to their major product launch."
  badge="Q3 2025"
  year="2025"
/>
<PortfolioCard
  to="/contact"
  logo={<IconProtection />}
  name="Syncell"
  text="Cloud infrastructure audit and zero-trust policy implementation. Hardened their environment to meet strict financial data compliance standards."
  badge="Q1 2024"
  year="2024"
/>
          </Reveal>
        </div>
      </section>

      {/*  OUR APPROACH  */}
      <div className="hs-wrap">
        <section className="hs-panel">
          <div className="hs-approach-grid">
            <Reveal className="hs-approach-left">
              <p className="hs-label">How we work</p>
              <h2 className="hs-title">Our approach</h2>
              <p className="hs-text hs-approach-text">
                Every engagement follows the same three steps, so you always know what is happening,
                what it will take and what you get at the end.
              </p>
              <div className="hs-actions-left">
                <PrimaryButton to="/contact">Get started</PrimaryButton>
              </div>
            </Reveal>

            <Reveal className="hs-tabs" delay={120}>
              <ApproachTab
                title="Discovery"
                text="We learn your systems, risks and business priorities, then agree on scope and rules of engagement before anything is tested."
                icon={<IconDiscovery />}
                number="01"
                open={activeTab === 0}
                onSelect={() => setActiveTab(0)}
              />
              <ApproachTab
                title="Testing"
                text="Our team attacks the way a real adversary would, mostly by hand, and proves every weakness with evidence instead of scanner noise."
                icon={<IconTesting />}
                number="02"
                open={activeTab === 1}
                onSelect={() => setActiveTab(1)}
              />
              <ApproachTab
                title="Protection"
                text="You get a clear report with fix steps, and we help close the gaps and retest, so the problems are solved and not only documented."
                icon={<IconProtection />}
                number="03"
                open={activeTab === 2}
                onSelect={() => setActiveTab(2)}
              />
            </Reveal>
          </div>
        </section>
      </div>

      {/*  INDUSTRIES WE SECURE  */}
      <section className="hs-industries">
        <img
          className="hs-inv-bg"
          src={CDN + "68cdeb521c2cdde8a26ce80b_our-investments-bg-gradient-equity-webflow-template.png"}
          alt=""
        />
        <span className="hs-inv-square hs-sq-5" aria-hidden="true"></span>
        <span className="hs-inv-square hs-sq-6" aria-hidden="true"></span>

        <div className="hs-container hs-inv-inner">
          <div className="hs-inv-top">
            <div className="hs-inv-cell">
              <div className="hs-inv-card">
                <span className="hs-inv-icon"><IconFinance /></span>
                <span>Finance & Fintech</span>
              </div>
              <span className="hs-inv-square hs-sq-1" aria-hidden="true"></span>
            </div>
            <div className="hs-inv-cell hs-inv-cell-raised">
              <div className="hs-inv-card">
                <span>SaaS & Cloud</span>
                <span className="hs-inv-icon"><IconCloud /></span>
              </div>
              <span className="hs-inv-square hs-sq-2" aria-hidden="true"></span>
            </div>
          </div>

          <Reveal className="hs-inv-center">
            <p className="hs-label">Who we protect</p>
            <h2 className="hs-title">Industries we secure</h2>
            <p className="hs-text hs-center-text">
              Different industries face different attackers and different regulations. We adapt the
              testing, the reporting and the advice to the risks that matter in yours.
            </p>
            <div className="hs-actions-center">
              <PrimaryButton to="/contact">Get started</PrimaryButton>
            </div>
          </Reveal>

          <div className="hs-inv-bottom">
            <div className="hs-inv-cell">
              <div className="hs-inv-card">
                <span>Healthcare</span>
                <span className="hs-inv-icon"><IconHealth /></span>
              </div>
              <span className="hs-inv-square hs-sq-3" aria-hidden="true"></span>
            </div>
            <div className="hs-inv-cell">
              <div className="hs-inv-card">
                <span className="hs-inv-icon"><IconShop /></span>
                <span>E-commerce</span>
              </div>
              <span className="hs-inv-square hs-sq-4" aria-hidden="true"></span>
            </div>
          </div>
        </div>
      </section>

      {/*  CTA  */}
      <div className="hs-wrap">
        <section className="hs-cta">
          <div className="hs-cta-bg cta-orange.css" aria-hidden="true">
            <img
              src={CDN + "686d64b6b73715c8c3dcfd5c_cta-v1-bg-equity-webflow-template.jpg"}
              alt=""
              loading="lazy"
            />
          </div>
          <Reveal className="hs-cta-content">
            <p className="hs-cta-label">Get in touch</p>
            <h2 className="hs-title hs-title-light">Find your weak spots before attackers do</h2>
            <p className="hs-text hs-text-light hs-cta-text">
              Tell us what you need to protect and we will come back with a clear scope, a timeline
              and a fixed price, with no sales pitch and no jargon.
            </p>
            <div className="hs-actions-left">
              <PrimaryButton to="/contact">Get started</PrimaryButton>
            </div>
          </Reveal>
        </section>
      </div>

      {/* FAQ  */}
      <section className="hs-section hs-faq-section">
        <div className="hs-container">
          <Reveal className="hs-title-row">
            <div>
              <p className="hs-label">Frequently asked questions</p>
              <h2 className="hs-title">Common questions</h2>
            </div>
            <PrimaryButton to="/contact">Contact Us</PrimaryButton>
          </Reveal>

          <div className="hs-faq-list">
            {FAQ_ITEMS.map((item, i) => (
              <FaqItem
                key={item.q}
                number={String(i + 1).padStart(2, "0")}
                title={item.q}
                text={item.a}
                open={openFaq === i}
                onToggle={() => toggleFaq(i)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeSections;