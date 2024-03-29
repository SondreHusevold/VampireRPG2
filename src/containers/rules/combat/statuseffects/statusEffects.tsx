import Effects from './effects';
import styles from './statusEffects.module.css';
import picture from './statuseffects.jpg';
import NavigationLinker from '../../../common/navigationLinker';
import { Navigate, Route, Routes } from 'react-router-dom';
import Fire from './fire';
import Electrocution from './electrocution';
import Derangements from './derangements';
import pageStyles from '../../../common/pages.module.css';
import Picture from '../../../common/picture';
import { useEffect } from 'react';

function EffectsNavigations() {
    return (
        <>
            <div className={`fadeIn ${pageStyles.navGrid}`}>
                <NavigationLinker to="effects" name="Status Effects"/>
                <NavigationLinker to="fire" name="Fire"/>
                <NavigationLinker to="derangements" name="Derangements"/>
                <NavigationLinker to="electrocution" name="Electrocution"/>
            </div>
        </>
    )
}


function StatusEffects() {
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);
    
    return (
        <div className={`fadeIn ${styles.page}`}>
            <div className={`center`}>
                <h1 className={pageStyles.headerTop}>Status Effects</h1>
                <p>Sometimes not everything goes according to plan. Here are some complications and status effects.</p>
            </div>
            <Picture 
                credit='Kathy Design' desc="Blood"
                img={picture} link={`https://kathydesign.artstation.com/`}
                pos={"30% 15%"} mobile={true}
            />
            <EffectsNavigations/>
            <div className={`${pageStyles.lowerPage} ${pageStyles.picturePadding}`}>
            <div className={styles.textSection}>
                    <Routes>
                        <Route path={`derangements`} element={<Derangements />} />
                        <Route path={`electrocution`} element={<Electrocution />} />
                        <Route path={`fire`} element={<Fire />} />
                        <Route path={`effects`} element={<Effects />} />
                        <Route path={`/`} element={<Navigate to="effects" />} />
                    </Routes>
                </div>

                <Picture 
                    credit='Kathy Design' desc="Blood"
                    img={picture} link={`https://kathydesign.artstation.com/`}
                    pos={"30% 15%"} mobile={false}
                />
            </div>
        </div>
    )
}

export default StatusEffects;