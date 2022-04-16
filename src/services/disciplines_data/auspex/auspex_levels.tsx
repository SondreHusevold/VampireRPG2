import { DisciplineLevel } from "../../../models/discipline"
import columnStyles from '../../../containers/common/columns.module.css';

const level1: DisciplineLevel = {
    name: "Heightened Senses",
    description: (
        <div>
            <p>
                This power increases the acuity of all of the vampire's senses, effectively doubling the clarity and range of sight, hearing, and smell. 
                While her senses of taste and touch extend no farther than normal, they like wise become far more distinct; the vampire could taste the hint of liquor in a victim's 
                blood or feel the give of the board concealing a hollow space in the floor. The Kindred may magnify her senses at will, sustaining this heightened focus for as long as 
                she desires. At the Storyteller's option, this may make hunting easier. 
            </p>
            <p>
                Occasionally, this talent provides extrasensory or even precognitive insights. 
                These brief, unfocused glimpses may be odd premonitions, flashes of empathy, or eerie feelings of foreboding. 
                The vampire has no control over these perceptions, but with practice can learn to interpret them with a fair degree of accuracy.
            </p>
        </div>
    ),
    system: (
        <div>
            <p>
                It takes a reflexive action to activate this ability, but no roll or other cost is required. In certain circumstances, 
                dice rolls associated with using the character's sense (such as Perception + Alertness) decrease in difficulty by a number equal to the character's 
                Auspex rating when the power is engaged.
            </p>
            <p>
                The Storyteller may also use this power to see if the character perceives a threat. 
                In this case, the Storyteller privately rolls the character's unmodified Auspex rating, applying whatever difficulty he feels best suits the circumstances. 
                For example, sensing that a pistol is pointed at the back of the character's head may require a roll of difficulty 5, while the sudden realization that a rival for Primogen 
                is planning her assassination may require a 9. Note that even this “precognition” comes only as a result of interpreting details the Kindred is able to notice. 
                It's not an all-purpose insight or miraculous revelation.
            </p>
            <p>
                At the character's discretion, she may selectively heighten one specific sense, rather than leaving them all on. 
                In these cases, the difficulty to perceive stimuli using that sense drops by one, but the difficulty to avoid distraction or temporary bedazzlement increases by one.
            </p>
            <p>
                This power does not let characters see in pitch darkness, as does Eyes of the Beast (p. 199), but it does reduce difficulty penalties to act in such darkness from +2 to +1, 
                and the character may make ranged attacks in pitch darkness if she can hear, smell, or otherwise detect her foe.
            </p>
        </div>
    )
}

