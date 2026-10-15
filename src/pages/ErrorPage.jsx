import { Link } from "react-router-dom";
import HeaderComponent from "../Components/HeaderComponent";
import FooterComponent from "../Components/FooterComponent";
import "./ErrorPage.css";

const ArrowRight = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14px" viewBox="0 0 16 15" fill="none">
        <path
            d="M7.8589 0.996826L14.1772 7.02789M14.1772 7.02789L7.8589 13.059M14.1772 7.02789L1.87854 7.02789"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default function ErrorPage() {
    return (
        <>
            <HeaderComponent HeaderText='I think you have lost'
                ruta="/"
                pageHeaderText="Something unusual has occurred"
            />

            <section className="error-page">
                <div className="container-default">

                    <div className="error-inner">

                        <div className="error-code">
                            <span>4</span>
                            <span className="error-code-zero">
                                <span className="error-code-zero-ring"></span>
                                <span className="error-code-zero-dot"></span>
                            </span>
                            <span>4</span>
                        </div>

                        <h1 className="error-title">Page not found</h1>

                        <p className="error-text">
                            The page you are looking for might have been removed,
                            had its name changed, or is temporarily unavailable.
                        </p>

                        <div className="error-actions">
                            <Link to="/" className="error-btn error-btn-primary">
                                <span>Back to home</span>
                                <span className="error-btn-arrow"><ArrowRight /></span>
                            </Link>

                            <Link to="/company-pages/contact" className="error-btn error-btn-outline">
                                Contact support
                            </Link>
                        </div>

                    </div>

                </div>
            </section>

            <FooterComponent />
        </>
    );
}