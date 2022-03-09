import styles from './health.module.css';

function Healing() {
    return (
        <div className={styles.fadeInLoad}>
            <h2>Healing Damage</h2>
            <p>A vampire may spend one blood point to heal one normal (bashing or lethal) health level of damage.</p>
            <p>One blood point per turn may be spent to heal one health level.</p>
            <p>
                Note that blood expenditure is the <b><i>only</i></b> way that
                vampires can heal wounds. Just as their immortality
                prevents the Kindred from aging and dying naturally,
                so it also inhibits the recuperative processes natural to
                a living body.
            </p>
            <h3>Aggravated damage</h3>
            <p>
                Aggravated damage is far more difficult to heal. A level of aggravated damage may be healed only with a full day of rest and the expenditure of five blood points (this expendure can be done at any time, but it will not be healed until a full day of rest).
            </p>
            <p> 
                At the end of the full day's rest, the vampire may cure additional aggravated health levels by spending an additional five blood points and one Willpower point per extra aggravated health level to be healed.
            </p>
            <p>
                Usually this means that you may only cure two points maximum of aggravated damage during a full day of rest. By using five points before resting, hunting and thereby replenishing blood points, resting the full day, expending five more after the rest. 
            </p>
        </div>
    )
}

export default Healing;