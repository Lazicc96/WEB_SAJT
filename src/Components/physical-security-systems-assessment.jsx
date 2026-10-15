import FooterComponent from "./FooterComponent"
import HeaderComponent from "./HeaderComponent"
import MiddleComponent from "./middleComponent.jsx";
import Strelica from './Strelica.jsx'
import TiersSection from "./TierSection.jsx";



function Physical_security_systems_assessment(){

    return (<>
    <HeaderComponent HeaderText='Welcome to the powerful heading of security assesment!' 
    pageHeaderText='Good evening everyone'/>
    <TiersSection/>
            <MiddleComponent/>
    <Strelica/>
            <FooterComponent/>
    </>)
        
    
};

export default Physical_security_systems_assessment;