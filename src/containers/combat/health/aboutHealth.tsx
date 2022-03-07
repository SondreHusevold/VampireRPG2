import styles from './health.module.css';

function AboutHealth() {
    return (
        <div className={styles.fadeInLoad}>
            <h2>Health</h2>
            <p>Every character has seven health levels, ranging from Bruised to Incapacitated. Characters can also be in full health (with no health levels checked off).</p>
            <p>
                When an attacker scores a success on
                a damage roll, your character takes one health level of
                damage. This is marked on your character sheet in the
                appropriate box, although the mark you make depends
                on the type of damage inflicted. See applying damage.
            </p>
            <p>
                As your character gets more and more battered, it's increasingly difficult for him to perform even the simplest of tasks. 
                The dice penalty is subtracted from your dice pool for every action (except reflexive actions such as soak) until the wound heals. 
            </p>
            <p>The penalty also indicates impaired movement.</p>
        </div>
    )
}

export default AboutHealth;