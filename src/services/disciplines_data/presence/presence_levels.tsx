import { DisciplineLevel } from "../../../models/discipline";
import columnStyles from '../../../containers/common/columns.module.css';

const level1: DisciplineLevel = {
    name: "Awe",
    description: (
        <>
            <p>
                Those near the vampire suddenly desire to be closer to her and become receptive to her point of view. Awe is extremely useful for mass communication. It matters
                little what is said — the hearts of those affected lean toward the vampire's opinion. The weak want to agree with her; even if the strong-willed resist, they soon
                find themselves outnumbered. Awe can turn a chancy deliberation into a certain resolution in the vampire's favor almost before her opponents know that the tide has turned.
            </p>
            <p>
                Despite the intensity of this attraction, those so smitten do not lose their sense of self-preservation. Danger breaks the spell of fascination, as does leaving the area.
                Those subject to Awe will remember how they felt in the vampire's presence, however. This will influence their reactions should they ever encounter her again.
            </p>
        </>
    ),
    system: (
        <>
            <p>
                The player spends a blood point and rolls Charisma + Performance (difficulty 7). The number of successes rolled determines how many people are affected, 
                as noted on the chart below. If there are more people present than the character can influence, Awe affects those with lower Willpower ratings first. 
                The power stays in effect for the remainder of the scene or until the character chooses to drop it.
            </p>
            <div className={columnStyles.doubleColumn}>
                <label>Successes</label>
                <label>Result</label>
                <p>1 success</p>
                <p>One person.</p>
                <p>2 successess</p>
                <p>Two people.</p>
                <p>3 successess</p>
                <p>Six people.</p>
                <p>4 successes</p>
                <p>20 people.</p>
                <p>5+ successes</p>
                <p>Everyone in the vampire's immediate vicinity (an entire auditorium, a mob).</p>
            </div>
            <p>
                Those affected can use Willpower points to overcome the effect, but must continue spending Willpower every scene for as long as they remain in the same area as the vampire. 
                As soon as an individual spends a number of Willpower points equal to the successes rolled, he shakes off the Awe completely and remains unaffected for the rest of the night.
            </p>
        </>
    )
}

