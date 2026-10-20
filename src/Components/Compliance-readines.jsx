import FooterComponent from "./FooterComponent"
import HeaderComponent from "./HeaderComponent"
import MiddleComponent from "./middleComponent.jsx";
import Strelica from './Strelica.jsx'
import TiersSection from "./TierSection.jsx";


function Compliance_Readines(){

    return (<>
    <HeaderComponent HeaderText='Compliance Readines' 
    pageHeaderText='Audits don’t wait for you to be ready. We close that gap mapping your current security posture against the controls SOC 2, ISO 27001, or HIPAA actually require, then working alongside your team to remediate what’s missing before the auditor ever sees it. No vague checklists, no last-minute scrambling. Just a clear path from where you stand today to a report you can hand over with confidence.'/>
    <TiersSection/>
            <MiddleComponent/>
    <Strelica/>
            <FooterComponent/>
    </>)
        
    
};

export default Compliance_Readines;