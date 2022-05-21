import { Navigate, Route, Routes } from "react-router-dom";
import NavigationLinker from "../../common/navigationLinker";
import picture from './frenzy.jpg';
import FrenzyInformation from "./frenzyinfo";
import FrenzySystem from "./frenzysystem";
import Provocations from "./provocations";
import Rotschreck from "./rotschreck";
import pageStyles from '../../common/pages.module.css';
import Picture from "../../common/picture";
import styles from './frenzy.module.css';
import { useEffect } from "react";

function FrenzyNavigations() {
    return (
        <>
            <div className={`fadeIn ${pageStyles.navGrid}`}>
                <NavigationLinker to="information" name="Information"/>
                <NavigationLinker to="system" name="System"/>
                <NavigationLinker to="provocations" name="Provocations"/>
                <NavigationLinker to="rotschreck" name="Rötschreck"/>
            </div>
        </>
    )
}

function Frenzy() {
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);
    
    return (
        <div className={`fadeIn ${styles.page}`}>
            <div className={pageStyles.headerTop}>
                <h1>Frenzy</h1>
                <p>Vampires are monsters, possessed of an inner Beast.</p>
            </div>
            <Picture 
                credit='Jon Dunham' desc="Complete frenzy"
                img={picture} link={`https://www.artstation.com/jon`}
                pos={"100% 70%"} hidden={window.screen.width > 1300}
            />

            <FrenzyNavigations/>
            <div className={pageStyles.lowerPage}>
                <div className={pageStyles.textSection}>
                    <Routes>
                        <Route path={`rotschreck`} element={<Rotschreck />} />
                        <Route path={`provocations`} element={<Provocations />} />
                        <Route path={`system`} element={<FrenzySystem />} />
                        <Route path={`information`} element={<FrenzyInformation />} />
                        <Route path={`/`} element={<Navigate to="information" />} />
                    </Routes>
                </div>
                
                <Picture 
                    credit='Jon Dunham' desc="Complete frenzy"
                    img={picture} link={`https://www.artstation.com/jon`}
                    pos={"30% 15%"} hidden={window.screen.width <= 1300}
                />
            </div>
        </div>
    )
}

export default Frenzy;