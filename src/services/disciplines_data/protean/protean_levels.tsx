import { DisciplineLevel } from "../../../models/discipline";

const level1: DisciplineLevel = {
    name: "Eyes of the Beast",
    description: (
        <>
            <p>
            The vampire sees perfectly well in pitch darkness, not requiring a light source to notice details in even the darkest basement or cave. The vampire's Beast is
            evident in his red glowing eyes, a sight sure to disturb most mortals.
            </p>
        </>
    ),
    system: (
        <>
            <p>
            The character must declare his desire to call forth the Eyes. No roll is necessary, but the change requires a full turn to complete. While manifesting the Eyes, 
            the character suffers a +1 difficulty to all Social rolls with mortals unless he takes steps to shield his eyes (sunglasses are the simplest solution). 
            A vampire without this power who is immersed in total darkness suffers blind-fighting penalties as per p. 274.
            </p>
        </>
    )
}

const level2: DisciplineLevel = {
    name: "Feral Claws",
    description: (
        <>
            <p>
                The vampire's nails transform into long, bestial claws. These talons are wickedly sharp, able to rend flesh with ease and even carve stone and metal with little trouble.
            </p>
            <p>
                The Beast is prominent in the claws as well, making them fearsome weapons against other immortals. It's rumored that some Gangrel have modified this power to change their 
                vampiric fangs into vicious tusks.
            </p>
        </>
    ),
    system: (
        <>
            <p>
                The claws grow automatically in response to the character's desire, and can grow from both hands and feet. The transformation requires the expenditure of a blood point, 
                takes a single turn to complete, and lasts for a scene.
            </p>
            <p>
                The character attacks normally in combat, but the claws inflict Strength + 1 aggravated damage. Other supernaturals cannot normally soak this damage, although a 
                power such as Fortitude may be used. Additionally, the difficulties of all climbing rolls are reduced by two.
            </p>
        </>
    )
}

const level3: DisciplineLevel = {
    name: "Earth Meld",
    description: (
        <>
            <p>
                One of the most prized powers within Protean, Earth Meld enables the vampire to become one with the earth. The immortal literally sinks into the bare ground, 
                transmuting his substance to bond with the earth.
            </p>
            <p>
                Though a vampire can immerse himself fully into the ground, he cannot move around within it. Further, it is impossible to meld into earth through another substance. 
                Wood slats, blacktop, even artificial turf blocks Earth Meld's effectiveness — then again, it's a relatively simple matter for a vampire at this level of power
                to grow claws and rip apart enough of the flooring to expose the raw soil beneath.
            </p>
            <p>
                By interring himself in the ground, the vampire gains full protection from daylight when outdoors. It is also the method of choice for those Kindred who wish to
                sleep away the centuries; these vampires lock themselves in the earth's embrace, gaining strength and power as they rest. Superstitious and paranoid Kindred
                whisper that thousands of Ancients sleep within the ground and will awaken when Gehenna arrives.
            </p>
            <p>
                While so interred, the vampire is in a transitional state between flesh and earth. His physical presence exists between the physical world and the astral plane.
                As such, the vampire is difficult to sense, even through supernatural means. However, a disruption to the soil that the immortal occupies, or to his presence on the
                astral realm, returns him immediately to the physical world (and to full wakefulness), showering dirt outward as his body displaces the soil.
            </p>
        </>
    ),
    system: (
        <>
            <p>
                No roll is necessary, although the character must spend a blood point. Sinking into the earth is automatic and takes a turn to complete. The character
                falls into a state one step above torpor during this time, sensing his surroundings only distantly. The player must make a Humanity or Path roll (difficulty 6) for
                the character to rouse himself in response to danger prior to his desired time of emergence.
            </p>
            <p>
                Since the character is in an in-between state, any attempts to locate him (catching his scent, scanning for his aura, traveling astrally, and so on) are made at +2
                difficulty. Astral individuals cannot affect the vampire directly, instead meeting with a kind of spongy resistance as their hands pass through him. Similarly, digging 
                in the material world encounters incredibly hard-packed earth, virtually as dense as stone.
            </p>
            <p>
                Attempts at violence upon the submerged vampire from either side return him to his physical nature, expelling the soil with which he bonded in a blinding spray 
                (all Perception-based rolls are at +2 difficulty for the turn). The character himself subtracts two from his initiative for the first turn after his restoration, due
                to momentary disorientation. Once expelled from the earth, the vampire may act normally.
            </p>
        </>
    )
}

const level4: DisciplineLevel = {
    name: "Shape of the Beast",
    description: (
        <>
            <p>
                This endows the vampire with the legendary ability to transform into a wolf or bat. A Kindred changed in this way is a particularly imposing representative of the animal kingdom. 
                Indeed, he is far superior to normal animals, even ones possessed by Subsume the Spirit.
            </p>
            <p>
                He retains his own psyche and temperament, but can still call upon the abilities of the beast form — increased senses for the wolf and flight for the bat.
                Gangrel are reputed to change to other animal forms better suited to their environment — jackals in Africa, dholes in Asia, and even enormous rats in urban environments.
            </p>
        </>
    ),
    system: (
        <>
            <p>
                The character spends one blood point to assume the desired shape. The transformation requires three turns to complete 
                (spending additional blood points reduces the time of transformation by one turn per point spent, to a minimum of one). 
                The vampire remains in his beast form until the next dawn, unless he wishes to change back sooner.
            </p>
            <p>
                While in the animal's shape, the vampire can use any Discipline he possesses. Furthermore, each form gives the character the abilities of that creature.
                In wolf form, the vampire's teeth and claws inflict Strength + 1 aggravated damage, he can run at double speed, and the difficulties of all Perception rolls are reduced by two. 
                In bat form, the vampire's Strength is reduced to 1, but he can fly at speeds of up to 20 miles per hour, difficulties for all hearing-based Perception rolls are reduced 
                by three, and attacks made against him are at +2 difficulty due to his small size.
            </p>

        </>
    )
}

const level5: DisciplineLevel = {
    name: "Mist Form",
    description: (
        <>
            <p>
                This truly unsettling power enables the vampire to turn into mist. His physical shape disperses into a hazy cloud, but one still subject entirely to the immortal's will. 
                He floats at a brisk pace and may slip under doors, through screens, down pipes, and through other tiny openings. 
                Although strong winds can blow the vampire from his chosen course, even hurricane-force winds cannot disperse his mist shape.
            </p>
            <p>
                Some Kindred feel that this power is an expression of the vampire's ultimate control over the material world, while others believe that it is the immortal's soul made
                manifest (damned though it may be).
            </p>
        </>
    ),
    system: (
        <>
            <p>
                No roll is required, although a blood point must be spent. The transformation takes three turns to complete, although the character may reduce this time by one turn for 
                each additional blood point spent (to a minimum of one turn). Strong winds may buffet the character, although Disciplines such as Potence may be used to resist them. 
                Vampires in Mist Form can perceive their surroundings normally, although they cannot use powers that require eye contact.
            </p>
            <p>
                The vampire is immune to all mundane physical attacks while in mist form, although supernatural attacks affect him normally. 
                Also, the vampire takes one fewer die of damage from fire and sunlight. The character may not attack others physically while in this state — this includes encountering 
                another vampire in mist form. He may use Disciplines that do not require physical substance, however.
            </p>
        </>
    )
}

export const proteanLevels: DisciplineLevel[] = [
    level1,
    level2,
    level3,
    level4,
    level5
]