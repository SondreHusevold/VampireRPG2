import { Navigate, Route, Routes } from 'react-router-dom';
import NavigationLinker from '../../common/navigationLinker';
import AboutHealth from './aboutHealth';
import HealthChart from './chart';
import styles from './health.module.css';
import picture from './Health.jpg';

function HealthNavigations() {
    return (
        <>
            <div className={styles.navGrid}>
                <NavigationLinker to="information" name="Information"/>
                <NavigationLinker to="chart" name="Chart"/>
                <NavigationLinker to="attack" name="Applying damage"/>
                <NavigationLinker to="attack" name="Healing damage"/>
                <NavigationLinker to="attack" name="Final death"/>
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
                        <Route path={`chart`} element={<HealthChart />} />
                        <Route path={`information`} element={<AboutHealth />} />
                        <Route path={`/`} element={<Navigate to="information" />} />
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