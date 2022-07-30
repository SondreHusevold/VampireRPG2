import { AnimationOnScroll } from 'react-animation-on-scroll';
import styles from './information.module.css';
import camarillaPicture from './pictures/camarilla.jpg'

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
                    <p>It has been two months since you were embraced.</p>
                    <p>It might feel like years ago, but forever has only just started.</p>             
                </AnimationOnScroll>
            </div>
            {/* <div className={styles.nineteenninityninesection}>
                <AnimationOnScroll animateIn='fadeIn'>
                    <p>Every day you are fading away, every night you come back to life.</p>
                    <p>The hunger drives you and your kind.</p>
                </AnimationOnScroll>
            </div> */}
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
                <div className={styles.innerText}>
                    <AnimationOnScroll animateIn='fadeIn'>
                        <p>Jonathan found you unconcious at the top of Poe's Enterprises at the brink of dawn.</p>
                        <p>If he was an hour later, you would all be ash.</p>
                        <p>No evidence of battle was seen the next night, sending a feeling of doubt through your dead bodies.</p>
                        <p>Is the so-called Cardinal dead?</p>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn='fadeIn'>
                        <img className={styles.pictureRight} src={camarillaPicture} />
                    </AnimationOnScroll>
                </div>
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
                <div className={styles.innerText}>
                    <AnimationOnScroll animateIn='fadeIn'>
                        <p>
                            The Camarilla are still having issues after Poe's final death. Due to how many of kindred in the city were killed and 
                            Elysiums were destroyed in the process, the Camarilla rule of the city is still in shambles.
                        </p>
                        <p>Luckily the Sabbat have not attempted to take the city in the past months while the Camarilla are in a weakened state.</p>
                        <p>Jonathan is now Prince of Miami and the Tremere has more power in the city than ever before. While the Nosferatus initially disagreed, the Primogens of Miami has mostly agreed to the Tremere Prince's rule.</p>
                        <p>With Jonathan as Prince, his childe Cedric was given the role of Sheriff.</p>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn='fadeIn'>
                        <img className={styles.pictureRight} src={camarillaPicture} />
                    </AnimationOnScroll>
                </div>
            </div>

            <div className={styles.camarillaheader}>
                <AnimationOnScroll animateIn='fadeIn'>
                    <h1>The Sabbat</h1>
                </AnimationOnScroll>
            </div>

            <div className={styles.camarillaSection}>
                <div className={styles.innerText}>
                    <AnimationOnScroll animateIn='fadeIn'>
                        <p>With the death of what the Camarilla declared the Cardinal of the region and the threat of the Sabbat quenched, only a few packs of the Sabbat cainites still roam around.</p>
                        <p>Mostly disorganized with a few declaring themselves Archbishops of Miami, the rumors say keep recruiting and embracing in the shadows.</p>
                        <p>Intel are saying The Sabbat are driven further south. The Camarilla are unsure of what happens down there, as rebuilding Miami and securing the Traditions is more important.</p>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn='fadeIn'>
                        <img className={styles.pictureRight} src={camarillaPicture} />
                    </AnimationOnScroll>
                </div>
            </div>

            <div className={styles.camarillaheader}>
                <AnimationOnScroll animateIn='fadeIn'>
                    <h1>The Elysium</h1>
                </AnimationOnScroll>
            </div>
            <div className={styles.camarillaSection}>
                <div className={styles.innerText}>
                    <AnimationOnScroll animateIn='fadeIn'>
                    <p>'Uprising' has very recently been rebranded to 'No Mercy' and opened back up with Rosalie as the new owner and Henry as a major stakeholder.</p>
                    <p>This Elysium has now become one of the more frequent places for the Kindred of the city to mingle around.</p>
                    <p>While all Elysiums are neutral ground and every Kindred are welcome on it's grounds, this one is particularily impartial due to the joint effort between the Ventrue, Toreador and the Malkavians in running the club.</p>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn='fadeIn'>
                        <img className={styles.pictureRight} src={camarillaPicture} />
                    </AnimationOnScroll>
                </div>
            </div>

            <div className={styles.nineteenninityninesection}>
                <div className={styles.innerText}>
                    <AnimationOnScroll animateIn='fadeIn'>
                    <p>
                        Another Elysium, the bar known as 'The Firmament' previously ran by Angel has been taken ownership of by the Brujah, as the Toreador run two Elysiums already and none of the other clans were interested in a pub. 
                    </p>
                    <p>
                        Due to how Eduardo Cortez is barely a leader for the Brujah to the Prince's frustration, 'The Firmament' is currently closed, but in fine shape. 
                    </p>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn='fadeIn'>
                        <img className={styles.pictureRight} src={camarillaPicture} />
                    </AnimationOnScroll>
                </div>
            </div>
            
            <div className={styles.nineteenninityninesection}>
                <div className={styles.innerText}>
                    <AnimationOnScroll animateIn='fadeIn'>
                    <p>The Toreador primogen Jaxon Wynwood met his final death in the fire that torched the Wynwood Museeum to the ground. </p>
                    <p>
                        Due to this, the museeum is still in the process of being rebuilt. The Toreador Elysium will most likely not be open for the public for at least half a year.
                        Jaxon's childe, Ashton, has taken over his duty as primogen of the Toreador.
                    </p>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn='fadeIn'>
                        <img className={styles.pictureRight} src={camarillaPicture} />
                    </AnimationOnScroll>
                </div>
            </div>
            <div className={styles.nineteenninityninesection}>
                <div className={styles.innerText}>
                    <AnimationOnScroll animateIn='fadeIn'>
                    <p>The Tremere's chantry still stands and is the primary location of the Prince's seat.</p>
                    <p>The chantry as an Elysium has only one section that is open to the public, being the room where Franklin was given his embrace.</p>
                     <p>
                        It was refurnished and given a large desk that the Prince uses for his duties in front of the menacing fireplace that lights up the dark room.
                        The red chairs are still there and are used for talking with the Prince when needed.
                    </p>
                    <p>The rest of the chantry is a guarded secret. Some Kindred are highly speculating what might be happening behind the blood wizards' door.</p>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn='fadeIn'>
                        <img className={styles.pictureRight} src={camarillaPicture} />
                    </AnimationOnScroll>
                </div>
            </div>
            <div className={styles.camarillaheader}>
                <AnimationOnScroll animateIn='fadeIn'>
                    <h1>The Kindred</h1>
                </AnimationOnScroll>
            </div>
            <div className={styles.nineteenninityninesection}>
                <div className={styles.innerText}>
                    <AnimationOnScroll animateIn='fadeIn'>
                        <p>Jonathan Maximilian</p>
                        <p>Clan: Tremere</p>
                        <p>The Prince of Miami after Poe met his Final Death. He leads the Tremere and all the kindred of the city. He is the childe of Maxmilian Strauss and has much respect for Strauss to the point he chose to replace his previous last name with Strauss' first name.</p>
                        <p>As the leader of the Camarilla of the city, Jonathan has immense say in city business. However unlike his predecessor he does not have unlimited pockets and has extra responsibilities both to the Chantry and to the Pyramid.</p>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn='fadeIn'>
                        <img className={styles.pictureRight} src={camarillaPicture} />
                    </AnimationOnScroll>
                </div>
            </div>
            <div className={styles.nineteenninityninesection}>
                <div className={styles.innerText}>
                    <AnimationOnScroll animateIn='fadeIn'>
                        <p>Cedric </p>
                        <p>Clan: Tremere</p>
                        <p>Franklin's sire and the Prince's childe. He is quite new within the ranks of the Tremere as he was embraced three years ago and is a little slow compared to his Tremere bretheren.</p>
                        <p>He has gotten the title of Sheriff in the city, as the Prince does not trust the other clans to be his sword. This is not surprising when the Prince's headquarters are the closely guarded Tremere Chantry.</p>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn='fadeIn'>
                        <img className={styles.pictureRight} src={camarillaPicture} />
                    </AnimationOnScroll>
                </div>
            </div>
            <div className={styles.nineteenninityninesection}>
                <div className={styles.innerText}>
                    <AnimationOnScroll animateIn='fadeIn'>
                        <p>Logan Reeves</p>
                        <p>Clan: Ventrue</p>
                        <p>Logan is a fashion entrepreneur. While he is no model and keeps out of the limelight he does have significant power within the clothing business and Miami as a whole.</p>
                        <p>After Dallas Poe met his Final Death, Logan became primogen of the Ventrue.</p>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn='fadeIn'>
                        <img className={styles.pictureRight} src={camarillaPicture} />
                    </AnimationOnScroll>
                </div>
            </div>
            <div className={styles.nineteenninityninesection}>
                <div className={styles.innerText}>
                    <AnimationOnScroll animateIn='fadeIn'>
                        <p>Victoria Moore</p>
                        <p>Clan: Ventrue</p>
                        <p>Victoria was Logan's ghoul for decades doing secretary work for him. The not-so-unusual event of a relationship between secretary and CEO happened which in the end concluded with Poe giving Logan the right to embrace Victoria into the Ventrue family.</p>
                        <p>She keeps doing secretary work for Logan Industries Inc. and is his right hand in Primogen responsibilities to this date, but has ghouls of her own to keep the business going at daytime.</p>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn='fadeIn'>
                        <img className={styles.pictureRight} src={camarillaPicture} />
                    </AnimationOnScroll>
                </div>
            </div>
            <div className={styles.nineteenninityninesection}>
                <div className={styles.innerText}>
                    <AnimationOnScroll animateIn='fadeIn'>
                        <p>Laila Hill</p>
                        <p>Clan: Malkavian</p>
                        <p>Laila is the local cowgirl and works at No Mercy. She was in debt to Fredrich Giovanni due to spending too much money on cowboy merch with a mastercard.</p>
                        <p>After the demise of Jasmine Bailey, the previous Malkavian primogen who got diablerized by Giovanni, she is now the primogen of the Malkavians in the city which is comprised of her and her sister Makenzie.</p>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn='fadeIn'>
                        <img className={styles.pictureRight} src={camarillaPicture} />
                    </AnimationOnScroll>
                </div>
            </div>
            <div className={styles.nineteenninityninesection}>
                <div className={styles.innerText}>
                    <AnimationOnScroll animateIn='fadeIn'>
                        <p>Makenzie Hill</p>
                        <p>Clan: Malkavian</p>
                        <p>Makenzie is the little sister of Laila, the current primogen of the Malkavians. Of the two sisters she is the more timid and paranoid one and has gotten in trouble for draining clients previously, a situation that was solved by Rosalie.</p>
                        <p>She also works at No Mercy for easy blood supplies.</p>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn='fadeIn'>
                        <img className={styles.pictureRight} src={camarillaPicture} />
                    </AnimationOnScroll>
                </div>
            </div>
            <div className={styles.nineteenninityninesection}>
                <div className={styles.innerText}>
                    <AnimationOnScroll animateIn='fadeIn'>
                        <p>Ashton Nathaniel Miller</p>
                        <p>Clan: Toreador</p>
                        <p>After the Final Death of Jaxon Leonardo Wynwood during the battle for Miami, his childe Ashton has taken Jaxon's role as Primogen of the Toreador and the proprietor of the Wynwood Art District in Miami.</p>
                        <p>He has been busy fixing up the art district after the fire caused by the Sabbat and has little time for the Prince's plans and politics at the moment.</p>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn='fadeIn'>
                        <img className={styles.pictureRight} src={camarillaPicture} />
                    </AnimationOnScroll>
                </div>
            </div>
        </div>
    )
}

export default Information;