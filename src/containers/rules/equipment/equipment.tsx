import { Navigate, Route, Routes } from "react-router-dom";
import NavigationLinker from "../../common/navigationLinker";
import ArmorEquipment from "./armorequipment";
import picture from './equipment.jpg';
import styles from './equipment.module.css';
import MeleeWeapons from "./meleeweapons";
import RangedWeapons from "./rangedweapons";
import pageStyles from '../../common/pages.module.css';
import Picture from "../../common/picture";
import { useEffect } from "react";

function EquipmentNavigations() {
    return (
        <>
            <div className={`fadeIn ${pageStyles.navGrid}`}>
                <NavigationLinker to="melee" name="Melee Weapons"/>
                <NavigationLinker to="ranged" name="Ranged Weapons"/>
                <NavigationLinker to="armor" name="Armor"/>
            </div>
        </>
    )
}

function Equipment() {
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);
    
    return (
        <div className={`fadeIn ${styles.page}`}>
            <div className={`center`}>
                <h1 className={pageStyles.headerTop}>Equipment</h1>
                <p>Example weapons and armor.</p>
            </div>
            <Picture 
                credit='Guweiz' desc="Equipment"
                img={picture} link={`https://twitter.com/ttguweiz`}
                pos={"30% 0%"} mobile={true}
            />
            <EquipmentNavigations/>
            <div className={`${pageStyles.lowerPage} ${pageStyles.picturePadding}`}>
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
                    pos={"30% 15%"} mobile={false}
                />
            </div>
        </div>
    )
}

export default Equipment;