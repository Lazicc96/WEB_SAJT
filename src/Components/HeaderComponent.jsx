import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { getHeaderImage } from "./Headerimages.js";
import "./headerstyle.css";

// U NAV BAR CE DA SPADA KADA IDEM ON FOCUS NA PROFESSIONAL SERVICES OVO:
// 1. Penetration tesing
// 2. Ispod da bude assesments
// 3. Ispod da bude Incident Response
// 4. Digital Forensics
// 5. ZA SVAKI SUB BULET CE DA BUDE TACNO ONO STO SPADA U TO NPR PEN TESTING UIZIMAM SA ZIVANOVICEVOG SAJTA
//  DA BULETE ....
// 6. DA NEMA SUB BULETE: DIGITAL FORENSIC I INCIDENT RESPONSE
// NARANDZASTA BOJA SAJTA, HEADER CE DA BUDE U NEKOM LINEAR GRADIENTU,logo cekamo sl nedelje
// 7. DA SE IZBACI TESTIMONIALS
// 8. IMAGE.PNG SA https://obsidigon.com/contact DA ISKOPIRAM  I URADIM zakazivanje poziva
// 9. REMOVE SEKCIJU NA /CONTACT SA PHPOM DA BUDE GOOGLE ZAKAZIVANJE

const MOBILE_BREAKPOINT = 991;
const CLOSE_DELAY = 260;
const STICKY_OFFSET = 80;

