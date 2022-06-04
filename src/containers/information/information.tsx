import { AnimationOnScroll } from 'react-animation-on-scroll';
import styles from './information.module.css';
import ninteenninityninepic from './pictures/camarilla.jpg'

function Information() {
    return (
        <div className={`fadeIn ${styles.informationWidth}`}>
            <div className={styles.nineteenninitynine}>
                <AnimationOnScroll animateIn='fadeIn'>
                    <h1>1999</h1>
                </AnimationOnScroll>
            </div>
            <div className={styles.nineteenninityninesection}>
                <AnimationOnScroll animateIn='fadeIn'>
                    <p>There has been no less than four months since you were embraced.</p>
                    <p>It might feel like years ago, but forever has only just started.</p>             
                </AnimationOnScroll>
            </div>
            <div className={styles.nineteenninityninesection}>
                <AnimationOnScroll animateIn='fadeIn'>
                    <p>Everyday you are fading away, every night you come back to life.</p>
                    <p>It's the hunger that drives you and your kind.</p>
                </AnimationOnScroll>
            </div>
            <div className={styles.nineteenninityninesection}>
                <AnimationOnScroll animateIn='fadeIn'>
                    <p>As you're drinking through town,</p>
                    <p>the Kine are talking about the cold winter nights.</p>
                </AnimationOnScroll>
            </div>
            <div className={styles.nineteenninityninesection}>
                <AnimationOnScroll animateIn='fadeIn'>
                    <p>But you cannot feel the cold.</p>
                </AnimationOnScroll>
            </div>
            <div className={styles.nineteenninityninesection}>
                <AnimationOnScroll animateIn='fadeIn'>
                    <p>Have you changed?</p>
                </AnimationOnScroll>
            </div>
            <div className={styles.camarillaheader}>
                <AnimationOnScroll animateIn='fadeIn'>
                    <h1>The Camarilla</h1>
                </AnimationOnScroll>
            </div>
            <AnimationOnScroll animateIn='fadeIn'>
            <p>
                Are still having issues after Poe's final death. Due to how many of kindred in the city were killed and 
                <span title="Safe haven for kindred."> Elysiums</span> were destroyed in the process, the Camarilla rule of the city is still in shambles.
                Luckily the Sabbat has not even attempted to take the city while the kindred are in a weakned state.
            </p>
            <p>Jonathan is now Prince of Miami and the Tremere has more power in the city than ever before. The Primogens of Miami has mostly agreed to the Tremere Prince's rule. With Jonathan as Prince, his childe Cedric was given the role of Sheriff.</p>
            </AnimationOnScroll>
            <h1>The Sabbat</h1>
            <p>With the death of the so-called Cardinal of the region and the threat of the Sabbat quenched, only a few packs of the Sabbat cainites still roam around. Mostly disorganized with a few declaring themselves Archbishops of Miami.</p>
            <h3>The Elysium</h3>
            <p>
                'No Mercy' has very recently been rebranded and opened back up with Rosalie as the new owner and Henry as a major stakeholder.</p>
            <p>
                Another Elysium, the bar known as 'The Firmament' previously ran by Angel has been taken ownership by the Brujah, as the Toreador have two Elysiums already and none of the other clans were interested in a pub. 
                Due to how Eduardo Cortez is barely a leader for the Brujah to Jonathan's frustration, 'The Firmament' is currently closed, but in fine shape. 
            </p>
            <p>
                The Toreador primogen Jaxon Wynwood was killed in the fire that torched the Wynwood Museeum to the ground. 
                Due to this the museeum is still in the process of being rebuilt, the Toreador Elysium will most likely not be open for the public for at least half a year.
                Jaxon's childe, Ashton, has taken over his duty as primogen of the Toreador.
            </p>
        </div>
    )
}

export default Information;