import styles from './combatTypes.module.css';

function DamageTypes() {
    return (
        <div className={`fadeIn`}>
            <h2>Damage Types</h2>
            <p>
                All attacks have specific damage ratings, indicating 
                the number of dice to roll for the attack's damage called the damage dice pool.
            </p>
            <p>
                Damage dice pools can never be reduced to lower
                than one die; any attack that strikes its target has at
                least a small chance of inflicting damage before a soak
                roll is made. Moreover, damage effect rolls cannot
                botch; a botched roll simply means the attack glances
                harmlessly off the target.
            </p>
            <p>
                Some damage dice pools
                are based on the attacker's Strength, while others are
                based on the weapon used.
            </p>
            <p>Damage dice rolls are made versus difficulty 6.</p>
            <p>
                Each success on the damage roll inflicts one health level of damage on the target. However, the damage applied may be one of three types:
            </p>
            <h3>Bashing damage:</h3>
            <p>
                Bashing damage comprises punches and
                other blunt trauma that are less likely to kill a victim
                (especially a vampire) instantly. All characters use
                their full Stamina ratings to resist bashing effects (see soaking), and
                the damage heals fairly quickly. Bashing damage is applied to the Health boxes on your character sheet with
                a <span className={styles.damageBox}>/</span>
            </p>
            <h3>Lethal damage:</h3>
            <p>
                Attacks meant to cause immediate and fatal injury to the target. Mortals may not use Stamina to
                resist lethal effects (see soaking), and the damage takes quite a while
                to heal. Vampires may resist lethal damage with their
                Stamina. Lethal damage is applied to the Health boxes
                on your vampire's character sheet with a <span className={styles.damageBox}>X</span>
            </p>
            <h3>Aggravated damage:</h3>
            <p>
                Certain types of attacks are deadly
                even to the undead. Fire, sunlight, and the teeth and
                claws of vampires, werewolves, and other supernatural
                beings are considered aggravated damage.
            </p>
            <p>
                Aggravated damage cannot be soaked except with Fortitude, and it takes quite a while to heal. Aggravated damage is applied to the Health boxes on your character sheet with
                an asterisk <span className={styles.damageBox}>✱</span>
            </p>
        </div>
    )
}

export default DamageTypes;