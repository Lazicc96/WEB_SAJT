import FooterComponent from "./FooterComponent.jsx";
import HeaderComponent from "./HeaderComponent.jsx";
import MiddleComponent from "./middleComponent.jsx";
import TiersSection from "./TierSection.jsx";
import Strelica from './Strelica.jsx'

function Interal_Netowork_Pen_Testing(){

    return (
    <>
            <HeaderComponent HeaderText={'Internal Network Pen Testing'} pageHeaderText={'The perimeter will fail. When it does, can you stop lateral movement? We simulate a compromised employee device (Assumed Breach) and attempt to escalate privileges, move laterally, and compromise critical assets like the Domain Controller or Customer Database.'}/>
            <TiersSection
  eyebrow="Internal Network Attack Lifecycle"
  heading={["From Standard Access", "to Domain Dominance."]}
  tiers={[
    {
      title: "Foothold",
      lead: "Starting from standard user access.",
      text: "We simulate an attacker who already has a low-privilege account — the most realistic and dangerous starting point.",
      to: "/professional-services/internal-network-pen-testing",
    },
    {
      title: "Escalation",
      lead: "Finding weak configs to gain Admin rights.",
      text: "Misconfigurations, unpatched services, and weak credential policies are hunted down to escalate privileges.",
      to: "/professional-services/internal-network-pen-testing",
    },
    {
      title: "Lateral Move & Dominance",
      lead: "Pivoting to Domain Admin.",
      text: "We pivot across subnets and servers, living off the land, until we achieve Domain Admin or critical data access.",
      to: "/professional-services/internal-network-pen-testing",
    },
  ]}
  buttonLabel="View Service Details"
/>
            <MiddleComponent/>
            <Strelica/>
            <FooterComponent/>
    </>)

}

export default Interal_Netowork_Pen_Testing;