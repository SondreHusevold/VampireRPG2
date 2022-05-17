import { Navigate, Route, Routes } from "react-router-dom";
import NavigationLinker from "../../common/navigationLinker";
import ArmorEquipment from "./armorequipment";
import picture from './equipment.jpg';
import styles from './equipment.module.css';
import MeleeWeapons from "./meleeweapons";
import RangedWeapons from "./rangedweapons";
import pageStyles from '../../common/pages.module.css';
import Picture from "../../common/picture";

function EquipmentNavigations() {
    return (
        <>
            <div className={pageStyles.navGrid}>
                <NavigationLinker to="melee" name="Melee Weapons"/>
                <NavigationLinker to="ranged" name="Ranged Weapons"/>
                <NavigationLinker to="armor" name="Armor"/>
            </div>
        </>
    )
}

function Equipment() {
    return (
        <div className={`fadeIn`}>
            <div className={pageStyles.headerTop}>
                <h1>Equipment</h1>
                <p>Example weapons and armor.</p>
            </div>
            <EquipmentNavigations/>
            <div className={pageStyles.lowerPage}>
                <div className={styles.textSection}>
                    <Routes>
                        <Route path={`armor`} element={<ArmorEquipment />} />
                        <Route path={`ranged`} element={<RangedWeapons />} />
                        <Route path={`melee`} element={<MeleeWeapons />} />
                        <Route path={`/`} element={<Navigate to="melee" />} />
                    </Routes>
                </div>

                <Picture 
                    credit='Guweiz' desc="Equipment"
                    img={picture} link={`https://twitter.com/ttguweiz`}
                    pos={"30% 15%"} hidden={false}
                />
            </div>
        </div>
    )
}

export default Equipment;