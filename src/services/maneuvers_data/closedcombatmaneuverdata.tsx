interface CloseCombatManeuverData {
    maneuver: string;
    traits: string;
    accuracy: string;
    difficulty: string;
    damage: string;
    feature: string | null;
    description?: JSX.Element;
}

function BiteDescription() {
    return (
        <div>
            <p>
                This maneuver is available only to vampires (or other supernatural creatures with sharp teeth, such as werewolves). 
                A bite maneuver is a “combat” bite, intended to cause damage rather than drain blood. Bite damage is aggravated. 
            </p>
            <p>
                To use a bite attack, the vampire must first perform a successful clinch, hold, or tackle maneuver. 
                On the turn following the successful attack, the player may declare the bite attempt and make a roll using the modifiers below.
            </p>
            <p>
                Alternatively, a player can declare her vampire's bite to be a “Kiss” attack. A Kiss is resolved in the same way as a normal bite, but inflicts no health levels of damage.
            </p>
            <p>
                Upon connecting with a Kiss, the vampire may begin to drain the victim's blood at the normal rate, and the victim is typically helpless to resist (see p. 269 for specifics). 
                Following the Kiss, a vampire may, if she chooses, lick the puncture wound of the Kiss closed, thereby removing any evidence that she has fed.
            </p>
        </div>
    )
}

function ClawDescription() {
    return (
        <div>
            <p>
                This attack is available to vampires with claws, such as those from the Protean power of Feral Claws or bone spurs constructed with the Vicissitude power of Bonecraft. 
                A few other supernatural creatures, such as werewolves, also have claws.
            </p>
            <p>
                A claw attack inflicts aggravated damage (if Feral Claws) or lethal damage (if a Vicissitude-constructed weapon).
            </p>
        </div>
    )
}

function ClinchDescription() {
    return (
        <div>
            <p>
                On a successful attack roll, the attacker goes into a clinch with the target. In the first turn, the attacker may roll Strength damage. 
                In each subsequent turn, combatants act on their orders in the initiative.
            </p>
            <p>
                A combatant can inflict Strength damage automatically or attempt to escape the clinch. No other actions are allowed until one combatant breaks free. 
                To escape a clinch, make a resisted Strength + Brawl roll against the opponent. If the escaping character has more successes, she breaks free; if not, the characters continue
                to grapple in the next turn.
            </p>
        </div>
    )
}

function DisarmDescription() {
    return (
        <div>
            <p>
                To strike an opponent's weapon, the attacker must make an attack roll at +1 difficulty. If successful, the attacker rolls damage normally. 
                If successes rolled exceed the opponent's Strength rating, the opponent takes no damage but is disarmed.
            </p>
            <p>A botch usually means the attacker drops her own weapon or is struck by her target's weapon.</p>
        </div>
    )
}

function HoldDescription() {
    return (
        <div>
            <p>
                This attack inflicts no damage, as the intent is to immobilize rather than injure the subject. 
                On a successful roll, the attacker holds the target until the subject's next action.
            </p>
            <p>
                At that time, both combatants roll resisted Strength + Brawl actions; the subject remains immobilized
                (able to take no other action) until she rolls more successes than the attacker does.
            </p>
        </div>
    )
}

function KickDescription() {
    return (
        <div>
            <p>Kicks range from simple front kicks to aerial spins. The base attack is at +1 difficulty and inflicts the attacker's Strength +1 in damage.</p>
            <p>These ratings may be modified further at the Storyteller's discretion, increasing in damage and/or difficulty as the maneuver increases in complexity.</p>
        </div>
    )
}

function StrikeDescription() {
    return (
        <div>
            <p>The attacker lashes out with a fist. The base attack is a standard action and inflicts the character's Strength in damage.</p>
            <p>The Storyteller may adjust the difficulty and/or damage depending on the type of punch: hook, jab, haymaker, karate strike.</p>
        </div>
    )
}

function SweepDescription() {
    return (
        <div>
            <p>
                The attacker uses her own legs to knock the legs out from under her opponent. 
                The target takes Strength damage and must roll Dexterity + Athletics (difficulty 8) or suffer a knockdown.
            </p>
            <p>The attacker can also use a staff, chain, or similar implement to perform a sweep. The effect is the same, although the target takes damage per the weapon type.</p>
        </div>
    )
}

function TackleDescription() {
    return (
        <div>
            <p>The attacker rushes her opponent, tackling him to the ground. The attack roll is at +1 difficulty, and the maneuver inflicts Strength +1 damage.</p>
            <p>Additionally, both combatants must roll Dexterity + Athletics (difficulty 7) or suffer a knockdown.</p>
            <p>Even if the target's Athletics roll succeeds, he is unbalanced, suffering +1 difficulty to his actions for the next turn.</p>
        </div>
    )
}

function WeaponStrike() {
    return (
        <div>
            <p>A slashing blow, thrust, or jab, depending on the weapon used.</p>
            <p>
                It is difficult to get in range with a punch or knife if someone else is wielding a sword or staff. A character being fended off with a longer weapon must 
                close in one yard/meter before striking, losing a die from her attack roll in the process.
            </p>
        </div>
    )
}

export const closecombatmaneuverdata: CloseCombatManeuverData[] = [
    {
        maneuver: "Bite", traits: "Dex + Brawl",
        accuracy: "+1", difficulty: "Normal",
        damage: "Str + 1",
        feature: "Does aggravated damage",
        description: <BiteDescription/>
    },
    {
        maneuver: "Claw", traits: "Dex + Brawl",
        accuracy: "Normal", difficulty: "Normal",
        damage: "Str +1",
        feature: "Does aggravated damage",
        description: <ClawDescription/>
    },
    {
        maneuver: "Clinch", traits: "Str + Brawl",
        accuracy: "Normal", difficulty: "Normal",
        damage: "Str", feature: "Maneuver carries over on successive turns",
        description: <ClinchDescription/>
    },
    {
        maneuver: "Disarm", traits: "Dex + Melee",
        accuracy: "Normal", difficulty: "+1",
        damage: "Special", feature: null,
        description: <DisarmDescription/>
    },
    {
        maneuver: "Hold", traits: "Str + Brawl",
        accuracy: "Normal", difficulty: "Normal",
        damage: "None", feature: "Maneuver carries over on successive turns",
        description: <HoldDescription/>
    },
    {
        maneuver: "Kick", traits: "Dex + Brawl",
        accuracy: "Normal", difficulty: "+1",
        damage: "Str +1", feature: null,
        description: <KickDescription/>
    },
    {
        maneuver: "Strike", traits: "Dex + Brawl",
        accuracy: "Normal", difficulty: "Normal",
        damage: "Str", feature: null,
        description: <StrikeDescription/>
    },
    {
        maneuver: "Sweep", traits: "Dex + Brawl/Melee",
        accuracy: "Normal", difficulty: "+1",
        damage: "Str", feature: "Causes knockdown",
        description: <SweepDescription/>
    },
    {
        maneuver: "Tackle", traits: "Str + Brawl",
        accuracy: "Normal", difficulty: "+1",
        damage: "Str +1", feature: "Causes knockdown",
        description: <TackleDescription/>
    },
    {
        maneuver: "Weapon Strike", traits: "Dex + Melee",
        accuracy: "Normal", difficulty: "Normal",
        damage: "Weapon", feature: null,
        description: <WeaponStrike/>
    }
]