function Chevron() {
  return (
    <svg className="chevron" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
      <path
        d="M2 4l4 4 4-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeaderComponent({ children, ruta = "/", pageHeaderText, HeaderText, linkovanje }) {
  const { pathname } = useLocation();
  const image = getHeaderImage(pathname);

  const PRO_SERVICES = [
    {
      key: "Penetration Testing",
      label: "Penetration Testing",
      links: [
        {label: "Web Application Pen Testing", path: "/professional-services/Web-Application-Pen-Testing"},
        {label:"External Network Pen Testing", path:"/professional-services/External-Network-Pen-Testing"},
        {label:"Internal Netowrk Pen Testing", path:"/professional-services/Internal-Network-Pen-Testing"},
        {label:"LLM & AI Pen Testing", path:"/professional-services/LLM-AI-Pen-Testing"},
        {label:"Social Engineering", path:"/professional-services/Social-Engineering"},
        {label:"Red Team Ops", path:"/professional-services/Red-Team-Ops"},
        {label:"IoT & Hardware Hacking", path:"/professional-services/Iot-Hardware-Hacking"}
      ],
    },
     {
      key: "Assesments",
      label: "Assesments&Training",
      links: [
        { label: "Vulnerability Assesment", path: "/professional-services/VulnerAbility-Assesment" },
        { label: "Cloud Audit Assesment", path: "/professional-services/Cloud-Audit-Assesment" },
        // {label:"Compliance Advisory", path:"/professional-services/Compliance-Advisory"},
        {label:"Security Awareness Training", path:"/professional-services/Sec-Awarenes-Training"}
      ],
    },
    { key:"Compliance and advisory",
      label:"Compliance and advisory",
      links:[
      {label:"Fractional Ciso",path:"/professional-services/Fractional-Ciso"},
      {label:"Compliance readines",path:"/professional-services/Compliance-Readines"},
      {label:"Remediation assistance as a service",path:"/professional-services/Remediation-assistance"}
    ]},
    {
      key: "incident",
      label: "Incident Response",
      path: "/professional-services/Incident-Response",
    },
    {key:"Digital Forensic",
      label:"Ditigal Forensic",
      path:"/professional-services/Digital-Forensic"
    },
    

    
  ];

  const navigate = useNavigate();

  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProOpen, setIsProOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [activeProCategory, setActiveProCategory] = useState("assessments");
  const [mobileProCategory, setMobileProCategory] = useState(null);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth <= MOBILE_BREAKPOINT
  );

  const headerRef = useRef(null);
  const proCloseTimer = useRef(null);
  const aboutCloseTimer = useRef(null);

  const clearTimers = () => {
    clearTimeout(proCloseTimer.current);
    clearTimeout(aboutCloseTimer.current);
  };

  const closeDropdowns = () => {
    clearTimers();
    setIsProOpen(false);
    setIsAboutOpen(false);
    setMobileProCategory(null);
  };

  const closeAll = () => {
    closeDropdowns();
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > STICKY_OFFSET);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      const mobile = window.innerWidth <= MOBILE_BREAKPOINT;
      setIsMobile(mobile);
      if (!mobile) {
        setMobileMenuOpen(false);
        setMobileProCategory(null);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onPointerDown = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        closeDropdowns();
      }
    };
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeDropdowns();
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown, { passive: true });
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isMobileMenuOpen && isMobile);
    return () => document.body.classList.remove("menu-open");
  }, [isMobileMenuOpen, isMobile]);

  useEffect(() => clearTimers, []);

  const handleProEnter = () => {
    if (isMobile) return;
    clearTimeout(proCloseTimer.current);
    clearTimeout(aboutCloseTimer.current);
    setIsAboutOpen(false);
    setIsProOpen(true);
  };

  const handleProLeave = () => {
    if (isMobile) return;
    clearTimeout(proCloseTimer.current);
    proCloseTimer.current = setTimeout(() => setIsProOpen(false), CLOSE_DELAY);
  };

  const handleProToggleClick = () => {
    if (isMobile) {
      setIsProOpen((prev) => !prev);
      setIsAboutOpen(false);
    } else {
      setIsProOpen(true);
    }
  };

  const handleProCategoryEnter = (key) => {
    if (!isMobile) setActiveProCategory(key);
  };

  const handleProCategoryClick = (key) => {
    if (isMobile) {
      setMobileProCategory((prev) => (prev === key ? null : key));
    } else {
      setActiveProCategory(key);
    }
  };

  const isPanelActive = (key) =>
    isMobile ? mobileProCategory === key : activeProCategory === key;

  const handleAboutEnter = () => {
    if (isMobile) return;
    clearTimeout(aboutCloseTimer.current);
    clearTimeout(proCloseTimer.current);
    setIsProOpen(false);
    setIsAboutOpen(true);
  };

  const handleAboutLeave = () => {
    if (isMobile) return;
    clearTimeout(aboutCloseTimer.current);
    aboutCloseTimer.current = setTimeout(() => setIsAboutOpen(false), CLOSE_DELAY);
  };

  const handleAboutToggleClick = () => {
    if (isMobile) {
      setIsAboutOpen((prev) => !prev);
      setIsProOpen(false);
    } else {
      setIsAboutOpen(true);
    }
  };

  const handleHamburger = () => {
    setMobileMenuOpen((prev) => {
      if (prev) {
        setIsProOpen(false);
        setIsAboutOpen(false);
        setMobileProCategory(null);
      }
      return !prev;
    });
  };

  const handleContactClick = () => {
    closeAll();
    navigate("/contact");
  };

  const headerClass = [
    "header",
    isSticky ? "is-sticky" : "",
    isMobileMenuOpen ? "is-menu-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="header-wrapper">
      <div className="hero-card">
        <div className="hero-bg" aria-hidden="true">
          <span className="hero-grid"></span>
        </div>

        <header ref={headerRef} className={headerClass}>
          <div className="header-inner">
            <Link to={ruta} className="header-logo-link" onClick={closeAll} aria-label="Investflow — početna">
              <img className="header-logo-white" src="/src/assets/logo-gagi-light.png" alt="" />
              <img className="header-logo-dark" src="/images/logo-gagi-dark.png" alt="" aria-hidden="true" />
            </Link>

            <div className="header-right">
              <nav className={`nav-menu ${isMobileMenuOpen ? "is-open" : ""}`} aria-label="Glavna navigacija">
                <ul className="nav-list">
                  {/* PROFESSIONAL SERVICES  */}
                  <li
                    className={`nav-item nav-item-pro ${isProOpen ? "is-open" : ""}`}
                    onMouseEnter={handleProEnter}
                    onMouseLeave={handleProLeave}
                  >
                    <button
                      type="button"
                      className="nav-toggle"
                      aria-expanded={isProOpen}
                      aria-haspopup="true"
                      onClick={handleProToggleClick}
                    >
                      <span>Professional Services</span>
                      <Chevron />
                    </button>

                    <div className={`mega pro-mega ${isProOpen ? "is-open" : ""}`}>
                      <ul className="pro-cats">
                        {PRO_SERVICES.map((cat) => (
                          <li key={cat.key} className="pro-cat-item">
                            {cat.path && !cat.links ? (
                              <Link to={cat.path} className="pro-cat pro-cat-link" onClick={closeAll}>
                                <span>{cat.label}</span>
                              </Link>
                            ) : (
                              <>
                                <button
                                  type="button"
                                  className={`pro-cat ${isPanelActive(cat.key) ? "is-active" : ""}`}
                                  aria-expanded={isPanelActive(cat.key)}
                                  onMouseEnter={() => handleProCategoryEnter(cat.key)}
                                  onClick={() => handleProCategoryClick(cat.key)}
                                >
                                  <span>{cat.label}</span>
                                  <Chevron />
                                </button>

                                <div className={`pro-panel ${isPanelActive(cat.key) ? "is-active" : ""}`}>
                                  {cat.links.map((link) => (
                                    <Link key={link.path} to={link.path} className="mega-link" onClick={closeAll}>
                                      <span className="link-animation-wrapper">
                                        <span className="link-swap-a">{link.label}</span>
                                        <span className="link-swap-b" aria-hidden="true">{link.label}</span>
                                      </span>
                                    </Link>
                                  ))}
                                </div>
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>

                  {/* ---------- 2. MANAGED SERVICES ---------- */}
                  <li className="nav-item">
                    <Link to={linkovanje} className="nav-link" onClick={closeAll}>
                      <span className="link-animation-wrapper"><span className="link-swap-a">Managed Services</span><span className="link-swap-b" aria-hidden="true">Managed Services</span></span>
                    </Link>
                  </li>

                  {/* ---------- 3. ABOUT US ----------
                  <li
                    className={`nav-item nav-item-about ${isAboutOpen ? "is-open" : ""}`}
                    onMouseEnter={handleAboutEnter}
                    onMouseLeave={handleAboutLeave}
                  >
                    <button
                      type="button"
                      className="nav-toggle"
                      aria-expanded={isAboutOpen}
                      aria-haspopup="true"
                      onClick={handleAboutToggleClick}
                    >
                      <span>About Us</span>
                      <Chevron />
                    </button>

                    <div className={`mega about-mega ${isAboutOpen ? "is-open" : ""}`}>
                      <div className="mega-section">
                        <h3 className="mega-section-title">All Pages</h3>
                        <div className="mega-cols mega-cols-4">
                          <ul className="mega-col">
                            <li><Link to="/" className="mega-link" onClick={closeAll}><span className="link-animation-wrapper"><span className="link-swap-a">Home</span><span className="link-swap-b" aria-hidden="true">Home V1</span></span></Link></li>
                            <li><Link to="/professional-services/Web-Application-Pen-Testing" className="mega-link" onClick={closeAll}><span className="link-animation-wrapper"><span className="link-swap-a">Web Application Testing</span><span className="link-swap-b" aria-hidden="true">Home V2</span></span></Link></li>
                            <li><Link to="/home-pages/home-v3" className="mega-link" onClick={closeAll}><span className="link-animation-wrapper"><span className="link-swap-a">Home V3</span><span className="link-swap-b" aria-hidden="true">Home V3</span></span></Link></li>
                            <li><Link to="/company-pages/about" className="mega-link" onClick={closeAll}><span className="link-animation-wrapper"><span className="link-swap-a">About</span><span className="link-swap-b" aria-hidden="true">About</span></span></Link></li>
                          </ul>

                          <ul className="mega-col">
                            <li><Link to="/portfolio-pages/portfolio-v1" className="mega-link" onClick={closeAll}><span className="link-animation-wrapper"><span className="link-swap-a">Portfolio V1</span><span className="link-swap-b" aria-hidden="true">Portfolio V1</span></span></Link></li>
                            <li><Link to="/portfolio-pages/portfolio-v2" className="mega-link" onClick={closeAll}><span className="link-animation-wrapper"><span className="link-swap-a">Portfolio V2</span><span className="link-swap-b" aria-hidden="true">Portfolio V2</span></span></Link></li>
                            <li><Link to="/portfolio-pages/portfolio-v3" className="mega-link" onClick={closeAll}><span className="link-animation-wrapper"><span className="link-swap-a">IoT Hardware Hacking</span><span className="link-swap-b" aria-hidden="true">Portfolio V3</span></span></Link></li>
                            <li><Link to="/portfolio/converra" className="mega-link" onClick={closeAll}><span className="link-animation-wrapper"><span className="link-swap-a">Portfolio single</span><span className="link-swap-b" aria-hidden="true">Portfolio single</span></span></Link></li>
                          </ul>

                          <ul className="mega-col">
                            <li><Link to="/blog-pages/blog-v1" className="mega-link" onClick={closeAll}><span className="link-animation-wrapper"><span className="link-swap-a">Contact Us</span><span className="link-swap-b" aria-hidden="true">Blog V1</span></span></Link></li>
                            <li><Link to="/blog-pages/blog-v2" className="mega-link" onClick={closeAll}><span className="link-animation-wrapper"><span className="link-swap-a">Internal Network Pen Testing</span><span className="link-swap-b" aria-hidden="true">Blog V2</span></span></Link></li>
                            <li><Link to="/blog-pages/blog-v3" className="mega-link" onClick={closeAll}><span className="link-animation-wrapper"><span className="link-swap-a">External Network Pen Testing</span><span className="link-swap-b" aria-hidden="true">Blog V3</span></span></Link></li>
                            <li><Link to="/blog-posts/we-are-leading-series-a-investment-round-for-brix-templates" className="mega-link" onClick={closeAll}><span className="link-animation-wrapper"><span className="link-swap-a">Blog post</span><span className="link-swap-b" aria-hidden="true">Blog post</span></span></Link></li>
                          </ul>

                          <ul className="mega-col">
                            <li><Link to="/company-pages/contact" className="mega-link" onClick={closeAll}><span className="link-animation-wrapper"><span className="link-swap-a">Contact</span><span className="link-swap-b" aria-hidden="true">Contact</span></span></Link></li>
                            <li><Link to="/company-pages/investors" className="mega-link" onClick={closeAll}><span className="link-animation-wrapper"><span className="link-swap-a">Investors</span><span className="link-swap-b" aria-hidden="true">Investors</span></span></Link></li>
                            <li><Link to="/investors/john-carter" className="mega-link" onClick={closeAll}><span className="link-animation-wrapper"><span className="link-swap-a">Investor single</span><span className="link-swap-b" aria-hidden="true">Investor single</span></span></Link></li>
                            <li><Link to="/company-pages/coming-soon" className="mega-link" onClick={closeAll}><span className="link-animation-wrapper"><span className="link-swap-a">Coming soon</span><span className="link-swap-b" aria-hidden="true">Coming soon</span></span></Link></li>
                          </ul>
                        </div>
                      </div>

                      <div className="mega-section mega-section-template">
                        <h3 className="mega-section-title">Template pages</h3>
                        <div className="mega-cols mega-cols-2">
                          <ul className="mega-col">
                            <li><Link to="/template-pages/start-here" className="mega-link" onClick={closeAll}><span className="link-animation-wrapper"><span className="link-swap-a">Start here</span><span className="link-swap-b" aria-hidden="true">Start here</span></span></Link></li>
                            <li><Link to="/template-pages/style-guide" className="mega-link" onClick={closeAll}><span className="link-animation-wrapper"><span className="link-swap-a">Style guide</span><span className="link-swap-b" aria-hidden="true">Style guide</span></span></Link></li>
                            <li><Link to="/404" className="mega-link" onClick={closeAll}><span className="link-animation-wrapper"><span className="link-swap-a">404 not found</span><span className="link-swap-b" aria-hidden="true">404 not found</span></span></Link></li>
                            <li><Link to="/401" className="mega-link" onClick={closeAll}><span className="link-animation-wrapper"><span className="link-swap-a">Password protected</span><span className="link-swap-b" aria-hidden="true">Password protected</span></span></Link></li>
                          </ul>

                          <ul className="mega-col">
                            <li><Link to="/template-pages/licenses" className="mega-link" onClick={closeAll}><span className="link-animation-wrapper"><span className="link-swap-a">Licenses</span><span className="link-swap-b" aria-hidden="true">Licenses</span></span></Link></li>
                            <li><Link to="/template-pages/changelog" className="mega-link" onClick={closeAll}><span className="link-animation-wrapper"><span className="link-swap-a">Changelog</span><span className="link-swap-b" aria-hidden="true">Changelog</span></span></Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>

                  {/* ---------- 4. PORTFOLIO ---------- */}
                </ul>
              </nav>

              <button type="button" className="btn-primary" onClick={handleContactClick}>
                <span className="btn-primary-text">Contact us</span>
                <span className="btn-arrow" aria-hidden="true">
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
              </button>

              <button
                type="button"
                className={`hamburger ${isMobileMenuOpen ? "is-open" : ""}`}
                aria-label={isMobileMenuOpen ? "Zatvori meni" : "Otvori meni"}
                aria-expanded={isMobileMenuOpen}
                onClick={handleHamburger}
              >
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
              </button>
            </div>
          </div> 
        </header>

        {/* ===== HERO sadržaj ===== */}
        <div className="header-hero">
          <div className="hero-copy">
            <h1 className="headerHeading">{HeaderText}</h1>
            {pageHeaderText && <p className="page-header-text">{pageHeaderText}</p>}
            {children}
          </div>

          <div className="hero-visual">
            <img className="slikaHeader" src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;