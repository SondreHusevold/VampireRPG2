import { Navigate, Route, Routes } from 'react-router-dom';
import NavigationLinker from '../../../common/navigationLinker';
import styles from './maneuvers.module.css';
import picture from './Maneuvers.jpg';
import GeneralManeuvers from './general';
import DefensiveManeuvers from './defensive';
import CloseCombatManeuvers from './closeCombat';
import RangedCombatManeuvers from './rangedCombat';
import pageStyles from '../../../common/pages.module.css';
import Picture from '../../../common/picture';

function ManeuversNavigations() {
    return (
        <>
            <div className={pageStyles.navGrid}>
                <NavigationLinker to="general" name="General"/>
                <NavigationLinker to="defensive" name="Defensive"/>
                <NavigationLinker to="close-combat" name="Close-combat"/>
                <NavigationLinker to="ranged-combat" name="Ranged-combat"/>
            </div>
        </>
    )
}

function Maneuvers() {
    return (
        <>
            <div className={pageStyles.headerTop}>
                <h1>Maneuvers</h1>
                <p>These maneuvers give you a variety of choices in combat. Most of these take one action to execute.</p>
            </div>

            <ManeuversNavigations />
            <div className={pageStyles.lowerPage}>
                <div className={styles.textSection}>
                    <Routes>
                        <Route path={`ranged-combat`} element={<RangedCombatManeuvers />} />
                        <Route path={`close-combat`} element={<CloseCombatManeuvers />} />
                        <Route path={`defensive`} element={<DefensiveManeuvers />} />
                        <Route path={`general`} element={<GeneralManeuvers />} />
                        <Route path={`/`} element={<Navigate to="general" />} />
                    </Routes>
                </div>
                <Picture 
                    credit='Oshred' desc="Maneuvers"
                    img={picture} link={`https://www.twitter.com/oshredart`}
                    pos={"30% 15%"} hidden={false}
                />
            </div>
        </>
    )
}

export default Maneuvers;