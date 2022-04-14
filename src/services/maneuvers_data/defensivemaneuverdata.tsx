import { Link } from "react-router-dom";

interface DefensiveManeuverData {
    maneuver: string;
    traits: string;
    accuracy: string;
    difficulty: string;
    damage: string;
    feature: string | null;
    description?: JSX.Element;
}


function BlockDescription() {
    return (
        <div>
            <p>A Dexterity + Brawl maneuver using your character’s own body to deflect a hand-to-hand bashing attack. </p>
            <p>Lethal and aggravated attacks cannot be blocked unless the defender has Fortitude or is wearing armor.</p>
        </div>
    )
}

function DodgeDescription() {
    return (
        <div>
            <p>
                A Dexterity + Athletics maneuver useful for avoiding attacks of all types. 
                Your character bobs and weaves to avoid Melee or Brawl attacks (if there’s no room to maneuver, she must block or parry instead). 
            </p>
            <p>
                In gunfights, your character moves at least room to maneuver or no cover available, she can drop one yard/meter and ends up behind cover (if there’s no to the ground). 
                If your character remains under cover or prone, <Link to="../ranged-combat">cover rules</Link> apply against further Firearms attacks.
            </p>
        </div>
    )
}

function ParryDescription() {
    return (
        <div>
            <p>
                A Dexterity + Melee maneuver using a weapon to block a Brawl or Melee attack. 
                If a character makes a Brawl attack and the defender parries with a weapon that normally causes lethal damage, the attacker can actually be hurt by a successful parry. 
            </p>
            <p>
                If the defender rolls more successes than the attacker does in the resisted action, the defender rolls the weapon’s base damage plus the parry’s extra successes as a 
                damage dice pool against the attacker. 
            </p>
            <p>
                Block, dodge, and parry can be performed as part of a multiple action in your character’s turn (punching then blocking, shooting then dodging, parrying thenstriking). 
                Using a multiple action to act and defend is advantageous because your character can still accomplish something in a turn besides avoiding attacks.
            </p>
            <p>
                Rather than having to divide your dice pool among multiple defensive actions, you may declare that your character spends an entire turn defending. 
                The normal multiple-action rules are not used in this case. 
                Instead, you have a full dice pool for the first defensive action, but lose one die, cumulatively, for each subsequent defense action made in the same turn.
            </p>
            <p>
                It is still difficult to avoid several incoming attacks, but not as difficult as trying to attempt multiple things at once. 
                Remember that any actions, including defensive ones, versus multiple attackers still suffer difficulty penalties (see “Multiple Opponents,” p. 276).
            </p>
        </div>
    )
}

export const defensivemaneuverdata: DefensiveManeuverData[] = [
    {
        maneuver: "Block", traits: "Dex + Brawl",
        accuracy: "Special", difficulty: "Normal",
        damage: "None", feature: "Reduces opponent's attack succcesses",
        description: <BlockDescription/>

    },
    {
        maneuver: "Dodge", traits: "Dex + Athletics",
        accuracy: "Special", difficulty: "Normal",
        damage: "None", feature: "Reduces opponent's attack succcesses",
        description: <DodgeDescription/>
    },
    {
        maneuver: "Parry", traits: "Dex + Melee",
        accuracy: "Special", difficulty: "Normal",
        damage: "None", feature: "Reduces opponent's attack succcesses",
        description: <ParryDescription/>
    }
]