import { Navigate, Route, Routes } from "react-router-dom";
import NavigationLinker from "../../common/navigationLinker";
import picture from './equipment.jpg';
import styles from './equipment.module.css';

function EquipmentNavigations() {
    return (
        <>
            <div className={styles.navGrid}>
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
            <div className={styles.headerTop}>
                <h1>Equipment</h1>
                <p>Example weapons and armor.</p>
            </div>
            <EquipmentNavigations/>
            <div className={styles.lowerPage}>
                <div className={styles.textSection}>
                    <Routes>
                        <Route path={`armor`} element={<div />} />
                        <Route path={`ranged`} element={<div />} />
                        <Route path={`melee`} element={<div />} />
                        <Route path={`/`} element={<Navigate to="melee" />} />
                    </Routes>
                </div>
                <div className={styles.picture}>
                    <img alt="Complete Equipment" src={picture} />
                    <p>Credit: <a href={`https://twitter.com/ttguweiz`} target={`_blank`}>Guweiz</a></p>
                </div>
            </div>
        </div>
    )
}

export default Equipment;