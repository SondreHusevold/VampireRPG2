import NavigationLinker from "../../common/navigationLinker";
import BloodBondIntroduction from "./bloodbondintro";
import { Navigate, Route, Routes } from "react-router-dom";
import picture from './bloodbond.jpg';
import BloodBondResistance from "./resistance";
import BloodBondBreak from "./breaking";
import BloodBondDrinks from "./drinks";
import pageStyles from '../../common/pages.module.css';

function BloodBondNavigations() {
    return (
        <>
            <div className={pageStyles.navGrid}>
                <NavigationLinker to="information" name="Information"/>
                <NavigationLinker to="drinks" name="Drinks"/>
                <NavigationLinker to="resistance" name="Resistance"/>
                <NavigationLinker to="breaking" name="Breaking"/>
            </div>
        </>
    )
}

function BloodBond() {
    return (
        <div className="fadeIn">
           <div className={pageStyles.headerTop}>
                <h1>Blood Bond</h1>
                <p>The blood bond forms an essential strategy in the Jyhad.</p>
            </div>
            <BloodBondNavigations/>
            <div className={pageStyles.lowerPage}>
                <div>
                    <Routes>
                        <Route path={`breaking`} element={<BloodBondBreak />} />
                        <Route path={`resistance`} element={<BloodBondResistance />} />
                        <Route path={`drinks`} element={<BloodBondDrinks />} />
                        <Route path={`information`} element={<BloodBondIntroduction/>} />
                        <Route path={`/`} element={<Navigate to="information" />} />
                    </Routes>
                </div>
                <div className={picture}>
                    <img alt={`Blood bonding`} src={picture} />
                    <p>Credit: <a href={`https://aneyeoni.com/art.htm`} target={`_blank`}>Aleksi Briclot</a></p>
                </div>
            </div>
 
        </div>
    )
}

export default BloodBond;