const level2: DisciplineLevel = {
    name: "Dread Gaze",
    description: (
        <>
            <p>
                While all Kindred can frighten others by physically revealing their true vampiric natures — baring claws and fangs, glaring with malevolence, hissing loudly with malice 
                — this power focuses these elements to insanely terrifying levels. Dread Gaze engenders unbearable terror in its victim, stupefying him into madness, immobility, 
                or reckless flight. Even the most stalwart individual will fall back from the vampire's horrific visage.
            </p>
        </>
    ),
    system: (
        <>
            <p>
                The player rolls Charisma + Intimidation (difficulty equal to the victim's Wits + Courage). Success indicates the victim is cowed, while failure means the target is 
                startled but not terrified by the sight. Three or more successes means he runs away in abject fear; victims who have nowhere to run claw at the walls, hoping to dig 
                a way out rather than face the vampire. Moreover, each success subtracts one from the target's action dice pools next turn.
            </p>
            <p>
                The character may attempt Dread Gaze once per turn against a single target, though she may also perform it as an extended action, adding her successes in order to
                subjugate the target completely. Once the target loses enough dice that he cannot perform any action, he's so shaken and terrified that he curls up on the ground and weeps. 
                Failure during the extended action means the attempt falters. The character loses all her collected successes and can start over next turn, while the victim may act 
                normally again.
            </p>
            <p>
                A botch at any time indicates the target is not at all impressed — perhaps even finding the vampire's antics comical — and remains immune to any further uses of Presence 
                by the character for the rest of the story.
            </p>
        </>
    )
}

const level3: DisciplineLevel = {
    name: "Entrancement",
    description: (
        <>
            <p>
                This power bends others' emotions, making them the vampire's willing servants. Due to what these individuals see as true and enduring devotion, they heed the vampire's 
                every desire. Since this is done willingly, instead of having their wills sapped, these servants retain their creativity and individuality.
            </p>
            <p>
                While these obedient minions are more personable and spirited than the mind-slaves created by Dominate, they're also somewhat unpredictable. Further, since Entrancement 
                is of a temporary duration, dealing with a lapsed servant can be troublesome. A wise Kindred either disposes of those she Entrances after they serve their usefulness, 
                or binds them more securely by a blood bond (made much easier by the minion's willingness to serve).
            </p>
        </>
    ),
    system: (
        <>
            <p>
                The player spends a blood point and rolls Appearance + Empathy (difficulty equal to the target's current Willpower points); the number of successes determines how long the 
                subject is Entranced, as per the chart below. (Subjects can still spend Willpower to temporarily resist, like any other Presence power.) 
            </p>
            <p>
                The vampire may try to keep the subject under her thrall, but can do so only after the initial Entrancement wears off. 
                Attempting this power while Entrancement is already in operation has no effect.
            </p>
            <div className={columnStyles.doubleColumn}>
                <label>Successes</label>
                <label>Result</label>
                <p>Botch</p>
                <p>Subject cannot be entranced for the rest of the story.</p>
                <p>Failure</p>
                <p>Subject cannot be entranced for the rest of the night.</p>
                <p>1 success</p>
                <p>One Hour.</p>
                <p>2 successess</p>
                <p>One day.</p>
                <p>3 successess</p>
                <p>One week.</p>
                <p>4 successes</p>
                <p>One month.</p>
                <p>5+ successes</p>
                <p>One year.</p>
            </div>
        </>
    )
}

const level4: DisciplineLevel = {
    name: "Summon",
    description: (
        <>
            <p>
                This impressive power enables the vampire to call to herself any person whom she has ever met. This call can go to anyone, mortal or supernatural, across any distance 
                within the physical world. The subject of the Summons comes as fast as he is able, possibly without even knowing why. He knows intuitively how to find his Summoner  — even 
                if the vampire moves to a new location, the subject redirects his own course as soon as he can. After all, he's coming to the vampire herself, not to some predetermined site.
            </p>
            <p>
                Although this power allows the vampire to call someone across a staggering distance, it is most useful when used locally. Even if the desired person books the next
                available flight, getting to Kyoto from Milwaukee can still take far longer than the vampire needs. Obviously, the individual's financial resources are a factor; if he
                doesn't have the money to travel quickly, it will take him a far greater time to get there.
            </p>
            <p>
                The subject thinks mainly of reaching the vampire, but does not neglect his own well-being. This is less of a consideration if he only has to cross a room, unless he 
                must get through a gang of gun-wielding punks to do so. The individual retains his survival instincts, and while he won't shirk physical violence to reach the vampire's 
                side, he won't subject himself to suicidal situations.
            </p>
            <p>
                The Summoning dissipates at dawn. Unless the subject is trained to continue toward the vampire after the first call, the immortal must Summon each night until
                the target arrives. Still, as long as the vampire is willing and able, she is assured to greet her desired subject some night — as long as nothing happens to him along
                the way, of course.
            </p>
        </>
    ),
    system: (
        <>
            <p>
                The player spends a blood point and rolls Charisma + Subterfuge. The base difficulty is 5; this increases to difficulty 7 if the subject was met only briefly.
                If the character used Presence successfully on the target in the past, this difficulty drops to 4, but if the attempt was unsuccessful, the difficulty rises to 8.
            </p>
            <p>
                The number of successes indicates the subject's speed and attitude in responding:
            </p>
            <div className={columnStyles.doubleColumn}>
                <label>Successes</label>
                <label>Result</label>
                <p>Botch</p>
                <p>Subject cannot be Summoned by that vampire for the rest of the story.</p>
                <p>Failure</p>
                <p>Subject cannot be Summoned by that vampire for the rest of the night.</p>
                <p>1 success</p>
                <p>Subject approaches slowly and hesitantly.</p>
                <p>2 successess</p>
                <p>Subject approaches reluctantly and is easily thwarted by obstacles.</p>
                <p>3 successess</p>
                <p>Subject approaches with reasonable speed.</p>
                <p>4 successes</p>
                <p>Subject comes with haste, overcoming any obstacles in his way.</p>
                <p>5+ successes</p>
                <p>Subject rushes to the vampire, doing anything to get to her.</p>
            </div>
        </>
    )
}

const level5: DisciplineLevel = {
    name: "Majesty",
    description: (
        <>
            <p>
                At this stage, the vampire can augment her supernatural mien a thousandfold. The attractive become paralyzingly beautiful; the homely become hideously twisted. 
                Majesty inspires universal respect, devotion, fear — or all those emotions at once — in those around the vampire. The weak scramble to obey her every whim, 
                and even the most dauntless find it almost impossible to deny her.
            </p>
            <p>
                People affected find the vampire so formidable that they dare not risk her displeasure. Raising their voices to her is difficult; raising a hand against her is unthinkable. 
                Those few who shake off the vampire's potent mystique enough to oppose her are shouted down by the many under her thrall, before the immortal need even respond.
            </p>
            <p>
                Under Majesty's influence, hearts break, power trembles, and the bold shake. Wise Kindred use this power with caution against mortal and immortal alike. 
                While Majesty can cow influential politicians and venerable Primogen, the vampire must be careful that doing so doesn't come back to haunt her. 
                After all, a dignitary brought low before others loses his usefulness quickly, while a humiliated Kindred has centuries to plan revenge.
            </p>
        </>
    ),
    system: (
        <>
            <p>
                No roll is required on the part of the vampire, but she must spend a Willpower point. A subject must make a Courage roll (difficulty equal to the vampire's 
                Charisma + Intimidation, to a maximum of 10) if he wishes to be rude or simply contrary to the vampire.
            </p>
            <p>
                Success allows the individual to act normally for the moment, although he feels the weight of the vampire's displeasure crushing down on him. 
                A subject who fails the roll aborts his intended action and even goes to absurd lengths to humble himself before the vampire, no matter who else is watching. 
            </p>
            <p>
                The effects of Majesty last for one scene.
            </p>
        </>
    )
}

export const presenceLevels: DisciplineLevel[] = [
    level1,
    level2,
    level3,
    level4,
    level5
]