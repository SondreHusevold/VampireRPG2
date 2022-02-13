import { DisciplineLevel } from "../../../models/discipline";

export function getFortitudeLevel() {
    let fortitudeLevels: DisciplineLevel[] = [];

    for (let index = 0; index < 5; index++) {
        fortitudeLevels.push(
            {
                name: `Fortitude - Level ${index+1}`,
                description: (
                    <>
                    </>
                ),
                system: (
                    <>
                        <p>+{index+1} to stamina for soak. {index+1} dice can soak aggravated damage.</p>
                    </>
                )
            }
        )
    }

    return fortitudeLevels;
}