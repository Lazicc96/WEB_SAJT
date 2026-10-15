import FooterComponent from "./FooterComponent.jsx";
import HeaderComponent from "./HeaderComponent.jsx";
import Strelica from './Strelica.jsx'
import TiersSection from "./TierSection.jsx";
import MiddleComponent from "./middleComponent.jsx";

function Incident_Response(){

    return (
    <>
            <HeaderComponent HeaderText={'Incident Response Services'} pageHeaderText={'We deliver structured, adaptable, and expert-driven IR services, built not only to neutralize active threats, but also to strengthen long-term resilience. From proactive planning to critical response and ongoing readiness, we empower organizations of all sizes move from panic to preparedness.'}/>
            <TiersSection
  eyebrow="Incident Response Lifecycle"
  heading={["When Minutes Matter,", "We Move First."]}
  tiers={[
    {
      title: "Triage & Scoping",
      lead: "First responders on the line within the hour.",
      text: "We pick up, get on a call, and start pulling logs while you're still deciding who to notify. The first hour decides whether it's a bad day or a bad quarter — we treat it that way.",
      to: "/professional-services/incident-response",
    },
    {
      title: "Containment",
      lead: "Stop the bleeding without burning the evidence.",
      text: "We isolate affected systems, cut lateral movement paths, and rotate credentials — but we do it in a way that preserves forensic artifacts you'll need later for legal, insurance, or regulatory purposes.",
      to: "/professional-services/incident-response",
    },
    {
      title: "Eradication & Recovery",
      lead: "Get you back to operations safely.",
      text: "Root cause identified, backdoors removed, systems rebuilt with hardened configs. We don't hand you back a machine until we're confident the attacker isn't walking back in through the same door.",
      to: "/professional-services/incident-response",
    },
  ]}
  buttonLabel="View Service Details"
/>
            <MiddleComponent/>
            <Strelica/>
            <FooterComponent/>
    </>)

}

export default Incident_Response;