import Death from "./death";
import styles from './health.module.css';

function ApplyingDamage() {
    return (
        <div className={styles.fadeInLoad}>
            <h2>Applying Damage</h2>
            <p>This is where you apply bashing, leathal and aggravated damage. Below is the same chart you have on your character sheet.</p>
            <p>Bashing and lethal damage differ in their effects, but for vampires, both types of damage are considered normal.</p>
            <p>Bashing damage is recorded as a slash <b>[/]</b></p>
            <p>Lethal damage is marked with an <b>[X]</b></p>
            <p>Aggravated damage is marked with an asterisk <b>[✱]</b></p>
            <p>
                Aggravated damage always gets marked above lethal, which gets marked above bashing. 
                So if you mark a level of lethal damage in the Bruised box, and take one aggravated health level later on, 
                move the lethal damage to the box below by marking the "Hurt" box with a [X]
            </p>
            <p>The aggravated level is then noted by simply drawing another line through the "Bruised" box, turning it into [✱] instead of the original [X].</p>
            <p>
                The same applies for bashing and lethal damage. If you have a box with bashing, and you get damaged with lethal damage, 
                you "move" the bashing damage down to the box below, and make the previous bashing damage into an [X].
            </p>
            <Death/>
        </div>
    )
}

export default ApplyingDamage;