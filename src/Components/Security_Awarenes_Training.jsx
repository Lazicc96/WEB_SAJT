import FooterComponent from "./FooterComponent.jsx";
import HeaderComponent from "./HeaderComponent.jsx";
import Strelica from './Strelica.jsx'
import TiersSection from "./TierSection.jsx";
import MiddleComponent from "./middleComponent.jsx";

function Sec_Awarenes_Training(){

    return (
    <>
            <HeaderComponent HeaderText={'Security Awareness Training'} pageHeaderText={'Your firewalls are useless if your staff clicks on everything. We provide engaging, non-boring security training tailored to your specific threats. From developer secure coding workshops to general staff awareness, we raise the baseline of your human defense.'}/>
            <TiersSection
  eyebrow="Awareness Training Lifecycle"
  heading={["From Knowledge Baseline", "to Practical Testing."]}
  tiers={[
    {
      title: "Assessment",
      lead: "Measuring current knowledge levels.",
      text: "We benchmark your team against real-world phishing, social engineering, and password hygiene scenarios.",
      to: "/professional-services/security-awareness-training",
    },
    {
      title: "Curriculum",
      lead: "Tailored to your stack and industry.",
      text: "Content is shaped around the threats that actually matter to your sector — no generic slideshows.",
      to: "/professional-services/security-awareness-training",
    },
    {
      title: "Delivery & Testing",
      lead: "Live sessions and quizzes.",
      text: "Interactive live or recorded sessions, followed by quizzes and practical challenges to reinforce learning.",
      to: "/professional-services/security-awareness-training",
    },
  ]}
  buttonLabel="View Service Details"
/>
            <MiddleComponent/>
            <Strelica/>
            <FooterComponent/>
    </>)

}

export default Sec_Awarenes_Training;