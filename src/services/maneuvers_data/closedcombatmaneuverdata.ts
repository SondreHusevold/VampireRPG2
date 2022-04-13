
interface CloseCombatManeuverData {
    maneuver: string;
    traits: string;
    accuracy: string;
    difficulty: string;
    damage: string;
    special: string | null;
}

export const closecombatmaneuverdata: CloseCombatManeuverData[] = [
    {
        maneuver: "Bite", traits: "Dex + Brawl",
        accuracy: "+1", difficulty: "Normal",
        damage: "Str + 1",
        special: "Does aggravated damage"
    },
    {
        maneuver: "Block", traits: "Dex + Brawl",
        accuracy: "Special", difficulty: "Normal",
        damage: "None", special: "Reduces opponent's attack succcesses"
    },
    {
        maneuver: "Claw", traits: "Dex + Brawl",
        accuracy: "Normal", difficulty: "Normal",
        damage: "Str +1",
        special: "Does aggravated damage"
    },
    {
        maneuver: "Clinch", traits: "Str + Brawl",
        accuracy: "Normal", difficulty: "Normal",
        damage: "Str", special: "Maneuver carries over on successive turns"
    },
    {
        maneuver: "Disarm", traits: "Dex + Melee",
        accuracy: "Normal", difficulty: "+1",
        damage: "Special", special: null
    },
    {
        maneuver: "Dodge", traits: "Dex + Athletics",
        accuracy: "Special", difficulty: "Normal",
        damage: "None", special: "Reduces opponent's attack succcesses"
    },
    {
        maneuver: "Hold", traits: "Str + Brawl",
        accuracy: "Normal", difficulty: "Normal",
        damage: "None", special: "Maneuver carries over on successive turns"
    },
    {
        maneuver: "Kick", traits: "Dex + Brawl",
        accuracy: "Normal", difficulty: "+1",
        damage: "Str +1", special: null
    },
    {
        maneuver: "Parry", traits: "Dex + Melee",
        accuracy: "Special", difficulty: "Normal",
        damage: "None", special: "Reduces opponent's attack succcesses"
    },
    {
        maneuver: "Strike", traits: "Dex + Brawl",
        accuracy: "Normal", difficulty: "Normal",
        damage: "Str", special: null
    },
    {
        maneuver: "Sweep", traits: "Dex + Brawl/Melee",
        accuracy: "Normal", difficulty: "+1",
        damage: "Str", special: "Causes knockdown"
    },
    {
        maneuver: "Tackle", traits: "Str + Brawl",
        accuracy: "Normal", difficulty: "+1",
        damage: "Str +1", special: "Causes knockdown"
    },
    {
        maneuver: "Weapon Strike", traits: "Dex + Melee",
        accuracy: "Normal", difficulty: "Normal",
        damage: "Weapon", special: null
    }                                    
]