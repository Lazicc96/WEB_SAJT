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
            <HeaderComponent HeaderText='Page not found'
                ruta="/"
                pageHeaderText="This page doesn't exist or has been moved."
            />

            <section className="error-page">
    <div className="container-default">
        <div className="error-inner">
            <p className="error-code">404</p>

            <p className="error-text">
                We couldn't find the page you're looking for. The link may be
                broken, or the page may have been moved.
            </p>

            <div className="error-actions">
                <Link to="/" className="error-btn error-btn-primary">
                    <span>Back to home</span>
                    <span className="error-btn-arrow"><ArrowRight /></span>
                </Link>

                <Link to="/contact" className="error-btn error-btn-outline">
                    Contact us
                </Link>
            </div>
        </div>
    </div>
</section>

            <FooterComponent />
        </>
    );
}