import { Navigate, Route, Routes } from "react-router-dom";
import NavigationLinker from "../../../common/navigationLinker";
import Armor from "./armor";
import styles from './combatTypes.module.css';
import CombatTypesSection from "./combatTypesSection";
import DamageTypes from "./damageTypes";
import picture from './combatTypes.jpg';
import pageStyles from '../../../common/pages.module.css';
import Picture from "../../../common/picture";
import { useEffect } from "react";

function CombatNavigations() {
    return (
        <>
            <div className={`fadeIn ${pageStyles.navGrid}`}>
                <NavigationLinker to="combat_types" name="Combat types"/>
                <NavigationLinker to="damage_types" name="Damage types"/>
                <NavigationLinker to="armor" name="Armor"/>
            </div>
        </>
    )
}

function CombatTypes() {
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    return (
        <div className={`fadeIn ${styles.page}`}>
            <div className={`center`}>
                <h1 className={pageStyles.headerTop}>Combat and Damage types</h1>
                <p>
                    Close combat, ranged combat and four damage types. Additionally there's armor to reduce damage.
                </p>
            </div>
            <Picture 
                credit='Carlos Díaz Asenjo' desc="Combat"
                img={picture} link={`https://www.artstation.com/kamyu`}
                pos={"80% 15%"} mobile={true}
            />
            <CombatNavigations />
            <div className={`${pageStyles.lowerPage} ${pageStyles.picturePadding}`}>
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
                    pos={"30% 15%"} mobile={false}
                />
            </div>
        </div>
    )
}

export default CombatTypes;