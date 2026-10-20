import {Link} from 'react-router-dom'
import HeaderComponent from '../Components/HeaderComponent';
import Footer from './Footer';
import HomeSections from '../Components/HomeSections';

function Homepage(){
     return <>
     <HeaderComponent ruta='/' HeaderText='Skyrocket Your Cyber Security Maturity' pageHeaderText='We find the gaps attackers would use first then help you close them before they do. Real penetration testing, clear reporting, and a path to measurable security maturity, without the jargon or the sales pitch.'/>
     <HomeSections/>
            <Footer/>
     </>
    
}

export default Homepage;