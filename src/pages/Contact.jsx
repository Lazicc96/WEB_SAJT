import {Link} from 'react-router-dom'
import ContactForm from '../Components/ContactForm';
import HeaderComponent from '../Components/HeaderComponent';
import Footer from './Footer';

function ContactPage(){
    return (
    <>
        <HeaderComponent HeaderText='Welcome to our form page.Have you experienced something like this?' 
        pageHeaderText='A small vulnerability can sometimes be the first step 
        toward gaining access to an entire network. In this section, 
        we will look at how attackers identify weaknesses and how those weaknesses can be exploited.'  ruta='/'/>
        <ContactForm/>
        <Footer/>
    </>)
}

export default ContactPage;