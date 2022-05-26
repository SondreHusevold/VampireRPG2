import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NavigationLinker from "../../common/navigationLinker";
import picture from './willpower.jpg';
import pageStyles from '../../common/pages.module.css';
import Picture from "../../common/picture";
import styles from './willpower.module.css';
import Willpower from "./willpower";
import BloodPool from "./bloodpool";
import RegainingWillpower from "./regwillpower";
import GainingBlood from "./gainingblood";

function WillpowerNavigations() {
    return (
        <>
            <div className={`fadeIn ${pageStyles.navGrid}`}>
                <NavigationLinker to="willpower" name="Willpower"/>
                <NavigationLinker to="bloodpool" name="Blood Pool"/>
                <NavigationLinker to="gaining-willpower" name="Gaining Willpower"/>
                <NavigationLinker to="gaining-bloodpool" name="Gaining Blood Pool"/>
            </div>
        </>
    )
}

function WillpowerBloodPool() {
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);
    
    return (
        <div className={`fadeIn ${styles.page}`}>
            <div className={pageStyles.headerTop}>
                <h1>Willpower {`&`} Blood</h1>
                <p>A strong will and blood is necessity.</p>
            </div>
            <Picture 
                credit='Jakub Rozalski' desc="Bore to death"
                img={picture} link={`https://www.artstation.com/jakubrozalski`}
                pos={"100% 70%"} mobile={true}
            />

            <WillpowerNavigations/>
            <div className={pageStyles.lowerPage}>
                <div className={pageStyles.textSection}>
                    <Routes>
                        <Route path={`gaining-bloodpool`} element={<GainingBlood />} />
                        <Route path={`gaining-willpower`} element={<RegainingWillpower />} />
                        <Route path={`bloodpool`} element={<BloodPool />} />
                        <Route path={`willpower`} element={<Willpower />} />
                        <Route path={`/`} element={<Navigate to="information" />} />
                    </Routes>
                </div>
                
                <Picture 
                    credit='Jakub Rozalski' desc="Bore to death"
                    img={picture} link={`https://www.artstation.com/jakubrozalski`}
                    pos={"30% 15%"} mobile={false}
                />
            </div>
        </div>
    )
}

export default WillpowerBloodPool;