function Effects() {
    return (
        <>
            <h3>Blinded</h3>
            <p>Add two dice to attack rolls made against a blinded target. Furthermore, blind characters are at +2 difficulty on all actions.</p>
            <h3>Dazed</h3>
            <p>
                If, in a single attack, the attacker rolls a
                number of damage successes greater than the target's
                Stamina (for mortals) or Stamina + 2 (for vampires
                and other supernatural beings), the victim is dazed.
            </p>
            <p>
                The target must spend her next available turn shaking
                off the attack's effects. Only damage successes that
                penetrate the defender's soak attempt count toward
                this total.
            </p>
            <h3>Immobilization</h3>
            <p>
                Add two dice to attack rolls made
                on an immobilized (i.e., held by someone or something)
                but still struggling target. Attacks hit automatically if
                the target is completely immobilized (tied up, staked,
                or otherwise paralyzed).
            </p>
            <h3>Knockdown</h3>
            <p>
                After suffering a knockdown, the subject makes a Dexterity + Athletics roll. 
                If successful, she may get back on her feet immediately, but her initiative is reduced by two
                in the next turn. 
            </p>
            <p>On a failed roll, the subject spends her next action climbing to her feet, if she chooses to rise.</p>
            <p>
                On a botch, she lands particularly hard or at a severe angle, 
                taking an automatic health level of bashing damage.
            </p>
            <p>
                Maneuvers like tackle and sweep are intended to
                knock an opponent down. However, an especially
                powerful attack of any kind may send the target to the
                ground. Such instances are best left to the Storyteller's
                discretion.
            </p>
            <h3>Stake Through Heart</h3>
            <p>
                A vampire can indeed be
                incapacitated by the classic wooden stake of legend.
                However, the legends err on one point: A Kindred impaled through the heart with a wooden stake is merely paralyzed until the stake is removed.
            </p>
            <p>
                To stake a vampire, an attacker must target the heart
                (difficulty 9). If the attack succeeds and inflicts at least
                three health levels of damage, the target is immobilized.
            </p>
            <p>
                An immobilized victim is conscious (and may use
                perception powers, such as those in the Auspex Discipline), 
                but may not move or spend blood points.
            </p>
            <p>For more information on getting staked and paralyzed, see p.293 of the Core Rulebook.</p>
        </>
    )
}

export default Effects;