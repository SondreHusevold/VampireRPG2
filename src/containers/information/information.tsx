import { AnimationOnScroll } from 'react-animation-on-scroll';
import styles from './information.module.css';
import camarillaPicture from './pictures/camarilla.jpg'
import roofPicture from './pictures/roof.jpg'
import sabbatPicture from './pictures/sabbat.webp'
import nomercyPicture from './pictures/nomercy.jpg'
import thefirmamentPicture from './pictures/thefirmament.jpg'
import wynwoodPicture from './pictures/wynwood.jpg'
import chantryPicture from './pictures/tremereChantry.jpg'
import Character from './character';
import characters from '../../services/character_data/characters';

function Information() {
    function backToMenu() {
        window.scrollTo(0,0);
    }


    return (
        <div>
           <div className={styles.backtotopbtn}>
                <button className='nf nf-fa-angle_double_up' onClick={backToMenu}/>
            </div>
        <div className={`fadeIn ${styles.informationWidth}`}>
 
            <div className={styles.nineteenninitynine}>
                <AnimationOnScroll animateIn='fadeIn'>
                    <h1>1999</h1>
                </AnimationOnScroll>
            </div>
            <div className={styles.nineteenninityninesection}>
                <AnimationOnScroll animateIn='fadeIn'>
                    <p>It has been two months since you were embraced.</p>
                    <p>It might feel like years ago, but forever has only just started.</p>             
                </AnimationOnScroll>
            </div>
            <div className={styles.nineteenninityninesection}>
                <AnimationOnScroll animateIn='fadeIn'>
                    <p>While hunting for blood at your favorite spot,</p>
                    <p>You hear the kine talking about the cold winter nights.</p>
                </AnimationOnScroll>
            </div>
            <div className={styles.nineteenninityninesection}>
                <AnimationOnScroll animateIn='fadeIn'>
                    <p>But you cannot feel the cold anymore.</p>
                </AnimationOnScroll>
            </div>
            <div className={styles.nineteenninityninesection}>
                <AnimationOnScroll animateIn='fadeIn'>
                    <p>Have you changed?</p>
                </AnimationOnScroll>
            </div>
            <div className={styles.camarillaheader}>
                <AnimationOnScroll animateIn='fadeIn'>
                    <h1>The aftermath</h1>
                </AnimationOnScroll>
            </div>
            <div className={styles.camarillaSection}>
                <AnimationOnScroll animateIn='fadeIn'>
                    <div className={styles.innerText}>
                        <div>
                            <p>Jonathan found you unconcious at the top of Poe's Enterprises at the brink of dawn.</p>
                            <p>If he was an hour later, you would all be ash.</p>
                            <p>No evidence of battle was seen the next night, sending a feeling of doubt through your dead bodies.</p>
                            <p>Is the so-called Cardinal dead?</p>
                        </div>
                        <img className={styles.pictureRight} src={roofPicture} />
                    </div>
                </AnimationOnScroll>
            </div>
            <div className={styles.camarillaSection}>
                <AnimationOnScroll animateIn='fadeIn'>
                    <p>Jonathan made the decision to send a message and make the Sabbat troops fall back.</p>
                    <p>He declared the Cardinal's final death and a victory to the Camarilla.</p>
                </AnimationOnScroll>
            </div>

            <div className={styles.nineteenninityninesection}>
                <AnimationOnScroll animateIn='fadeIn'>
                    <p>A grey lie only you know. Not to be spoken of ever again.</p>
                </AnimationOnScroll>
            </div>

            <div className={styles.camarillaheader}>
                <AnimationOnScroll animateIn='fadeIn'>
                    <h1>The Camarilla</h1>
                </AnimationOnScroll>
            </div>
            <div className={styles.camarillaSection}>
                <AnimationOnScroll animateIn='fadeIn'>
                    <div className={styles.innerText}>
                        <div>
                            <p>
                                The Camarilla are still having issues after Poe's final death. Due to how many of kindred in the city were killed and 
                                Elysiums were destroyed in the process, the Camarilla rule of the city is still in shambles.
                            </p>
                            <p>Luckily, the Sabbat have not attempted to take the city in the past months while the Camarilla are in a weakened state.</p>
                            <p>Jonathan is now Prince of Miami and the Tremere has more power in the city than ever before. While the Nosferatus initially disagreed, the Primogens of Miami has mostly agreed to the Tremere Prince's rule.</p>
                            <p>With Jonathan as Prince, his childe Cedric was given the role of Sheriff.</p>
                        </div>
                        <img className={styles.pictureRight} src={camarillaPicture} />

                    </div>
                    </AnimationOnScroll>
            </div>

            <div className={styles.camarillaheader}>
                <AnimationOnScroll animateIn='fadeIn'>
                    <h1>The Sabbat</h1>
                </AnimationOnScroll>
            </div>

            <div className={styles.camarillaSection}>
                <AnimationOnScroll animateIn='fadeIn'>
                    <div className={styles.innerText}>
                        <div>
                            <p>With the death of what the Camarilla declared the Cardinal of the region and the threat of the Sabbat quenched, only a few packs of the Sabbat cainites still roam around.</p>
                            <p>Mostly disorganized with a few declaring themselves Archbishops of Miami, the rumors say they keep recruiting and embracing in the shadows.</p>
                            <p>Intel are saying The Sabbat are driven further south. The Camarilla are unsure of what happens down there, as rebuilding Miami and securing the Traditions is more important.</p>
                        </div>
                        <img className={styles.pictureRight} src={sabbatPicture} />
                    </div>
                </AnimationOnScroll>
            </div>

            <div className={styles.camarillaheader}>
                <AnimationOnScroll animateIn='fadeIn'>
                    <h1>The Elysium</h1>
                </AnimationOnScroll>
            </div>
            <div className={styles.camarillaSection}>
                <AnimationOnScroll animateIn='fadeIn'>
                    <div className={styles.innerText}>
                        <div>
                            <p>'Uprising' has very recently been rebranded to 'No Mercy' and opened back up with Rosalie as the new owner and Henry as a major stakeholder.</p>
                            <p>This Elysium has now become one of the more frequent places for the Kindred of the city to mingle around.</p>
                            <p>While all Elysiums are neutral ground and every Kindred are welcome on it's grounds, this one is particularily impartial due to the joint effort between the Ventrue, Toreador, Brujah and the Malkavians in running the club.</p>
                        </div>

                        <img className={styles.pictureRight} src={nomercyPicture} />
                    </div>
                </AnimationOnScroll>
            </div>

            <div className={styles.camarillaSection}>
                <AnimationOnScroll animateIn='fadeIn'>
                    <div className={`${styles.innerText} ${styles.reverse}`}>
                        <div>
                            <p>
                                Another Elysium, the bar known as 'The Firmament' previously ran by Angel has been taken ownership of by the Brujah, as the Toreador run two Elysiums already and none of the other clans were interested in a pub. 
                            </p>
                            <p>
                                Due to how Eduardo Cortez is barely a leader for the Brujah to the Prince's frustration, 'The Firmament' is currently closed, but in fine shape. 
                            </p>
                        </div>
                        <img className={styles.pictureRight} src={thefirmamentPicture} />
                    </div>
                </AnimationOnScroll>
            </div>
            
            <div className={styles.camarillaSection}>
                <AnimationOnScroll animateIn='fadeIn'>
                    <div className={styles.innerText}>
                        <div>
                            <p>The Toreador primogen Jaxon Wynwood met his final death in the fire that torched the Wynwood Museeum to the ground. </p>
                            <p>
                                Due to this, the museeum is still in the process of being rebuilt. The Toreador Elysium will most likely not be open for the public for at least half a year.
                                Jaxon's childe, Ashton, has taken over his duty as primogen of the Toreador.
                            </p>
                        </div>
                        <img className={styles.pictureRight} src={wynwoodPicture} />
                    </div>
                </AnimationOnScroll>
            </div>

            <div className={styles.camarillaSection}>
                <AnimationOnScroll animateIn='fadeIn'>
                <div className={`${styles.innerText} ${styles.reverse}`}>
                    <div>
                        <p>The Tremere's chantry still stands and is the primary location of the Prince's seat.</p>
                        <p>The chantry as an Elysium has only one section that is open to the public, being the room where Franklin was given his embrace.</p>
                        <p>
                            It was refurnished and given a large desk that the Prince uses for his duties in front of the menacing fireplace that lights up the dark room.
                            The red chairs are still there and are used for talking with the Prince when needed.
                        </p>
                        <p>The rest of the chantry is a guarded secret. Some Kindred are highly speculating what might be happening behind the blood wizards' door.</p>
                    </div>
                    <img className={styles.pictureRight} src={chantryPicture} />
                </div>
                </AnimationOnScroll>
            </div>

            <div className={styles.camarillaheader}>
                <AnimationOnScroll animateIn='fadeIn'>
                    <h1>The Kindred</h1>
                </AnimationOnScroll>
            </div>
            <div className={styles.characterGrid}>
                {
                    characters.map(char => {
                        return (
                            <Character {... char}/>
                        )
                    })
                }
            </div>
        </div>
        </div>

    )
}

export default Information;