const level2: DisciplineLevel = {
    name: "Aura Perception",
    description: (
        <div>
            <p>
                Using this power, the vampire can perceive the psychic “auras” that radiate from mortals and supernatural beings alike. 
                These halos comprise a shifting series of colors that take practice to discern with clarity. 
                Even the simplest individual has many shifting hues within his aura; strong emotions predominate, while momentary impressions or deep secrets flash through in streaks and swirls.
            </p>
            <p>
                The colors change in sympathy with the subject's emotional state, blending into new tones in a constantly dancing pattern. 
                The stronger the emotions involved, the more intense the hues become. A skilled vampire can learn much from her subject by reading the 
                nuances of color and brilliance in the aura's flow.
            </p>
            <p>
                Aside from perceiving emotional states, vampires use Aura Perception to detect supernatural beings. 
                The colors in Kindred auras, while intense, are quite pale; mage halos often flare and crackle with arcane power; the race of shapeshifters has strikingly bright, 
                almost frantic, auras; ghosts have weak auras that flicker fitfully like a dying flame; and faerie creatures' radiance is shot through with capricious rainbow hues.
            </p>
        </div>
    ),
    system: (
        <div>
            <p>
                After the character stares at the subject for at least a few seconds, the player rolls Perception + Empathy (difficulty 8); 
                each success indicates how much of the subject's aura the character sees and understands (see the table below). 
                A failure indicates that the play of colors and patterns yields no prevailing impression. A botch indicates a false or erroneous interpretation. 
                The Storyteller may wish to make this roll, thus keeping the player in the dark as to the veracity of the character's interpretation.
            </p>
            <div className={columnStyles.doubleColumn}>
                <label>Successes</label>
                <label>Result</label>
                <p>1 success</p>
                <p>Can distinguish only the shade (pale or bright).</p>
                <p>2 successes</p>
                <p>Can distinguish the main color.</p>
                <p>3 successes</p>
                <p>Can recgonize the color patterns.</p>
                <p>4 successes</p>
                <p>Can detect subtle shifts.</p>
                <p>5 successes</p>
                <p>Can identity mixtures of color and pattern.</p>
            </div>
            <p>
                The Aura Colors chart offers some example ideas of common colors and the emotions they reflect that Storytellers can use. 
                Note that it is nearly impossible to determine with certainty if a particular character is lying or not with this power - vampires are inherently deceitful by nature, 
                but even mortals might react with anxiety to questions while still being truthful. It is, however, helpful in determine the target's emotional state, 
                which might lead the vampire to decide that a particular target is suspicious.
            </p>
            <p>
                A character may choose to perform a very cursory aura scan of a large area like a nightclub's dance floor or the audience in a gallery. 
                In this case, the player decides which characteristic of auras she's looking for, and that's the only information she's able to glean if the roll is successful. 
                (At the Storyteller's discretion, on this general scan roll, more successes on the roll may more quickly yield what the character seeks.) 
                For example, the player may specify, “Who's the most nervous person in attendance?” or “Are there any vampirically pale auras among the CEO's entourage?” 
                Thereafter, the player may narrow down her scrutiny of a single individual, with an additional roll as normal.
            </p>
            <p>
                The character may focus in on a particular subject's aura only once per scene with any degree of clarity. 
                Any subsequent attempts that result in failure should be considered botches. 
                It is very easy for the character to imagine seeing what she wants to see when judging someone's intentions. 
                After 24 hours, the character may try again at no penalty.
            </p>
            <p>
                It is possible, though difficult, to sense the aura of a being who is otherwise invisible to normal sight. Refer to “Seeing the Unseen,” p. 142, for more information
            </p>
        </div>
    )
}

const level3: DisciplineLevel = {
    name: "The Spirit's Touch",
    description: (
        <div>
            <p>
                When someone handles an object for any length of time, he leaves a psychic impression on the item. A vampire with this level of Auspex can “read” these
                sensations, learning who handled the object, when he last held it, and what was done with it recently. (For these purposes, a corpse counts as an “object” and can be 
                read accordingly.) These visions are seldom clear and detailed, registering more like a kind of “psychic snapshot.” Still, the Kindred can learn much even from such a glimpse. 
                Although most visions concern the last person to handle the item, a long-time owner leaves a stronger impression than someone who held the object briefly.
            </p>
            <p>
                Gleaning information from the spiritual residue requires the vampire to hold the object and enter a shallow trance. 
                She is only marginally aware of her surroundings while using The Spirit's Touch, but a loud noise or jarring physical sensation breaks the trance instantly.
            </p>
        </div>
    ),
    system: (
        <div>
            <p>
                The player rolls Perception + Empathy. The difficulty is determined by the age of the impressions and the mental and spiritual strength of the person or event that left them. 
                Sensing information from a pistol used for a murder hours ago may require a 4, while learning who owned a bloodstained puppet fashioned a century ago might be a 9.
            </p>
            <p>
                The greater the individual's emotional connection to the object, the stronger the impression he leaves on it — and the more information the Kindred can glean from it. 
                Events involving strong emotions (a giftgiving, a torture, a long family history) likewise leave stronger impressions than short or casual contact do. 
                Assume that each success offers one piece of information, as per the chart below:
            </p>
            <div className={columnStyles.doubleColumn}>
                <label>Successes</label>
                <label>Information</label>
                <p>Botch</p>
                <p>The character is overwhelmed by psychic impressions for the next 30 minutes and unable to act.</p>
                <p>Failure</p>
                <p>No information of value</p>
                <p>1 success</p>
                <p>Very basic information, the last owner's gender or hair color for instance.</p>
                <p>2 successess</p>
                <p>A second piece of basic information.</p>
                <p>3 successess</p>
                <p>More useful information about the last owner, such as age and state of mind the last time he used the item.</p>
                <p>4 successes</p>
                <p>The person's name.</p>
                <p>5+ successes</p>
                <p>A wealth of information: nearly anything you want to know about the person's relationship with that object is available.</p>
            </div>
            <p>
                At the Storyteller's discretion, some impressions on objects may be so strong — a knife plunged into Caesar's breast, 
                the tip of the Spear of Destiny, a fang pulled from the maw of Dracula — that any use of this power may be deemed a success.
            </p>
        </div>
    )
}

const level4: DisciplineLevel = {
    name: "Telepathy",
    description: (
        <div>
            <p>
                The vampire projects a portion of her consciousness into a nearby mortal's mind, 
                creating a mental link through which she can communicate wordlessly or even read the target's deepest thoughts. 
                The Kindred “hears” in her own mind the thoughts plucked from a subject as if they were spoken to her.
            </p>
            <p>
                This is one of the most potent vampiric abilities, since, given time, a Kindred can learn virtually anything from a subject without him ever knowing. 
                The Tremere and Tzimisce in particular find this power especially useful in gleaning secrets from others, or for directing their mortal followers with silent precision.
            </p>
        </div>
    ),
    system: (
        <div>
            <p>
                The player rolls Intelligence + Subterfuge (difficulty of the subject's current Willpower points).
                Projecting thoughts into the target's mind requires one success. 
                The subject recognizes that the thoughts come from somewhere other than his own consciousness, though he cannot discern their 
                actual origin without a successful Perception + Awareness roll (difficulty equal to the vampire's Manipulation + Subterfuge).
            </p>
            <p>
                To read minds, one success must be rolled for each item of information plucked or each layer of thought pierced. 
                Deep secrets or buried memories are harder to obtain than surface emotions or unspoken comments, requiring five or more successes to access.
            </p>
            <p>
                Reading thoughts with Telepathy does not commonly work upon the undead mind. A character may expend a Willpower point to make the effort, making the roll normally afterward. 
                Likewise, it is equally difficult to read the thoughts of other supernatural creatures. 
                However, the character may project her thoughts without expending a Willpower point. These thoughts, however, are still obviously intrusions into the target's mind, 
                but the character may attempt to disguise her mental “voice” with a roll of Manipulation + Subterfuge (difficulty equals the target's Perception + Awareness) 
                so the target doesn't recognize her as the “speaker.”
            </p>
        </div>
    )
}

const level5: DisciplineLevel = {
    name: "Psychic Projection",
    description: (
        <>
            <p>
                The Kindred with this awesome ability projects her senses out of her physical shell, stepping from her body as an entity of pure thought. 
                The vampire's astral form is immune to physical damage or fatigue, and can “fly” with blinding speed anywhere across the earth — or even underground — 
                so long as she remains below the moon's orbit.
            </p>
            <p>
                The Kindred's material form lies in a torpid state while her astral self is active, and the vampire isn't aware of anything that befalls her body until she returns to it. 
                An ephemeral silver cord connects the Kindred's psyche to her body. If this cord is severed, her consciousness becomes stranded in the astral plane (the realm of
                ghosts, spirits, and shades). Attempting to return to the vampire's physical shell is a long and terrifying ordeal, especially since there is no guarantee that she will 
                accomplish the journey successfully. This significant danger keeps many Kindred from leaving their bodies for long, but those who dare can learn much.
            </p>
        </>
    ),
    system: (
        <>
            <p>
                Journeying in astral form requires the player to expend a point of Willpower and make a Perception + Awareness roll. Difficulty varies depending on the distance 
                and complexity of the intended trip; 5 is within sight, 7 is nearby or to a familiar location, and 9 reflects a trip far from familiar territory 
                (a first journey from North America to the Far East; trying to shortcut through the earth). The greater the number of successes rolled, the more focused the 
                character's astral presence is, and the easier it is for her to reach her desired destination.
            </p>
            <p>
                Failure means the character is unable to separate her consciousness from her body, while a botch can have nasty consequences — flinging her astral form to
                a random destination on Earth or in the spirit realm (The Umbra), arriving in a place where the sun is active (necessitating a frenzy roll, although the sunlight 
                doesn't do any damage), or hurtling toward the desired destination so forcefully that the silver cord snaps.
            </p>
            <p>
                The player may spend a point of Willpower to activate this power, and an additional point of Willpower to gain the success necessary to perform the jaunt. This is
                an exception to the normal rule where a player may not spend more than a single point of Willpower per turn.
            </p>
            <p>
                Each scene in Psychic Projection requires another point of Willpower and a new roll. Failure indicates that the vampire has lost her way and must retrace the
                path of her silver cord. A botch at this stage means the cord snaps, stranding the character's psychic form in the mysterious astral plane.
            </p>
            <p>
                An astral form may travel at great speeds (the Storyteller can use roughly 1000 miles per hour or 1500 kilometers per hour as a general guide) and carries no
                clothing or material objects of any kind. Some artifacts are said to exist in the spirit world, and the character can try to use one of these tools if she finds one. 
                The character cannot bring such relics to the physical world when she returns to her body, however.
            </p>
            <p>
                Interaction with the physical world is impossible while using Psychic Projection. At best, the character may spend a Willpower point to manifest as a ghost-like shape. 
                This apparition lasts one turn before fading away; while she can't affect anything physically during this time, the character can speak. 
                Despite lacking physical substance, an astral character can use Auspex normally. No other discipline may be used during the projection.
            </p>
            <p>
                If two astral shapes encounter one another, they interact as if they were solid. They may talk, touch, and even fight as if both were in the material world.
                Since they have no physical bodies, astral characters seeking to interact “physically” substitute Mental and Social Traits for Physical ones 
                (Wits replaces Dexterity, Manipulation supplants Strength, and Intelligence replaces Stamina). 
                Due to the lack of a material form, the only real way to damage another psychic entity is to cut its silver cord. When fighting this way, consider Willpower points to be 
                health levels; when a combatant loses all of her Willpower, the cord is severed.
            </p>
            <p>
                Although an astrally projected character remains in the reflection of the mortal world, she may venture further into the spirit realms, especially if she becomes lost. 
                Other beings with particular sensitivity to psychic activity, such as ghosts, werewolves, and even some magi, travel the umbra as well, and can interact
                with a vampire's psychic presence normally (although the astrally projected character is not considered a “ghost” for powers such as Necromancy).
                The observing character notices the astrally projecting vampire with a Perception + Awareness roll (difficulty 8), requiring more successes than the Psychic Projection
                activation roll. Even those who do notice you won't be able to identify you; you are merely an immaterial shade hovering in the general area. 
            </p>
        </>
    )
}


export const auspexLevels = [
    level1,
    level2,
    level3,
    level4,
    level5
]