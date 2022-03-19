function DefensiveManeuvers() {
    return (
        <div className="fadeIn">
            <h2>Defensive Maneuvers</h2>
            <p>
                Block, dodge, and parry can be performed as part of
                a multiple action in your character's turn (punching
                then blocking, shooting then dodging, parrying then
                striking). Using a multiple action to act and defend is
                advantageous because your character can still accomplish something in a turn besides avoiding attacks.
            </p>
            <p>
                Rather than having to divide your dice pool among
                multiple defensive actions, you may declare that your
                character spends an entire turn defending. The normal
                multiple-action rules are not used in this case.
            </p>
            <h3>Blocking</h3>
            <p>
                A Dexterity + Brawl maneuver using your character's own body to deflect a hand-to-hand bashing attack. 
                Lethal and aggravated attacks cannot be blocked unless the defender has Fortitude or is wearing armor.
            </p>
            <h3>Dodging</h3>
            <p>
                A Dexterity + Athletics maneuver useful for avoiding attacks of all types. If there's no room to maneuver, she must block or parry instead.
            </p>
            <h3>Parry</h3>
            <p>
                A Dexterity + Melee maneuver using a weapon to block a Brawl or Melee attack.
            </p>
            <p>
                If a character makes a Brawl attack and the defender parries with
                a weapon that normally causes lethal damage, the attacker can actually be hurt by a successful parry. 
                If the defender rolls more successes than the attacker does in the resisted action, the defender rolls the weapon's
                base damage plus the parry's extra successes as a damage dice pool against the attacker.
            </p>
        </div>
    )
}

export default DefensiveManeuvers;