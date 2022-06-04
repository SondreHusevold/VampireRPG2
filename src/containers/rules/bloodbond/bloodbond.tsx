import NavigationLinker from "../../common/navigationLinker";
import BloodBondIntroduction from "./bloodbondintro";
import { Navigate, Route, Routes } from "react-router-dom";
import picture from './bloodbond.jpg';
import BloodBondResistance from "./resistance";
import BloodBondBreak from "./breaking";
import BloodBondDrinks from "./drinks";
import pageStyles from '../../common/pages.module.css';
import Picture from "../../common/picture";
import styles from './bloodbond.module.css';
import { useEffect } from "react";

function BloodBondNavigations() {
    return (
        <>
            <div className={`fadeIn ${pageStyles.navGrid}`}>
                <NavigationLinker to="information" name="Information"/>
                <NavigationLinker to="drinks" name="Drinks"/>
                <NavigationLinker to="resistance" name="Resistance"/>
                <NavigationLinker to="breaking" name="Breaking"/>
            </div>
        </>
    )
}

function BloodBond() {
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);
    
    return (
        <div className={`fadeIn ${styles.page}`}>
           <div className={`center`}>
                <h1 className={pageStyles.headerTop}>Blood Bond</h1>
                <p>The blood bond forms an essential strategy in the Jyhad.</p>
            </div>
            <Picture 
                credit="Aleksi Briclot" desc="Blood bonding" link="https://aneyeoni.com/art.htm"
                img={picture} pos="30% 15%" mobile={true}
            />
            <BloodBondNavigations/>
            <div className={`${pageStyles.lowerPage} ${pageStyles.picturePadding}`}>
                <div>
                    <Routes>
                        <Route path={`breaking`} element={<BloodBondBreak />} />
                        <Route path={`resistance`} element={<BloodBondResistance />} />
                        <Route path={`drinks`} element={<BloodBondDrinks />} />
                        <Route path={`information`} element={<BloodBondIntroduction/>} />
                        <Route path={`/`} element={<Navigate to="information" />} />
                    </Routes>
                </div>
                <Picture credit="Aleksi Briclot" desc="Blood bonding" link="https://aneyeoni.com/art.htm"
                    img={picture} pos="30% 15%" mobile={false}
                />
            </div>
 
        </div>
    )
}

export default BloodBond;