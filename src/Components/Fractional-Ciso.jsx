import FooterComponent from "./FooterComponent"
import HeaderComponent from "./HeaderComponent"
import MiddleComponent from "./middleComponent.jsx";
import Strelica from './Strelica.jsx'
import TiersSection from "./TierSection.jsx";



function FractionalCiso(){

    return (<>
    <HeaderComponent HeaderText='Fractional CISO' 
    pageHeaderText='Our Fractional CISO services deliver expert security leadership tailored to your business, from risk assessments and policy development to compliance readiness (ISO 27001, NIS2, SOC 2) and incident response planning. You get the strategic guidance of a seasoned CISO at a fraction of the cost.'/>
    <TiersSection/>
            <MiddleComponent/>
    <Strelica/>
            <FooterComponent/>
    </>)
        
    
};

export default FractionalCiso;