import { DisciplineLevel } from "../../../models/discipline";
import styles from '../disciplineData.module.css';

const level1: DisciplineLevel = {
    name: "A Taste for Blood",
    description: (
        <>
            <p>
                This power was developed as a means of testing a foe’s might — an extremely important ability in the tumultuous early nights of Clan Tremere. 
            </p>
            <p>
                By merely touching the blood  of his subject, the caster may determine how much vitae remains in the subject and, if the subject is a vampire, 
                how recently he has fed, his approximate Generation and, with three or more successes, whether he has ever committed diablerie.
            </p>
        </>
    ),
    system: (
        <>
            <p>
                The number of successes achieved on the roll determines how much information the thaumaturge gleans and how accurate it is.
            </p>
        </>
    )
}

const level2: DisciplineLevel = {
    name: "Blood Rage",
    description: (
        <>
            <p>
                This power allows a vampire to force another Kindred to expend blood against his will. The caster must touch her subject for this power to work, 
                though only the lightest contact is necessary. 
            </p>
            <p>
                A vampire affected by this power might feel a physical rush as the thaumaturge heightens his Physical Attributes, might find himself suddenly looking more human, 
                or may even find himself on the brink of frenzy as his stores of vitae are mystically depleted.
            </p>
        </>
    ),
    system: (
        <>
            <p>
                Each success forces the subject to spend one blood point immediately in the way the caster desires (which must go towards some logical expenditure the target vampire could make, 
                such as increasing Physical Attributes or powering Disciplines).
            </p>
            <p>
                Note that blood points forcibly spent in this manner may exceed the normal “per turn” maximum indicated by the victim’s Generation. 
                Each success gained also increases the subject’s difficulty to resist frenzy by one. The thaumaturge may not use Blood Rage on herself to circumvent generational limits.
            </p>
        </>
    )
}

const level3: DisciplineLevel = {
    name: "Blood of Potency",
    description: (
        <>
            <p>
                The thaumaturge gains such control over his own blood that he may effectively “concentrate” it, making it more powerful for a short time. In effect, he may
                temporarily lower his own Generation with this power. This power may be used only once per night.
            </p>
        </>
    ),
    system: (
        <>
            <p>
                One success on the Willpower roll allows the character to lower his Generation by one step for one hour. Each additional success grants the Kindred either one step down in 
                Generation or one hour of effect.
            </p>
            <p>
                Successes earned must be spent both to decrease the vampire’s Generation and to maintain the change 
                (this power cannot be activated again until the original application wears off).
            </p>
            <p>
                If the vampire is diablerized while this power is in effect, it wears off immediately and the diablerist gains power appropriate to the caster’s actual Generation. 
                Furthermore, any mortals Embraced by the thaumaturge are born to the Generation appropriate to their sire’s original Generation (e.g., a Tenth-Generation Tremere 
                who has reduced his effective Generation to Eighth still produces Eleventh-Generation childer).
            </p>
            <p>
                Once the effect wears off, any blood over the character’s blood pool maximum dilutes, leaving the character at his regular blood pool maximum. 
                Thus, if a Twelfth-Generation Tremere (maximum blood pool of 11) decreased his Generation to Ninth (maximum blood pool 14), ingested 14 blood points, and had this
                much vitae in his system when the power wore off, his blood pool would immediately drop to 11.
            </p>
        </>
    )
}

const level4: DisciplineLevel = {
    name: "Theft of Vitae",
    description: (
        <>
            <p>
                A thaumaturge using this power siphons vitae from her subject. She need never come in contact with the subject — blood literally streams out in a physical torrent from the 
                subject to the Kindred (though it is often mystically absorbed and need not enter through the mouth).
            </p>
        </>
    ),
    system: (
        <>
            <p>
                The number of successes determines how many blood points the caster transfers from the subject. The subject must be visible to the thaumaturge and within 50 feet (15 meters). 
                Using this power prevents the caster from being blood-bound, but otherwise counts as if the vampire ingested the blood herself. 
            </p>
            <p>
                This power is spectacularly obvious, and Camarilla princes justifiably consider its public use a breach of the Masquerade.
            </p>
        </>
    )
}

const level5: DisciplineLevel = {
    name: "Cauldron of Blood",
    description: (
        <>
            <p>
                A thaumaturge using this power boils her subject’s blood in his veins like water on a stove. The Kindred must touch her subject, 
                and it is this contact that simmers the subject’s blood.
            </p>
            <p>
                This power is always fatal to mortals, and causes great damage to even the mightiest vampires.
            </p>
        </>
    ),
    system: (
        <>
            <p>
                The number of successes gained determines how many blood points are brought to boil. The subject suffers one health level of aggravated damage for each point boiled 
                (individuals with Fortitude may soak this damage using only their Fortitude dice). A single success kills any mortal, though some ghouls with access to Fortitude are 
                said to have survived after soaking all of the aggravated damage
            </p>
        </>
    )
}

export const thaumaturgyLevels: DisciplineLevel[] = [
    level1,
    level2,
    level3,
    level4,
    level5
]