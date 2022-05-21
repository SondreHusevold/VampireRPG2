import { Navigate, Route, Routes } from "react-router-dom"
import NavigationLinker from "../../../common/navigationLinker";
import Attack from "./attack";
import styles from './combatStages.module.css';
import Initiatives from "./initiative";
import Resolution from "./resolution";
import Soaking from "./soaking";
import picture from './Stages.jpg';
import Summary from "./summary";
import pageStyles from '../../../common/pages.module.css';
import Picture from "../../../common/picture";
import { useEffect } from "react";

function CombatNavigations() {
    return (
        <>
            <div className={`fadeIn ${pageStyles.navGrid}`}>
                <NavigationLinker to="summary" name="Summary"/>
                <NavigationLinker to="initiative" name="Initiative"/>
                <NavigationLinker to="attack" name="Attack"/>
                <NavigationLinker to="resolution" name="Resolution"/>
                <NavigationLinker to="soaking" name="Soaking"/>
            </div>
        </>
    )
}

function CombatStages() {
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);
    
    return (
        <div className={`fadeIn ${styles.page}`}>
            <div className={pageStyles.headerTop}>
                <h1>Combat stages</h1>
                <p>
                    Combat is divided into a series of three-second turns.
                    Each combat turn has three stages to make it easier to keep track
                    of things.
                </p>
            </div>
            <Picture 
                credit='Jonathan Romeo' desc="Combat"
                img={picture} link={`https://www.artstation.com/wen-jr`}
                pos={"30% 15%"} hidden={window.screen.width > 1300}
            />
            <CombatNavigations />
            <div className={pageStyles.lowerPage}>
                <div className={styles.textSection}>
                    <Routes>
                        <Route path={`summary`} element={<Summary />}/>
                        <Route path={`initiative`} element={<Initiatives />}/>
                        <Route path={`attack`} element={<Attack />}/>
                        <Route path={`resolution`} element={<Resolution />}/>
                        <Route path={`soaking`} element={<Soaking />}/>
                        <Route path={`/`} element={<Navigate to="summary" />} />
                    </Routes>
                </div>
                <Picture 
                    credit='Jonathan Romeo' desc="Combat"
                    img={picture} link={`https://www.artstation.com/wen-jr`}
                    pos={"30% 15%"} hidden={window.screen.width <= 1300}
                />
            </div>
        </div>
    )
}

export default CombatStages;