import { useEffect, useRef, useState } from "react";
import "../Components/footer.css";
import { Link } from "react-router-dom";

/* ============================================================
   SVG
   ============================================================ */
const ArrowRight = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14px" viewBox="0 0 16 15"
         fill="none" className="button-arrow">
        <path
            d="M7.8589 0.996826L14.1772 7.02789M14.1772 7.02789L7.8589 13.059M14.1772 7.02789L1.87854 7.02789"
            stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"
        />
    </svg>
);

/* ============================================================
   Podaci
   ============================================================ */
const MAIN_PAGES_LEFT = [
    { href: "/", label: "Home" },
    { href: "/contact", label: "Contact" },
    { href: "/aboutUs", label: "About us" },
    { href: "/", label: "neki route" },
];

const MAIN_PAGES_RIGHT = [
    { href: "/company-pages/contact", label: "Contact" },
    { href: "/company-pages/investors", label: "Investors" },
    { href: "/investors/john-carter", label: "Investor single" },
    { href: "/company-pages/coming-soon", label: "Coming soon" },
];

const UTILITY_PAGES = [
    { href: "/contact", label: "Contact us" },
    { href: "/sign-up", label: "Sign up" },
    { href: "/reset-password", label: "Reset password" },
    { href: "/update-password", label: "Update password" },
];

/* ============================================================
   FooterComponent
   ============================================================ */
export default function FooterComponent() {
    const [isVisible, setIsVisible] = useState(false);
    const wrapperRef = useRef(null);

    /* scroll reveal — fade-in kad uđe u viewport */
    useEffect(() => {
        const node = wrapperRef.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <footer
            ref={wrapperRef}
            className={`footer-wrapper${isVisible ? " is-visible" : ""}`}
        >
            <div className="container-default footer-container">

                {/* ============ TOP — heading + text + CTA ============ */}
                <div className="footer-top">
                    <h2 className="footer-heading anim-item">
                        We invest in AI companies<br />
                        shaping the future
                    </h2>

                    <p className="footer-subtext anim-item">
                        Lorem ipsum dolor sit amet consectetur lacus sed nam varius quis
                        pharetra arcu id amet et vehicula a eget facilisis nec porta interdum
                        lorem pharetra proin ac lacus.
                    </p>

                    <div className="anim-item">
                        <Link to="/get-started" className="primary-button">
                            <div className="button-content-flex gap-0">
                                <div>Get started</div>
                                <div className="button-icon-wrapper">
                                    <div className="button-icon"><ArrowRight /></div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* ============ MIDDLE — linkovi ============ */}
                <div className="footer-links anim-item">

                    {/* Main pages */}
                    <div className="footer-column">
                        <h4 className="footer-column-title">Main pages</h4>
                        <div className="footer-links-grid">
                            <ul className="footer-links-list">
                                {MAIN_PAGES_LEFT.map((l) => (
                                    <li key={l.href}>
                                        <Link to={l.href} className="footer-link">
                                            <span>{l.label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <ul className="footer-links-list">
                                {MAIN_PAGES_RIGHT.map((l) => (
                                    <li key={l.href}>
                                        <Link to={l.href} className="footer-link">
                                            <span>{l.label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Utility pages */}
                    <div className="footer-column">
                        <h4 className="footer-column-title">Utility pages</h4>
                        <ul className="footer-links-list">
                            {UTILITY_PAGES.map((l) => (
                                <li key={l.href}>
                                    <Link to={l.href} className="footer-link">
                                        <span>{l.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* ============ BOTTOM — copyright ============ */}
                <div className="footer-bottom anim-item">
                    <p className="footer-copyright">
                        Copyright © Investflow&nbsp;&nbsp;|&nbsp;&nbsp;Designed and developed by{" "}
                        <Link to="/" className="footer-copyright-link">Lazic</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}