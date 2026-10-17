import FooterComponent from "./FooterComponent"
import HeaderComponent from "./HeaderComponent"
import MiddleComponent from "./middleComponent.jsx";
import Strelica from './Strelica.jsx'
import TiersSection from "./TierSection.jsx";


function Compliance_Readines(){

    return (<>
    <HeaderComponent HeaderText='Compliance Readines' 
    pageHeaderText='blablbalb ovde ide neki tekst za Compliance Readines...'/>
    <TiersSection/>
            <MiddleComponent/>
    <Strelica/>
            <FooterComponent/>
    </>)
        
    
};

export default Compliance_Readines;