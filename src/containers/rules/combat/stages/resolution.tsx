import styles from './combatStages.module.css';

function Resolution() {
    return (
        <div className={styles.fadeInLoad}>
            <h2>Resolution</h2>
            <p>
                During this stage, you determine the damage inflicted
                by your character's attack, and the Storyteller describes
                what occurs in the turn.
            </p>
            <p>
                Normally, additional successes gained on a Trait roll
                simply mean that you do exceptionally well. In combat, each extra success you get on an attack roll equals an additional die 
                you add automatically to your damage dice pool. This creates cinematic and often fatal combat.
            </p>
            <p>
                <b>Example:</b> You have an axe (Strength +3 damage), your strength is two. If you get one success, you roll 5 dice. 
                If you get three successes, you roll 7 dice.
            </p>
            <p>
                After damage have been rolled against your character, you are allowed to do a soak roll. 
            </p>
        </div>
    )
}

export default Resolution;