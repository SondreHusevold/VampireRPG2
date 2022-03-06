import styles from './combatStages.module.css';

function Soaking() {
    return (
        <div className={styles.fadeInLoad}>
            <h2>Soaking:</h2>
            <p>
                Characters can resist a certain degree of physical
                punishment; this is called soaking damage.
            </p>
            <p>
                Your character's soak dice pool is equal to her <b>Stamina</b>. A normal human can soak only bashing damage. A vampire (or other supernatural being) is tougher, and can thus use soak dice against lethal damage.
            </p>
            <p>
                After an attack hits and inflicts damage, the defender may make a soak roll to resist. This is considered a reflexive action; characters need not take an action or split a dice pool to soak. Each soak success subtracts one die from the total damage inflicted. 
            </p>
            <p>
                <b>Unless otherwise stated, soak
                rolls are made versus difficulty 6.</b> 
            </p>
            <p>
                As with damage rolls, soak rolls may not botch, only fail.
            </p>
            <p>
                Aggravated damage may be soaked only with the Discipline of Fortitude.
            </p>
            <p>
                The Discipline Fortitude also adds to the defender's soak rating against bashing or lethal damage (so a character with Stamina 3 and Fortitude 2 has five soak dice against bashing and lethal damage, but only two soak dice against aggravated damage).
            </p>
        </div>
    )
}

export default Soaking;