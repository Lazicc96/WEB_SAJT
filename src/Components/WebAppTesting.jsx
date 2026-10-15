import FooterComponent from "./FooterComponent.jsx";
import HeaderComponent from "./HeaderComponent.jsx";
import MiddleComponent from "./middleComponent.jsx";
import TiersSection from "./TierSection.jsx";
import Strelica from './Strelica.jsx'

function WebAppTesting() {
    
    return (
        <>
            <HeaderComponent HeaderText='Web Application Pen Testing' pageHeaderText={`Automated scanners only find 20% of vulnerabilities. We find the other 80%: the business logic errors that allow data leakage and account takeovers. If you handle PII or payments, this isn't optional. We test per OWASP Top 10 and ASVS standards.`}/>
            <TiersSection
  eyebrow="Web Application Security Lifecycle"
  heading={["From Architecture Review", "to Verified Exploitation."]}
  tiers={[
    {
      title: "Threat Modeling",
      lead: "Design-level flaw discovery.",
      text: "We analyze your architecture to find design-level flaws before any code is touched — preventing vulnerabilities from being engineered into the product.",
      to: "/professional-services/web-application-pen-testing",
    },
    {
      title: "Manual Assessment",
      lead: "Human-led testing of complex logic.",
      text: "Our engineers probe workflows, authorization chains, and business logic that automated scanners simply cannot reach.",
      to: "/professional-services/web-application-pen-testing",
    },
    {
      title: "Exploitation & Developer Sync",
      lead: "Verified risk and hands-on fixes.",
      text: "We safely exploit flaws to prove real-world impact, then sit down with your developers to walk through remediation line by line.",
      to: "/professional-services/web-application-pen-testing",
    },
  ]}
  buttonLabel="View Service Details"
/>
            <Strelica/>
            <MiddleComponent naslovi={["Assessments", "Advisory"]} tekst="Ovde ide tekst."/>
            <FooterComponent/>
        </>)
}

export default WebAppTesting;