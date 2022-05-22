function GeneralManeuvers() {
    return (
        <div className={`fadeIn`}>
            <h2>General Maneuvers</h2>            
            <h3>Aborting</h3>
            <p>
                You can abandon your character's declared action in favor of a defensive action as long as your character hasn't acted in the turn. 
                Actions that can take the place of a previously declared action include block, dodge, and parry. 
            </p>
            <p>
                A successful Willpower roll versus difficulty 6 (or the expenditure of a Willpower point) 
                is required for a character to abort an action and perform a defensive one instead.
            </p>
            <h3>Ambush</h3>
            <p>
                The attacker rolls Dexterity + Stealth in a resisted action against the target's Perception + Alertness. 
                If the attacker scores more successes, she can stage one free attack on the target; she then adds any extra successes from the resisted roll to her attack dice pool. 
                Targets already involved in combat cannot be ambushed.
            </p>
            <p>On a tie, the attacker still attacks first, although the target may perform a defensive maneuver. On a fail normal initiatives are rolled.</p>
            <h3>Blind/Fire</h3>
            <p>
                Incurs a +2 difficulty, and ranged attacks cannot be accurately made at all.
            </p>
            <h3>Flanking</h3>
            <p>
                Characters attacking targets from the flank gain an additional attack die. Characters attacking from the rear gain two additional attack dice.
            </p>
            <h3>Movement</h3>
            <p>
                A character may move half of her running distance (20 meters + (3 · Dexterity)) and still take an action in a turn. Leaping or tumbling may be considered separate actions.
            </p>
            <h3>Targeting</h3>
            <p>
                Aiming for a specific location incurs an added difficulty, but can bypass armor or cover, or can result in an increased damage effect.
            </p>
            <p>Medium size (limb, briefcase): +1 Difficulty, No damage modifier</p>
            <p>Small size (hand, head, cellphone): +2 Difficulty, +1 damage</p>
            <p>Precise size (Eye, heart, lock): +3 Difficulty, +2 damage</p>
        </div>
    )
}

export default GeneralManeuvers;