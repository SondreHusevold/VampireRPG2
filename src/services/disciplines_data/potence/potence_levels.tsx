import { DisciplineLevel } from "../../../models/discipline";

export function getPotenceLevel() {
    let potenceLevels: DisciplineLevel[] = [];

    for (let index = 0; index < 5; index++) {
        potenceLevels.push(
            {
                name: `Potence - Level ${index+1}`,
                description: (
                    <>
                    </>
                ),
                system: (
                    <>
                        <p>+{index+1} dice for Strength-related rolls. Can upgrade up to {index+1} Potence dice using blood points to automatic success dice for all strength rolls that turn.</p>
                        <p>In melee and brawling combat, successes from Potence (either rolled or automatic) are applied to the damage roll results.</p>
                    </>
                )
            }
        )
    }

    return potenceLevels;
}