import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./homesections.css";

// Slike su iz originalnog template-a (isti CDN kao u tvom HTML-u)
const CDN = "https://cdn.prod.website-files.com/686b7d020ea82bd1ba5003a8/";
const CDN_PORTFOLIO = "https://cdn.prod.website-files.com/686b7d020ea82bd1ba5003b1/";
const QUOTE_ICON = CDN + "686d8611ca20e232f338016a_quote-icon-equity-webflow-template.svg";

/* =========================================================
   POMOĆNE KOMPONENTE
   ========================================================= */

// Scroll reveal (fade + slide up) — zamena za .anim-fade-up iz originalnog skripta
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
          <img className="hs-pcard-logo" src={logo} alt={name} loading="lazy" width="64" height="64" />
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

// Tab iz sekcije "Our approach" (accordion)
function ApproachTab({ title, text, image, number, open, onSelect }) {
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
          <span className="hs-link">
            <span>Learn more</span>
            <ChevronRight />
          </span>
          <div className="hs-tab-image">
            <img src={image} alt={title} loading="lazy" />
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

/* =========================================================
   GLAVNA KOMPONENTA
   Napomena: "About us" i uvod "Investment highlights" su već u HeaderComponent,
   pa ova komponenta počinje od kartica portfolija.
   ========================================================= */
function HomeSections() {
  const [activeTab, setActiveTab] = useState(0); // koji tab je otvoren u "Our approach"
  const [openFaq, setOpenFaq] = useState(0); // koji FAQ je otvoren (null = nijedan)

  const toggleFaq = (i) => setOpenFaq((prev) => (prev === i ? null : i));

  return (
    <div className="hs-root">
      {/* ================= INVESTMENT HIGHLIGHTS — kartice ================= */}
      <section className="hs-section hs-cards-section">
        <div className="hs-container">
          <Reveal className="hs-cards-grid">
            <PortfolioCard
              to="/portfolio/converra"
              logo={CDN_PORTFOLIO + "686bf9992d7e4e9f2a1a1dbc_converra-logo-equity-webflow-template.svg"}
              name="Converra"
              text="Lorem ipsum dolor sit amet consectetur nibh nunc luctus iaculis posuere adipiscing platea tortor magna orci netus."
              badge="Q2 2026"
              year="2026"
            />
            <PortfolioCard
              to="/portfolio/nexora"
              logo={CDN_PORTFOLIO + "686bf9623211842a0ab26d79_nexora-logo-equity-webflow-template.svg"}
              name="Nexora"
              text="Lorem ipsum dolor sit amet consectetur nibh nunc luctus iaculis posuere adipiscing platea tortor magna orci netus."
              badge="Q3 2025"
              year="2025"
            />
            <PortfolioCard
              to="/portfolio/syncell"
              logo={CDN_PORTFOLIO + "686bf9435ad0d20e7248c08a_syncell-logo-equity-webflow-template.svg"}
              name="Syncell"
              text="Lorem ipsum dolor sit amet consectetur nibh nunc luctus iaculis posuere adipiscing platea tortor magna orci netus."
              badge="Q1 2024"
              year="2024"
            />
          </Reveal>
        </div>
      </section>

      {/* ================= OUR APPROACH ================= */}
      <div className="hs-wrap">
        <section className="hs-panel">
          <div className="hs-approach-grid">
            <Reveal className="hs-approach-left">
              <p className="hs-label">Our process</p>
              <h2 className="hs-title">Our approach</h2>
              <p className="hs-text hs-approach-text">
                Lorem ipsum dolor sit amet consectetur lacus sed nam varius quis pharetra arcu id amet et
                vehicula a eget.
              </p>
              <div className="hs-actions-left">
                <PrimaryButton to="/contact">Get started</PrimaryButton>
              </div>
            </Reveal>

            <Reveal className="hs-tabs" delay={120}>
              <ApproachTab
                title="Discovery"
                text="Lorem ipsum dolor sit amet consectetur nibh nunc luctus iaculis posuere adipiscing."
                image={CDN + "686d2789c769c320447ba2d8_discovery-equity-webflow-template.jpg"}
                number="01"
                open={activeTab === 0}
                onSelect={() => setActiveTab(0)}
              />
              <ApproachTab
                title="Research"
                text="Lorem ipsum dolor sit amet consectetur nibh nunc luctus iaculis posuere adipiscing."
                image={CDN + "686d2789d5c2ffb3eb54e8fb_research-equity-webflow-template.jpg"}
                number="02"
                open={activeTab === 1}
                onSelect={() => setActiveTab(1)}
              />
              <ApproachTab
                title="Investment"
                text="Lorem ipsum dolor sit amet consectetur nibh nunc luctus iaculis posuere adipiscing."
                image={CDN + "686d27952ceafd7ef3fa1388_investment-equity-webflow-template.jpg"}
                number="03"
                open={activeTab === 2}
                onSelect={() => setActiveTab(2)}
              />
            </Reveal>
          </div>
        </section>
      </div>

      {/* ================= INDUSTRIES WE INVEST IN ================= */}
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
                <span className="hs-inv-icon">
                  <img src={CDN + "686b903254105547e3a18c0f_automation-icon-equity-webflow-template.svg"} alt="" />
                </span>
                <span>AI Automation</span>
              </div>
              <span className="hs-inv-square hs-sq-1" aria-hidden="true"></span>
            </div>
            <div className="hs-inv-cell hs-inv-cell-raised">
              <div className="hs-inv-card">
                <span>AI Infrastructure</span>
                <span className="hs-inv-icon">
                  <img src={CDN + "686b9035a5b90558f5d460f3_infrastructure-icon-equity-webflow-template.svg"} alt="" loading="lazy" />
                </span>
              </div>
              <span className="hs-inv-square hs-sq-2" aria-hidden="true"></span>
            </div>
          </div>

          <Reveal className="hs-inv-center">
            <p className="hs-label">Our investments</p>
            <h2 className="hs-title">Industries we invest in</h2>
            <p className="hs-text hs-center-text">
              Lorem ipsum dolor sit amet consectetur lacus sed nam varius quis pharetra arcu id amet et vehicula
              a eget facilisis nec porta interdum lorem pharetra.
            </p>
            <div className="hs-actions-center">
              <PrimaryButton to="/contact">Get started</PrimaryButton>
            </div>
          </Reveal>

          <div className="hs-inv-bottom">
            <div className="hs-inv-cell">
              <div className="hs-inv-card">
                <span>Generative AI</span>
                <span className="hs-inv-icon">
                  <img src={CDN + "686b903275247e0631b98f4b_generative-ai-icon-equity-webflow-template.svg"} alt="" loading="lazy" />
                </span>
              </div>
              <span className="hs-inv-square hs-sq-3" aria-hidden="true"></span>
            </div>
            <div className="hs-inv-cell">
              <div className="hs-inv-card">
                <span className="hs-inv-icon">
                  <img src={CDN + "686b90323caf6fdccb51962c_healthcare-icon-equity-webflow-template.svg"} alt="" loading="lazy" />
                </span>
                <span>Healthcare AI</span>
              </div>
              <span className="hs-inv-square hs-sq-4" aria-hidden="true"></span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <div className="hs-wrap">
        <section className="hs-cta">
          <div className="hs-cta-bg" aria-hidden="true">
            <img
              src={CDN + "686d64b6b73715c8c3dcfd5c_cta-v1-bg-equity-webflow-template.jpg"}
              alt=""
              loading="lazy"
            />
          </div>
          <Reveal className="hs-cta-content">
            <p className="hs-cta-label">Get in touch</p>
            <h2 className="hs-title hs-title-light">Backing AI companies shaping tomorrow</h2>
            <p className="hs-text hs-text-light hs-cta-text">
              Lorem ipsum dolor sit amet consectetur tortor at integer ultricies etiam velit rhoncus pharetra
              vitae nulla in pellentesque tempus.
            </p>
            <div className="hs-actions-left">
              <PrimaryButton to="/contact">Get started</PrimaryButton>
            </div>
          </Reveal>
        </section>
      </div>

      {/* ================= FAQ ================= */}
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
            <FaqItem
              number="01"
              title="Are you actively doing investments?"
              text="Lorem ipsum dolor sit amet consectetur lacus sed nam varius quis pharetra arcu id amet et vehicula a eget facilisis nec porta interdum lorem pharetra."
              open={openFaq === 0}
              onToggle={() => toggleFaq(0)}
            />
            <FaqItem
              number="02"
              title="What is the typical investment amount?"
              text="Lorem ipsum dolor sit amet consectetur lacus sed nam varius quis pharetra arcu id amet et vehicula a eget facilisis nec porta interdum lorem pharetra."
              open={openFaq === 1}
              onToggle={() => toggleFaq(1)}
            />
            <FaqItem
              number="03"
              title="How can we get in touch to pitch our company?"
              text="Lorem ipsum dolor sit amet consectetur lacus sed nam varius quis pharetra arcu id amet et vehicula a eget facilisis nec porta interdum lorem pharetra."
              open={openFaq === 2}
              onToggle={() => toggleFaq(2)}
            />
            <FaqItem
              number="04"
              title="Are you open to partnership?"
              text="Lorem ipsum dolor sit amet consectetur lacus sed nam varius quis pharetra arcu id amet et vehicula a eget facilisis nec porta interdum lorem pharetra."
              open={openFaq === 3}
              onToggle={() => toggleFaq(3)}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeSections;
