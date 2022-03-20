import Effects from './effects';
import styles from './statusEffects.module.css';
import picture from './statuseffects.jpg';
import NavigationLinker from '../../../common/navigationLinker';
import { Navigate, Route, Routes } from 'react-router-dom';
import Fire from './fire';
import BloodBond from '../../bloodbond/bloodbond';

function EffectsNavigations() {
    return (
        <>
            <div className={styles.navGrid}>
                <NavigationLinker to="effects" name="Status Effects"/>
                <NavigationLinker to="fire" name="Fire"/>
                <NavigationLinker to="bloodbond" name="Blood Bond"/>
            </div>
        </>
    )
}


function StatusEffects() {
    return (
        <div className={`fadeIn`}>
            <div className={styles.headerTop}>
                <h1>Status Effects</h1>
                <p>Sometimes not everything goes according to plan. Here are some complications and status effects.</p>
            </div>
            <EffectsNavigations/>
            <div className={styles.lowerPage}>
            <div className={styles.textSection}>
                    <Routes>
                        <Route path={`bloodbond`} element={<BloodBond />} />
                        <Route path={`fire`} element={<Fire />} />
                        <Route path={`effects`} element={<Effects />} />
                        <Route path={`/`} element={<Navigate to="effects" />} />
                    </Routes>
                </div>
                <div className={styles.picture}>
                    <img alt="Blood" src={picture} />
                    <p>Credit: <a href={`https://kathydesign.artstation.com/`} target={`_blank`}>Kathy Design</a></p>
                </div>
            </div>
        </div>
    )
}

export default StatusEffects;