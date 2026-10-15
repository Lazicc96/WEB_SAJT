import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import Strelica from '../Components/Strelica.jsx'
import TiersSection from "./TierSection";
import MiddleComponent from "./middleComponent.jsx";

function SocialEngineering(){

    return (
    <>
            <HeaderComponent HeaderText={'Social Engineering'} pageHeaderText={'We target your people to see who clicks, who calls back, and who lets us in the front door. We use realistic pretexts (pre-approved by you) to test the effectiveness of your security training and incident response procedures.'}/>
            <TiersSection
  eyebrow="Social Engineering Lifecycle"
  heading={["From Blueprinting", "to Teachable Moments."]}
  tiers={[
    {
      title: "Blueprinting",
      lead: "Org charts and vendor mapping.",
      text: "We study who talks to whom, which vendors you trust, and where the human attack surface is widest.",
      to: "/professional-services/social-engineering",
    },
    {
      title: "Pretexting",
      lead: "Believable scenarios and payloads.",
      text: "Carefully crafted pretexts and payloads designed to bypass your current defenses without raising alarms.",
      to: "/professional-services/social-engineering",
    },
    {
      title: "Execution & Education",
      lead: "Coordinated campaigns and training.",
      text: "Multi-channel coordinated attempts, followed by teachable moments and training material for everyone involved.",
      to: "/professional-services/social-engineering",
    },
  ]}
  buttonLabel="View Service Details"
/>
            <MiddleComponent/>
            <Strelica/>
            <FooterComponent/>
    </>)

}

export default SocialEngineering;