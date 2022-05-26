import React from 'react';
import columnStyles from '../../../containers/common/columns.module.css';

const vessels = [
    {
        vessel: "Vampire", pool: "10+"
    },
    {
        vessel: "Werewolf", pool: "20"
    },
    {
        vessel: "Average human", pool: "10"
    },
    {
        vessel: "Child", pool: "5"
    },
    {
        vessel: "Cow", pool: "5"
    },
    {
        vessel: "Dog", pool: "2"
    },
    {
        vessel: "Cat", pool: "1"
    },
    {
        vessel: "Plasma bag", pool: "1"
    },
    {
        vessel: "Bird", pool: "1/2"
    },
    {
        vessel: "Bat/Rat", pool: "1/4"
    }
]

function GainingBlood() {
    return (
        <div className="fadeIn">
            <h2>Gaining Blood Pool</h2>
            <p>
                Vampires replenish blood pool by taking it from others. “Others” need not be human, though a vampire who is too squeamish to take sustenance from the kine is often ridiculed by his peers 
                — vampires are predators, after all, no matter how unnatural.
            </p>
            <p>
                Drinking blood is a risky proposition. As vampires gorge on the vitae of their victims, there is always the chance that they may take too much. 
                Unhygienic vampires may communicate disease by exposing a vessel to bacteria and viruses carried in other blood that still stains their fangs.
            </p>
            <p>A vampire may take:</p>
            <ul>
                <li>Only 20 percent of a vessel's blood (2 blood points for a normal human) and leave it relatively safe.</li>
                <li>Half of a vessel's blood necessitates hospitalization for that vessel.</li>
                <li>All a vessel's blood will kill it.</li>
            </ul>
            <p>A vampire may take up to three blood points from a given vessel in a turn. The shorter the turn, the more forcefully the Kindred steals the vitae.</p>
            <p>
                It is generally impossible to take more than three blood points from a vessel in three seconds (the shortest a turn gets), 
                though some Nosferatu with hideously distended mouths are able to take more through sheer surface area bleed.
            </p>
            <p>Most vampires drink their victim's blood slowly, so as to savor the luscious fluid and draw as much pleasure as possible out of the experience.</p>
            <h3>The Kiss</h3>
            <p>
                Once the Kindred breaks her vessel's skin with her fangs, that vessel no longer resists the vampire (if he did in the first place). 
                Indeed, the ecstasy caused by the vampire's bite is called the Kiss, and it engenders as much exquisite, subtly painful pleasure in vampires as it does in mortals. 
            </p>
            <p>
                Exceptionally strong-willed mortals (9+ Willpower) may continue to resist, but even these vessels eventually succumb to the pleasure. 
                Some Kindred and kine even develop lusts for the Kiss and actively seek out those who will drink their blood.
            </p>
            <p>
                Note: While Kindred find the Kiss pleasurable, they may resist it more readily than mortals can. 
                Any Kindred, regardless of Willpower, may make a Self-Control/Instincts roll (difficulty 8) to avoid succumbing to the Kiss. 
                This enables vampiric victims of diablerie to have a chance at fighting back.
            </p>
            <h3>Wounds and regaining blood</h3>
            <p>
                Wounded characters typically have less blood than healthy characters.
                Assume that a normal-sized human has one fewer blood point in his system for each health level of damage he currently suffers.
            </p>
            <p>Mortals regain one blood point per day (unless they are infused with vitae from some other source).</p>
            <h3>Blood potency</h3>
            <p>
                The blood of animals is not as nourishing as the blood of humans. Though an animal may physically have a greater volume of blood than a man, vampires draw less sustenance from it. 
                Hence, animals have fewer blood points, even if they have more blood.
            </p>
            <p>Old blood is never as nourishing as fresh blood. In fact, many vampires refuse to drink old blood, whether it comes from human corpses, blood banks, or a vampire's private reserve.</p>
            <p> However, the blood of other vampires, particularly elders, is quite potent. When drinking from elder vampires, each blood point taken may be so concentrated that it is actually worth two — or more! — normal blood points in use. </p>
            <p>Thus it is possible to obtain a vast amount of blood points by partaking of elder blood, though such prized vitae is rarely available to neonates or even ancillae. </p>
            <p>Essentially, elders have greater blood pools not because they are bodily larger than younger vampires, but because the blood they ingest is more concentrated in their ancient veins.</p>
            <p>Werewolf blood is similarly potent.</p>
            <div className={columnStyles.doubleColumn}>
                <label>Vessel</label>
                <label>Blood Pool</label>

                {vessels.map(x => {
                    return (
                        <React.Fragment>
                            <p>{x.vessel}</p>
                            <p>{x.pool}</p>
                        </React.Fragment>
                    )
                })}
            </div>
        </div>
    )
}

export default GainingBlood;