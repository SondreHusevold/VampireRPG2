import { Navigate, NavLink, Route, Routes } from "react-router-dom"
import NavigationLinker from "../../common/navigationLinker";
import Attack from "./attack";
import styles from './combatStages.module.css';
import Initiatives from "./initiative";
import Resolution from "./resolution";
import Soaking from "./soaking";
import picture from './Stages.jpg';
import Summary from "./summary";

function CombatNavigations() {
    return (
        <>
            <div className={styles.navGrid}>
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
    return (
        <>
            <div className={styles.headerTop}>
                <h1>Combat stages</h1>
                <p>
                    Combat is divided into a series of three-second turns.
                    Each combat turn has three stages to make it easier to keep track
                    of things.
                </p>
            </div>

            <CombatNavigations />
            <div className={styles.lowerPage}>
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
                <div className={styles.picture}>
                    <img src={picture} />
                    <p>Credit: <a href={`https://www.artstation.com/wen-jr`} target={`_blank`}>Jonathan Romeo</a></p>
                </div>
            </div>
        </>
    )
}

export default CombatStages;