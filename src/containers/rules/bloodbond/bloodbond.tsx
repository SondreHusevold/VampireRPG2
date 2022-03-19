import NavigationLinker from "../../common/navigationLinker";
import BloodBondIntroduction from "./bloodbondintro";
import styles from './bloodbond.module.css';
import { Navigate, Route, Routes } from "react-router-dom";
import picture from './bloodbond.jpg';

function BloodBondNavigations() {
    return (
        <>
            <div className={styles.navGrid}>
                <NavigationLinker to="information" name="Information"/>
                <NavigationLinker to="fire" name="The Drinks"/>
                <NavigationLinker to="bloodbond" name="Resistance"/>
                <NavigationLinker to="bloodbond" name="Breaking"/>
            </div>
        </>
    )
}

function BloodBond() {
    return (
        <div className="fadeIn">
           <div className={styles.headerTop}>
                <h1>Blood Bond</h1>
                <p>The blood bond forms an essential strategy in the Jyhad.</p>
            </div>
            <BloodBondNavigations/>
            <div className={styles.lowerPage}>
            <div className={styles.textSection}>
                    <Routes>
                        <Route path={`bloodbond`} element={<BloodBond />} />
                        <Route path={`fire`} element={<div />} />
                        <Route path={`information`} element={<BloodBondIntroduction/>} />
                        <Route path={`/`} element={<Navigate to="effects" />} />
                    </Routes>
                </div>
                <div className={styles.picture}>
                    <img src={picture} />
                    <p>Credit: <a href={`https://aneyeoni.com/art.htm`} target={`_blank`}>Aleksi Briclot</a></p>
                </div>
            </div>
            <p>
                A blood bond is a mighty force, but it is at its most potent when perpetually reinforced with further drinks. 
                Feeding a thrall often reinforces the bond, while depriving a thrall of vitae may cause the bond to grow tepid over time. 
                A thrall who is treated well and fed often will likely fall even more deeply in love, while a thrall who is degraded and humiliated may find resentment and anger
                eating away at the bond.
            </p>
            <p>
                It is possible, though difficult, for a vampire to temporarily resist a blood bond. Doing so requires the player to make a Willpower roll (difficulty is typically 8, 
                though this can be modified depending on the regnant's treatment and the thrall's Nature) and accumulate a number of successes equal to the number of times the thrall 
                has partaken of the regnant's blood, to a maximum of difficulty 9. The thrall must then spend a Willpower point. 
            </p>
            <p>
                Upon doing so, the bond is negated for a variable amount of time: from one scene (if the thrall merely wishes to plot against the regnant, deliver confidential information 
                to an enemy, etc.) to one turn (if the thrall wishes to attack the regnant physically). The thrall can continue to expend Willpower to extend the duration of “freedom,” 
                but once she ceases doing so, the blood bond resumes at full force.
            </p>
            <p>
                A blood bond can be broken, though this requires the thrall to not only avoid the regnant entirely for an extended period of time, but also spend great amounts
                of Willpower to overcome the addiction. As a general rule, a thrall who neither sees nor feeds from her regnant for a period of (12 - Willpower) months finds her bond 
                reduced by one level.
            </p>
            <p>
                If the bond is reduced to zero in this fashion (a feat typically accompanied by the expenditure of a great deal of Willpower on the thrall's part, as she resists the gnawing 
                urge to seek out her sire), it is nullified entirely.
            </p>
            <p>
                Another, though somewhat less certain, way to be rid of the bond is to kill the regnant. Such a choice is extremely perilous on many levels, and makes no guarantees 
                that everything will go smoothly. Those who have been released by such means claim the bond shatters like spun glass upon the moment of the regnant's Final Death.
            </p>
        </div>
    )
}

export default BloodBond;