import FooterComponent from "./FooterComponent.jsx";
import HeaderComponent from "./HeaderComponent.jsx";
import Strelica from './Strelica.jsx'
import TiersSection from "./TierSection.jsx";
import MiddleComponent from "./middleComponent.jsx";

function Ditigal_Forensic(){

    return (
    <>
            <HeaderComponent HeaderText={'Digital Forensic'} pageHeaderText={`When a security incident occurs, every piece of digital evidence matters. We investigate systems, recover critical data, and analyze forensic artifacts to uncover what happened, how it happened, and what was compromised. Our digital forensics services deliver evidence-driven insights to support incident response and legal investigations.
`}/>
            <TiersSection
  eyebrow="Digital Forensics Lifecycle"
  heading={["Evidence That Holds Up", "Under Scrutiny."]}
  tiers={[
    {
      title: "Acquisition",
      lead: "Capture the scene before it changes.",
      text: "Disk images, memory dumps, and volatile data captured in a forensically sound way. Every step is logged with hashes so the chain of custody is defensible in court or in front of a regulator.",
      to: "/professional-services/digital-forensics",
    },
    {
      title: "Examination",
      lead: "Find what actually matters in the noise.",
      text: "We process terabytes of logs, file system artifacts, registry hives, and browser history — filtering out the normal so you can see the abnormal.",
      to: "/professional-services/digital-forensics",
    },
    {
      title: "Analysis",
      lead: "Reconstruct the timeline of what happened.",
      text: "Every artifact gets placed on a single timeline. Who logged in, from where, what they touched, what they deleted, and what they tried to hide. We answer the questions that legal and HR will ask.",
      to: "/professional-services/digital-forensics",
    },
  ]}
  buttonLabel="View Service Details"
/>
            <MiddleComponent/>
            <Strelica/>
            <FooterComponent/>
    </>)

}

export default Ditigal_Forensic;