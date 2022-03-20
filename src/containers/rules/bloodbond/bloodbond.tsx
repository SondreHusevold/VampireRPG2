import NavigationLinker from "../../common/navigationLinker";
import BloodBondIntroduction from "./bloodbondintro";
import styles from './bloodbond.module.css';
import { Navigate, Route, Routes } from "react-router-dom";
import picture from './bloodbond.jpg';
import BloodBondResistance from "./resistance";
import BloodBondBreak from "./breaking";
import BloodBondDrinks from "./drinks";

function BloodBondNavigations() {
    return (
        <>
            <div className={styles.navGrid}>
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
           <div className={styles.headerTop}>
                <h1>Blood Bond</h1>
                <p>The blood bond forms an essential strategy in the Jyhad.</p>
            </div>
            <BloodBondNavigations/>
            <div className={styles.lowerPage}>
            <div className={styles.textSection}>
                    <Routes>
                        <Route path={`breaking`} element={<BloodBondBreak />} />
                        <Route path={`resistance`} element={<BloodBondResistance />} />
                        <Route path={`drinks`} element={<BloodBondDrinks />} />
                        <Route path={`information`} element={<BloodBondIntroduction/>} />
                        <Route path={`/`} element={<Navigate to="information" />} />
                    </Routes>
                </div>
                <div className={styles.picture}>
                    <img alt={`Blood bonding`} src={picture} />
                    <p>Credit: <a href={`https://aneyeoni.com/art.htm`} target={`_blank`}>Aleksi Briclot</a></p>
                </div>
            </div>
 
        </div>
    )
}

export default BloodBond;