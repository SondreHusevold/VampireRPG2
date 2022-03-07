import styles from './combatTypes.module.css';

function CombatTypesSection() {
    return (
        <div className={styles.fadeInLoad}>
            <h2>Combat Types</h2>
            <p>
                There are two types of combat, each involving the same basic system with minor differences:
            </p>
        
            <h3>Close Combat:</h3>
            <p>
                This covers unarmed combat
                (Dexterity + Brawl) and melee (Dexterity + Melee).
                Unarmed combat can involve a down-and-dirty bar
                brawl or an honorable test of skill.
            </p>
            <p>
                Opponents must be
                within touching distance (one meter) to engage
                in unarmed combat. Melee involves handheld weapons, from broken bottles to swords. Opponents must
                be within two meters of each other to engage in
                melee.
            </p>
            <h3>Ranged Combat:</h3>
            <p>
                Armed combat using projectile
                weapons — pistols, rifles, shotguns, etc. Opponents
                must normally be within sight (and weapon range) of
                each other to engage in a firefight.
            </p>
        </div>
    )
}

export default CombatTypesSection;