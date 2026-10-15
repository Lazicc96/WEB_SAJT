import {Link} from 'react-router-dom'
import HeaderComponent from '../Components/HeaderComponent';
import Footer from './Footer';
import HomeSections from '../Components/HomeSections';

function Homepage(){
     return <>
     <HeaderComponent ruta='/' HeaderText='Skyrocket Your Cyber Security Maturity' pageHeaderText='Welcome to our contact
form
Lorem ipsum dolor sit amet consectetur lacus sed nam varius quis pharetra arcu id amet et vehicula a eget facilisis nec porta interdum lorem pharetra proin ac lacus sit eros.'/>
     <HomeSections/>
            <Footer/>
     </>
    
}

export default Homepage;