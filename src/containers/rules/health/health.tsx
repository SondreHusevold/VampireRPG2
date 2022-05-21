import { Navigate, Route, Routes } from 'react-router-dom';
import NavigationLinker from '../../common/navigationLinker';
import AboutHealth from './aboutHealth';
import HealthChart from './chart';
import styles from './health.module.css';
import picture from './Health.jpg';
import ApplyingDamage from './applying';
import Healing from './healing';
import pageStyles from '../../common/pages.module.css';
import Picture from '../../common/picture';
import { useEffect } from 'react';

function HealthNavigations() {
    return (
        <>
            <div className={`fadeIn ${pageStyles.navGrid}`}>
                <NavigationLinker to="summary" name="Summary"/>
                <NavigationLinker to="chart" name="Chart"/>
                <NavigationLinker to="applying" name="Applying damage"/>
                <NavigationLinker to="healing" name="Healing damage"/>
            </div>
        </>
    )
}

function Health() {
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);
    
    return (
        <div className={`fadeIn ${styles.page}`}>
            <div className={pageStyles.headerTop}>
                <h1>Health</h1>
                <p>
                    Vampires are immortal and do not die naturally, however injury can incapacitate them, drive them into lengthy periods of dormancy, or even kill them once more.
                </p>
            </div>
            <Picture 
                credit='Anton Oxenuk' desc="Health"
                img={picture} link={`https://www.artstation.com/aoxenuk`}
                pos={"30% 15%"} hidden={window.screen.width > 1300}
            />
            <HealthNavigations />
            <div className={pageStyles.lowerPage}>
                <div className={styles.textSection}>
                    <Routes>
                        <Route path={`healing`} element={<Healing />} />
                        <Route path={`applying`} element={<ApplyingDamage />} />
                        <Route path={`chart`} element={<HealthChart />} />
                        <Route path={`summary`} element={<AboutHealth />} />
                        <Route path={`/`} element={<Navigate to="summary" />} />
                    </Routes>
                </div>
                
                <Picture 
                    credit='Anton Oxenuk' desc="Health"
                    img={picture} link={`https://www.artstation.com/aoxenuk`}
                    pos={"30% 15%"} hidden={window.screen.width <= 1300}
                />
            </div>
        </div>
    )
}

export default Health;