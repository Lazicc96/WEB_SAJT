import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import Strelica from '../Components/Strelica.jsx'
import TiersSection from "./TierSection";
import MiddleComponent from "./middleComponent.jsx";

function RedTeamOps(){

    return (
    <>
            <HeaderComponent HeaderText={'Red Team Ops'} pageHeaderText={`Can your Blue Team detect a nation-state actor? A Red Team operation answers that question. We use social engineering, physical intrusion, and advanced malware to reach a specific "Flag" (e.g., CEO's email, Customer DB) without being caught.`}/>
            <TiersSection
  eyebrow="Adversary Simulation Lifecycle"
  heading={["From OSINT", "to Objectives Achieved."]}
  tiers={[
    {
      title: "OSINT & Profiling",
      lead: "Deep dossier on your people.",
      text: "We build a full intelligence picture using public data — vendors, org charts, schedules, and leaked credentials.",
      to: "/professional-services/red-team-ops",
    },
    {
      title: "Initial Access",
      lead: "Spearphishing or physical breach.",
      text: "Believable pretexts, coordinated campaigns, and if needed, on-site physical intrusion attempts.",
      to: "/professional-services/red-team-ops",
    },
    {
      title: "Silent Expansion",
      lead: "Living off the land.",
      text: "We stay stealthy, escalate, and move laterally until we reach the objectives agreed in the scope.",
      to: "/professional-services/red-team-ops",
    },
  ]}
  buttonLabel="View Service Details"
/>
            <MiddleComponent/>
            <Strelica/>
            <FooterComponent/>
    </>)

}

export default RedTeamOps;