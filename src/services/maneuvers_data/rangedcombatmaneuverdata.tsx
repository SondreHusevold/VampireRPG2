import { Link } from "react-router-dom";

interface RangedCombatManeuverData {
    maneuver: string;
    traits?: string;
    accuracy?: string;
    difficulty?: string;
    damage?: string;
    description?: JSX.Element;
}

function AutomaticDescription() {
    return (
        <div>
            <p>
                The weapon unloads its entire ammunition clip in one attack against a single target. The attacker makes a single roll, adding 10 dice to her accuracy. 
                However, the attack roll is at a +2 difficulty due to the weapon's recoil.
            </p>
            <p>Extra successes add to the damage dice pool, which is still treated as equivalent to one bullet. An attacker using automatic fire may not target a specific area of the body.</p>
            <p>This attack is permissible only if the weapon's clip is at least half-full to begin with.</p>
        </div>
    )
}

function BurstDescription() {
    return (
        <div>
            <p> The attacker gains two additional dice on a single attack roll, and expends three shots from the weapon's clip.</p>
            <p>Only certain weapons may perform this maneuver; see the <Link to="/rules/equipment/ranged">Ranged Weapons Chart</Link> for particulars.</p>
            <p>Attacks are made at +1 difficulty due to recoil. As with automatic fire, the damage dice pool is based on one bullet from the weapon in question.</p>
        </div>
    )
}

function MultipleDescription() {
    return (
        <div>
            <p>An attacker with a fast firearm may try to take more than one shot in a turn.</p>
            <p>
                The attacker can divide his attack dice pool by how many shots she wants to fire at a similar number of targets, 
                up to the weapon's rate of fire (multiple attacks against the same target are covered under maneuvers like “Automatic Fire” and “Three-Round Burst”).</p>
            <p>Each attack is then rolled separately.</p>
        </div>
    )
}

function StrafingDescription() {
    return (
        <div>
            <p>Instead of aiming at one target, fully-automatic weapons can be fired across an area. Strafing adds 10 dice to accuracy on a standard attack roll, and empties the clip.</p>
            <p>A maximum of three yards/meters can be covered with this maneuver.</p>
            <p>The attacker divides any successes gained on the attack roll evenly among all targets in the covered area (successes assigned to hit an individual are added to that target's damage dice pool, as well).</p>
            <p>If only one target is within range or the area of effect, only half the successes affect him. The attacker then assigns any leftover successes as she desires.</p>
            <p>If fewer successes are rolled than there are targets, only one may be assigned per target until they are all allocated.</p>
        </div>
    )
}

function TwoWeapons() {
    return (
        <div>
            <p>Firing two weapons is considered performing a multiple action, complete with dividing the dice of the lowest pool between two different targets. </p>
            <p>Additionally, the attacker suffers +1 difficulty for the attack with her off-hand (unless she’s ambidextrous).</p>
            <p>Each attack is rolled and resolved separately, multiple attacks made against the same target are covered by maneuvers such as “Automatic Fire” and “Three-Round Burst.”</p>
        </div>
    )
}

function CoverDescription() {
    return (
        <div>
            <p>Cover increases an attacker’s difficulty to hit a target (and often the target’s ability to fire back).</p>
            <p>
                Difficulty penalties for hitting a target under various types of cover are listed below. 
                A character who fires back from behind cover is also at something of a disadvantage to hit, as he exposes himself and ducks back under protection.
            </p>
            <p>
                Firearms attacks made by a defender who is under cover are at one lower difficulty than listed below. 
                (If a listed difficulty is +1, then the defender suffers no penalty to make attacks from under that cover.)
            </p>
            <p>If your character hides behind a wall, attackers’ Firearms rolls have a +2 difficulty. Your character’s attacks staged from behind that wall are at +1 difficulty.</p>
            <p>
                Note that difficulties for combatants who are both under cover are cumulative. If one combatant is prone and one is behind a wall, attacks staged by the prone
                character are at +2 difficulty, while attacks staged by the character behind the wall are also at +2 difficulty.
            </p>
        </div>
    )
}

function ReloadDescription() {
    return (
        <div>
            <p>Reloading takes one full turn and requires the character’s concentration.</p>
            <p>Like any other maneuver, reloading can be performed as part of a multiple action.</p>
        </div>
    )
}

export const rangedcombatmaneuversdata: RangedCombatManeuverData[] = [
    {
        maneuver: "Automatic Fire", 
        traits: "Dex + Firearms",
        accuracy: "+10", 
        difficulty: "+2",
        damage: "Special",
        description: <AutomaticDescription/>
    },

    {
        maneuver: "3-Round Burst",
        traits: "Dex + Firearms",
        accuracy: "+2",
        difficulty: "+1",
        damage: "Weapon",
        description: <BurstDescription/>
    },
    {
        maneuver: "Multiple Shots", 
        traits: "Dex + Firearms",
        accuracy: "Special", 
        difficulty: "Normal",
        damage: "Weapon",
        description: <MultipleDescription/>
    },
    {
        maneuver: "Two Weapons",
        traits: "Dex + Firearms",
        accuracy: "Normal",
        difficulty: "+1/Off-Hand",
        damage: "Weapon",
        description: <TwoWeapons/>
    },
    {
        maneuver: "Strafing",
        traits: "Dex + Firearms",
        accuracy: "+10",
        difficulty: "+2",
        damage: "Special",
        description: <StrafingDescription/>
    },
    {
        maneuver: "Cover",
        description: <CoverDescription/>
    },
    {
        maneuver: "Reload",
        description: <ReloadDescription/>
    }
]