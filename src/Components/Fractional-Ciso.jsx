import FooterComponent from "./FooterComponent"
import HeaderComponent from "./HeaderComponent"
import MiddleComponent from "./middleComponent.jsx";
import Strelica from './Strelica.jsx'
import TiersSection from "./TierSection.jsx";



function FractionalCiso(){

    return (<>
    <HeaderComponent HeaderText='Fractional CISO' 
    pageHeaderText='blablbalb ovde ide neki tekst za fractional Ciso-a...'/>
    <TiersSection/>
            <MiddleComponent/>
    <Strelica/>
            <FooterComponent/>
    </>)
        
    
};

export default FractionalCiso;