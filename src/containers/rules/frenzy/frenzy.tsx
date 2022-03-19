import { Navigate, Route, Routes } from "react-router-dom";
import NavigationLinker from "../../common/navigationLinker";
import picture from './frenzy.jpg';
import styles from './frenzy.module.css';
import FrenzyInformation from "./frenzyinfo";
import FrenzySystem from "./frenzysystem";
import Provocations from "./provocations";
import Rotschreck from "./rotschreck";

function FrenzyNavigations() {
    return (
        <>
            <div className={styles.navGrid}>
                <NavigationLinker to="information" name="Information"/>
                <NavigationLinker to="system" name="System"/>
                <NavigationLinker to="provocations" name="Provocations"/>
                <NavigationLinker to="rotschreck" name="Rötschreck"/>
            </div>
        </>
    )
}

function Frenzy() {
    return (
        <div className={`fadeIn`}>
            <div className={styles.headerTop}>
                <h1>Frenzy</h1>
                <p>Vampires are monsters, possessed of an inner Beast.</p>
            </div>
            <FrenzyNavigations/>
            <div className={styles.lowerPage}>
                <div className={styles.textSection}>
                    <Routes>
                        <Route path={`rotschreck`} element={<Rotschreck />} />
                        <Route path={`provocations`} element={<Provocations />} />
                        <Route path={`system`} element={<FrenzySystem />} />
                        <Route path={`information`} element={<FrenzyInformation />} />
                        <Route path={`/`} element={<Navigate to="information" />} />
                    </Routes>
                </div>
                <div className={styles.picture}>
                    <img src={picture} />
                    <p>Credit: <a href={`https://www.artstation.com/jon`} target={`_blank`}>Jon Dunham</a></p>
                </div>
            </div>
        </div>
    )
}

export default Frenzy;