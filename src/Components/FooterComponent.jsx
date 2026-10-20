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

const FOOTER_COLUMNS = [
    {
        title: "Penetration Testing",
        links: [
            { href: "/professional-services/Web-Application-Pen-Testing", label: "Web Application Pen Testing" },
            { href: "/professional-services/External-Network-Pen-Testing", label: "External Network Pen Testing" },
            { href: "/professional-services/Internal-Network-Pen-Testing", label: "Internal Network Pen Testing" },
            { href: "/professional-services/LLM-AI-Pen-Testing", label: "LLM & AI Pen Testing" },
            { href: "/professional-services/Social-Engineering", label: "Social Engineering" },
            { href: "/professional-services/Red-Team-Ops", label: "Red Team Ops" },
            { href: "/professional-services/Iot-Hardware-Hacking", label: "IoT & Hardware Hacking" },
        ],
    },
    {
        title: "Assessments & Training",
        links: [
            { href: "/professional-services/VulnerAbility-Assesment", label: "Vulnerability Assessment" },
            { href: "/professional-services/Cloud-Audit-Assesment", label: "Cloud Audit Assessment" },
            { href: "/professional-services/Sec-Awarenes-Training", label: "Security Awareness Training" },
        ],
    },
    {
        title: "Compliance & Response",
        links: [
            { href: "/professional-services/Fractional-Ciso", label: "Fractional CISO" },
            { href: "/professional-services/Compliance-Readines", label: "Compliance Readiness" },
            { href: "/professional-services/Remediation-assistance", label: "Remediation Assistance" },
            { href: "/professional-services/Incident-Response", label: "Incident Response" },
            { href: "/professional-services/Digital-Forensic", label: "Digital Forensics" },
        ],
    },
    {
        title: "Company",
        links: [
            { href: "/", label: "Home" },
            { href: "/contact", label: "Contact Us" },
        ],
    },
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
                        Start your security journey today
                    </h2>

                    {/* <p className="footer-subtext anim-item">
                        Lorem ipsum dolor sit amet consectetur lacus sed nam varius quis
                        pharetra arcu id amet et vehicula a eget facilisis nec porta interdum
                        lorem pharetra proin ac lacus.
                    </p> */}

                    <div className="anim-item">
                        <Link to="/contact" className="primary-button">
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
                    {FOOTER_COLUMNS.map((col) => (
                        <div className="footer-column" key={col.title}>
                            <h4 className="footer-column-title">{col.title}</h4>
                            <ul className="footer-links-list">
                                {col.links.map((l) => (
                                    <li key={l.href}>
                                        <Link to={l.href} className="footer-link">
                                            <span>{l.label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* ============ BOTTOM — copyright ============ */}
                <div className="footer-bottom anim-item">
                    <p className="footer-copyright">
                        Copyright © Tensilesecurity&nbsp;&nbsp;|&nbsp;&nbsp;Designed and developed by{" "}
                        <Link to="/" className="footer-copyright-link">Lazic</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}