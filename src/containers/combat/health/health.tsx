import { Navigate, Route, Routes } from 'react-router-dom';
import NavigationLinker from '../../common/navigationLinker';
import AboutHealth from './aboutHealth';
import HealthChart from './chart';
import styles from './health.module.css';
import picture from './Health.jpg';
import ApplyingDamage from './applying';
import Healing from './healing';
import Death from './death';

function HealthNavigations() {
    return (
        <>
            <div className={styles.navGrid}>
                <NavigationLinker to="summary" name="Summary"/>
                <NavigationLinker to="chart" name="Chart"/>
                <NavigationLinker to="applying" name="Applying damage"/>
                <NavigationLinker to="healing" name="Healing damage"/>
            </div>
        </>
    )
}


function Health() {
    return (
        <>
            <div className={styles.headerTop}>
                <h1>Health</h1>
                <p>
                    Vampires are immortal and do not die naturally, however injury can incapacitate them, drive them into lengthy periods of dormancy, or even kill them once more.
                </p>
            </div>

            <HealthNavigations />
            <div className={styles.lowerPage}>
                <div className={styles.textSection}>
                    <Routes>
                        <Route path={`healing`} element={<Healing />} />
                        <Route path={`applying`} element={<ApplyingDamage />} />
                        <Route path={`chart`} element={<HealthChart />} />
                        <Route path={`summary`} element={<AboutHealth />} />
                        <Route path={`/`} element={<Navigate to="summary" />} />
                    </Routes>
                </div>
                <div className={styles.picture}>
                    <img src={picture} />
                    <p>Credit: <a href={`https://www.artstation.com/aoxenuk`} target={`_blank`}>Anton Oxenuk</a></p>
                </div>
            </div>
        </>
    )
}

export default Health;