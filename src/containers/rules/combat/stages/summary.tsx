import styles from './combatStages.module.css';

function Summary() {
    return (
        <div className={`${"fadeIn"} ${styles.summary}`}>
            <h3>Stage 1: Initiative</h3>
            <p>
                Roll initiative (<b>1x D10 + Dexterity + Wits</b>).
            </p>
            <p>
                Everyone declares their actions in reverse order to let faster character act on slower characters. The character with highest initiative performs her action first. Actions can be delayed to any time later in the order of initiative.
            </p>
            <p>
                Declare any multiple actions, reducing dice
                pools accordingly. Declare Discipline activation and Willpower expenditure.
            </p>
            <h3>Stage 2: Attack</h3>
            <p>Uarmed close-combat attacks, roll <b>Dexterity + Brawl.</b></p>
            <p> Armed close-combat attacks, roll <b>Dexterity + Melee.</b></p>
            <p>Guns, roll <b>Dexterity + Firearms</b>.</p>
            <p>Thrown weapons, roll <b>Dexterity + Athletics</b>.</p>
            <p>
                A character can abort to a defensive action
                (block, dodge, parry) at any time before her
                action is performed, as long as you make a
                successful Willpower roll (or a Willpower
                point is spent).
            </p>
            <h3>Stage 3: Resolution</h3>
            <p>
                Determine total damage effect (weapon type or maneuver), adding any extra dice gained from successes on the attack roll.
            </p>
            <p>
                Targets may attempt to soak damage, if possible.
            </p>
        </div>
    )
}

export default Summary;