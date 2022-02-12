import { DisciplineLevel } from '../../../models/discipline';
import styles from '../disciplineData.module.css';

const level1: DisciplineLevel = {
    name: "Passion",
    description: <>
      <p>The vampire stirs his victim's emotions, either heightening them to a fevered pitch or blunting them until the target is completely desensitized. 
          The Cainite may not choose which emotion is affected; she may only amplify or dull emotions already present in the target. 
          In this way, a vampire can inflame mild irritation into quivering rage or atrophy true love into casual interest.
      </p>
    </>,
    system: <>
      <p>
          The character talks to her victim, and the vampire's player rolls Charisma + Empathy (difficulty equals the victim's Humanity or Path rating).
          The number of successes determines the duration of the altered state of feeling. Effects of this power might include one- or two-point additions or subtractions
          to difficulties of frenzy rolls, Virtue rolls, rolls to resist Presence powers, etc.
      </p>
      <div className={styles.twoColumnSection}>
          <label>Successes</label>
          <label>Result</label>
          <p>1 success</p>
          <p>One turn.</p>
          <p>2 successess</p>
          <p>One hour.</p>
          <p>3 successess</p>
          <p>One night.</p>
          <p>4 successes</p>
          <p>One week.</p>
          <p>5+ successes</p>
          <p>One month.</p>
          <p>6+ successes</p>
          <p>Three months.</p>
      </div>
    </>
}

const level2: DisciplineLevel = {
    name: "The Haunting",
    description: <>
        <p>
            The vampire manipulates the sensory centers of his victim's brain, flooding the victim's senses with visions, sounds, scents, or feelings that aren't really there. 
            The images, regardless of the sense to which they appeal, are only fleeting “glimpses,” barely perceptible to the victim. 
            The vampire using Dementation cannot control what the victim perceives, but may choose which sense is affected.
        </p>
        <p>
            The “haunting” effects occur mainly when the victim is alone, and mostly at night. 
            They may take the form of the subject's repressed fears, guilty memories, or anything else that the Storyteller finds dramatically appropriate. 
            The effects are never pleasant or unobtrusive, however. The Storyteller should let her imagination run wild when describing these sensory impressions; 
            the victim may well feel as if she is going mad, or as if the world is.
        </p>
    </>,
    system: <>
        <p>
            After the vampire speaks to the victim, the player spends a blood point and rolls Manipulation + Subterfuge (difficulty of his victim's Perception + Self- Control/Instinct). 
            The number of successes determines the length of the sensory “visitations.” The precise effects are up to the Storyteller, though particularly eerie or 
            harrowing apparitions can certainly reduce dice pools for a turn or two after the manifestation.
        </p>
        <div className={styles.twoColumnSection}>
            <label>Successes</label>
            <label>Result</label>
            <p>1 success</p>
            <p>One night.</p>
            <p>2 successess</p>
            <p>Two nights.</p>
            <p>3 successess</p>
            <p>One week.</p>
            <p>4 successes</p>
            <p>One month.</p>
            <p>5+ successes</p>
            <p>Three months.</p>
            <p>6+ successes</p>
            <p>One year.</p>
        </div>
    </>
}

const level3: DisciplineLevel = {
    name: "Eyes of Chaos",
    description: <>
        <p>
            This peculiar power allows the vampire to take advantage of the fleeting clarity hidden in insanity. She may scrutinize the “patterns” of a person's soul, 
            the convolutions of a vampire's inner nature, or even random events in nature itself. The Kindred with this power can discern the most well-hidden psychoses, 
            or gain insight into a person's true self. Malkavians with this power often have (or claim to have) knowledge of the moves and countermoves of the great Jyhad, or the
            patterns of fate.
        </p>
    </>,
    system: <>
        <p>
            This power allows a vampire to determine a person's true Nature, among other things. The vampire concentrates for a turn, then her player rolls Perception + Occult. 
            The difficulty depends on the intricacy of the pattern. Discerning the Nature of a stranger would be difficulty 9, a casual acquaintance would be an 8, and an established ally a 6. 
            The vampire could also read the message locked in a coded missive (difficulty 7), or even see the doings of an invisible hand in such events as the pattern of falling leaves 
            (difficulty 6). Almost anything might contain some hidden insight, no matter how trivial or meaningless. The patterns are present in most things, 
            but are often so intricate they can keep a vampire spellbound for hours while she tries to understand their message.
        </p>
    </>
}

const level4: DisciplineLevel = {
    name: "Voice of Madness",
    description: <>
        <p>
            By merely addressing his victims aloud, the Kindred can drive targets into fits of blind rage or fear, forcing them to abandon reason and higher thought. 
            Victims are plagued by hallucinations of their subconscious demons, and try to flee or destroy their hidden shames. Tragedy almost always follows in the wake of this 
            power's use, though offending Malkavians often claim that they were merely encouraging people to act “according to their natures.” 
            Unfortunately for the vampire concerned, he runs a very real risk of falling prey to his own voice's power.
        </p>
    </>,
    system: <>
        <p>
            The player spends a blood point and makes a Manipulation + Empathy roll (difficulty 7). One target is affected per success, 
            although all potential victims must be listening to the vampire's voice.
        </p>
        <p>
            Affected victims fly immediately into frenzy or a blind fear like Rötschreck. Kindred or other creatures capable of frenzy, such as Lupines, may make a frenzy check or 
            Rötschreck test (Storyteller's choice as to how they are affected) at +2 difficulty to resist the power. Mortals are automatically affected and don't remember their actions 
            while berserk. The frenzy or fear lasts for a scene, though vampires and Lupines may test as usual to snap out of it.
        </p>
        <p>
            The vampire using Voice of Madness must also test for frenzy or Rötschreck upon invoking this power, though his difficulty to resist is one lower than normal. 
            If the initial roll to invoke this power is a failure, however, the roll to resist the frenzy is one higher than normal. 
            If the roll to invoke this power is a botch, the frenzy or Rötschreck response is automatic.
        </p>
    </>
}

const level5: DisciplineLevel = {
    name: "Total insanity",
    description: <>
        <p>
            The vampire coaxes the madness from the deepest recesses of her target's mind, focusing it into an overwhelming wave of insanity. 
            This power has driven countless victims, vampire and mortal alike, to unfortunate ends.
        </p>
    </>,
    system: <>
        <p>
            The Kindred must gain her target's undivided attention for at least one full turn to enact this power. 
            The player spends a blood point and rolls Manipulation + Intimidation (difficulty of her victim's current Willpower points). 
            If the roll is successful, the victim is afflicted with five derangements of the Storyteller's choice (see p. 290). 
            The number of successes determines the duration.
        </p>
        <div className={styles.twoColumnSection}>
            <label>Successes</label>
            <label>Result</label>
            <p>1 success</p>
            <p>One turn.</p>
            <p>2 successess</p>
            <p>One night.</p>
            <p>3 successess</p>
            <p>One week.</p>
            <p>4 successes</p>
            <p>One month.</p>
            <p>5+ successes</p>
            <p>One year.</p>
        </div>
        <p>
            On a botch... well, the Storyteller can decide what a vampire inflicts upon herself by attempting to 
            incite the primal hells lurking within the darkest recesses of a victim's mind.
        </p>
        <p>
            The victim (or the target of a botch) can spend a number of Willpower points equal to the successes rolled to end the duration prematurely. 
            The Storyteller decides when such Willpower points can be spent (such as after a therapy session or after a friend has managed to prove a particular delusion to be false).
        </p>
    </>
}

export const dementationLevels = [
    level1,
    level2,
    level3,
    level4,
    level5
];