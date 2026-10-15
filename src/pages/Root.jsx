import { Outlet } from "react-router-dom";
import MainNavigation from "../Components/MainNav";
import classes from '../pages/Root.module.css'
import Strelica from '../Components/Strelica.jsx';

function RootLayout(){
    return <>
        <MainNavigation/>
        <main className={classes}>
        <Strelica/>
        </main>
        <Outlet/>
    </>
}

export default RootLayout;