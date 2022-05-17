import { Navigate, Route, Routes } from "react-router-dom";
import NavigationLinker from "../../../common/navigationLinker";
import Armor from "./armor";
import styles from './combatTypes.module.css';
import CombatTypesSection from "./combatTypesSection";
import DamageTypes from "./damageTypes";
import picture from './combatTypes.jpg';
import pageStyles from '../../../common/pages.module.css';
import Picture from "../../../common/picture";

function CombatNavigations() {
    return (
        <>
            <div className={pageStyles.navGrid}>
                <NavigationLinker to="combat_types" name="Combat types"/>
                <NavigationLinker to="damage_types" name="Damage types"/>
                <NavigationLinker to="armor" name="Armor"/>
            </div>
        </>
    )
}

function CombatTypes() {
    return (
        <>
            <div className={pageStyles.headerTop}>
                <h1>Combat and Damage types</h1>
                <p>
                    Close combat, ranged combat and four damage types. Additionally there's armor to reduce damage.
                </p>
            </div>

            <CombatNavigations />
            <div className={pageStyles.lowerPage}>
                <div className={styles.textSection}>
                    <Routes>
                        <Route path={`armor`} element={<Armor />} />
                        <Route path={`damage_types`} element={<DamageTypes />} />
                        <Route path={`combat_types`} element={<CombatTypesSection />} />
                        <Route path={`/`} element={<Navigate to="combat_types" />} />
                    </Routes>
                </div>

                <Picture 
                    credit='Carlos Díaz Asenjo' desc="Combat"
                    img={picture} link={`https://www.artstation.com/kamyu`}
                    pos={"30% 15%"} hidden={false}
                />
            </div>
        </>
    )
}

export default CombatTypes;