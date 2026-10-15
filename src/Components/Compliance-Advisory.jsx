import FooterComponent from "./FooterComponent.jsx";
import HeaderComponent from "./HeaderComponent.jsx";
import Strelica from './Strelica.jsx'
import TiersSection from "./TierSection.jsx";
import MiddleComponent from "./middleComponent.jsx";

function Compliance_Advisory(){

    return (
    <>
            <HeaderComponent HeaderText={'Compliance Advisory'} pageHeaderText={`Compliance doesn't have to be a nightmare. We act as your technical partners to translate vague requirements into concrete controls. We conduct gap analyses and help you implement the policies and controls needed to pass your audits with flying colors.`}/>
            <TiersSection
  eyebrow="Compliance Advisory Lifecycle"
  heading={["From Scoping", "to Auditor Readiness."]}
  tiers={[
    {
      title: "Scoping",
      lead: "Defining the boundary of the audit.",
      text: "We agree exactly what is in scope, what standard you're targeting, and what evidence will be needed.",
      to: "/professional-services/compliance-advisor",
    },
    {
      title: "Assessment",
      lead: "Current state vs. required state.",
      text: "Gap analysis across policies, controls, and evidence to show exactly where you stand today.",
      to: "/professional-services/compliance-advisor",
    },
    {
      title: "Remediation & Validation",
      lead: "Fixing gaps, ready for audit.",
      text: "We help you close the gaps and then validate readiness before the external auditor walks in.",
      to: "/professional-services/compliance-advisor",
    },
  ]}
  buttonLabel="View Service Details"
/>
            <MiddleComponent/>
            <Strelica/>
            <FooterComponent/>
    </>)

}

export default Compliance_Advisory;