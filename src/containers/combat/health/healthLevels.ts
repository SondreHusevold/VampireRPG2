export const healthLevels = [
    {
        level: "Bruised",
        penalty: "0",
        movement: "Character is only bruised and suffers no dice pool penalties due to damage."
    },
    {
        level: "Hurt",
        penalty: "-1",
        movement: "Character is superficially hurt and suffers no movement hindrance."
    },
    {
        level: "Injured",
        penalty: "-1",
        movement: "Character suffers minor injuries and movement is mildly inhibited (halve maximum running speed)."
    },
    {
        level: "Wounded",
        penalty: "-2",
        movement: "Character suffers significant damage and may not run (though he may still walk). Character can only move or attack; he always loses dice when moving and attacking in the same turn."
    },
    {
        level: "Mauled",
        penalty: "-2",
        movement: "Character is badly injured and may only hobble about (three meters per turn)."
    },
    {
        level: "Crippled",
        penalty: "-5",
        movement: "Character is catastrophically injured and may only crawl (one meter per turn)."
    },
    {
        level: "Incapacitated",
        penalty: "",
        movement: "Character is incapable of movement and is likely unconscious. Incapacitated vampires with no blood in their bodies enter torpor."
    },
    {
        level: "Torpor",
        penalty: "",
        movement: "Character enters a deathlike trance. He may do nothing, not even spend blood, until a period of time has passed."
    },
    {
        level: "Final Death",
        penalty: "",
        movement: "Character is killed permanently."
    }
]