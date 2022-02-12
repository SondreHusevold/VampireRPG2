import { DisciplineLevel } from "../../../models/discipline";
import styles from '../disciplineData.module.css';

const level1: DisciplineLevel = {
    name: "Command",
    description: (
        <>
            <p>
                The vampire locks eyes with the subject and speaks a one-word command, which the subject must be obey instantly. 
                The order must be clear and straightforward: run, agree, fall, yawn, jump, laugh, surrender, stop, scream, follow. If the command is at all confusing or
                ambiguous, the subject may respond slowly or perform the task poorly. The subject cannot be ordered to do something directly harmful to herself, so a command
                like “die” is ineffective.
            </p>
            <p>
                The command may be included in a sentence, thereby concealing the power's use from others. This effort at subtlety still requires the Kindred to make eye
                contact at the proper moment and stress the key word slightly. An alert bystander — or even the victim — may notice the emphasis. Still, unless she's conversant
                with supernatural powers, the individual is likely to attribute the utterance and the subsequent action to bizarre coincidence.
            </p>
        </>
    ),
    system: (
        <>
            <p>
                The player rolls Manipulation + Intimidation (difficulty equals the target's current Willpower points). More successes force the subject to act with greater vigor or 
                for a longer duration (continue running for a number of turns, go off on a laughing jag, scream uncontrollably).
            </p>
            <p>
                Remember, too, that being commanded to against one's Nature confounds the use of this power. Being told to “sleep!” in a dangerous situation or “attack!”
                in police custody may not have the desired effect, or
                indeed, any effect at all.
            </p>
        </>
    )
}

const level2: DisciplineLevel = {
    name: "Mesmerize",
    description: (
        <>
            <p>
                With this power, a vampire can verbally implant a false thought or hypnotic suggestion in the subject's subconscious mind. 
                Both Kindred and target must be free from distraction, since Mesmerize requires intense concentration and precise wording to be effective. 
                The vampire may activate the imposed thought immediately or establish a stimulus that will trigger it later. The victim must be able to understand the vampire, 
                though the two need to maintain eye contact only as long as it takes to implant the idea.
            </p>
            <p>
                Mesmerize allows for anything from simple, precise directives (handing over an item) to complex, highly involved ones (taking notes of someone's habits and
                relaying that information at an appointed time). It is not useful for planting illusions or false memories (such as seeing a rabbit or believing yourself to be on fire).
                A subject can have only one suggestion implanted at any time.
            </p>
        </>
    ),
    system: (
        <>
            <p>
                The player rolls Manipulation + Leadership (difficulty equal to the target's current Willpower points). The number of successes determines how well the suggestion 
                takes hold in the victim's subconscious. If the vampire scores one or two successes, the subject cannot be forced to do anything that seems strange to
                her (she might walk outside, but is unlikely to steal a car). At three or four successes, the command is effective unless following it endangers the subject. At five
                successes or greater, the vampire can implant nearly any sort of command.
            </p>
            <p>
                No matter how strong the Kindred's will, his command cannot force the subject to harm herself directly or defy her innate Nature. So, while a vampire who
                scored five successes could make a 98-pound weakling attack a 300-pound bouncer, he could not make the mortal shoot herself in the head.
            </p>
            <p>
                If a vampire tries to Mesmerize a subject before the target fulfills a previously implanted directive, compare the successes rolled to those gained during the implanting 
                of the first suggestion. Whichever roll had the greater number of successes is the command that now governs in the target's behavior; the other suggestion is wiped clean. 
                If the successes rolled are equal, the newer command supplants the old one.
            </p>
        </>
    )
}

const level3: DisciplineLevel = {
    name: "The Forgetful Mind",
    description: (
        <>
            <p>
                After capturing the subject's gaze, the vampire delves into the subject's memories, stealing or re-creating them at his whim. The Forgetful Mind does not allow
                for telepathic contact; the Kindred operates much like a hypnotist, asking directed questions and drawing out answers from the subject. The degree of memory alteration 
                depends on what the vampire desires. He may alter the subject's mind only slightly (quite effective for eliminating memories of the victim meeting or even 
                being fed upon by the vampire) or utterly undo the victim's memories of her past.
            </p>
            <p>
                The degree of detail used has a direct bearing on how strongly the new memories take hold, since the victim's subconscious mind resists the alteration. 
                A simplistic or incomplete false memory (“You went to the movies last night”) crumbles much more quickly than does one with more attention to detail (“You thought
                about texting your girlfriend while you were in line at the new movie theater, but you knew you'd have to turn your phone off once you got inside. You liked the
                movie well enough, but the plot seemed weak. You were tired after it ended, so you went home, watched a little late-night television, and went to bed.”).
            </p>
            <p>
                Even in its simplest applications, The Forgetful Mind requires tremendous skill and finesse. It's a relatively simple matter to rifle through a victim's psyche and rip
                out the memories of the previous night without knowing what the subject did that evening. Doing so leaves a gap in the victim's mind, however — a hole that can
                give rise to further problems down the road. The Kindred may describe new memories, but these recollections seldom have the same degree of realism that the
                subject's original thoughts held.
            </p>
            <p>
                As such, this power isn't always completely effective. The victim may remember being bitten, but believe it to be an animal attack. Greater memories may return
                in pieces as dreams, or through sensory triggers like a familiar odor or spoken phrase. Even so, months or years may pass before the subject regains enough of her
                lost memories to make sense of the fragments.
            </p>
            <p>
                A vampire can also sense when a subject's memories were altered through use of this power, and even restore them, as a hypnotist draws forth suppressed thoughts.
            </p>
        </>
    ),
    system: (
        <>
            <p>
                The player states what sorts of alteration he wants to perform, then rolls Wits + Subterfuge (difficulty equal to the target's current Willpower points).
                Any success pacifies the victim for the amount of time it takes the vampire to perform the verbal alteration, provided the vampire does not act aggressively toward her. 
                The table below indicates the degree of modification possible to the subject's memory. If the successes rolled don't allow for the extent of change the character desired, 
                the Storyteller reduces the resulting impact on the victim's mind.
            </p>
            <div className={styles.twoColumnSection}>
                <label>Successes</label>
                <label>Result</label>
                <p>1 success</p>
                <p>May remove a single memory; lasts one day.</p>
                <p>2 successess</p>
                <p>May remove, but not alter, memory permanently.</p>
                <p>3 successess</p>
                <p>May make slight changes to memory.</p>
                <p>4 successes</p>
                <p>May alter or remove entire scene from subject's memory.</p>
                <p>5+ successes</p>
                <p>May reconstruct entire periods of subject's life.</p>
            </div>
            <p>
                To restore removed memories or sense false ones in a subject, the character's Dominate rating must be equal to or higher than that of the vampire who made
                the alteration. In that situation, the player must make a Wits + Empathy roll (difficulty equal to the original vampire's permanent Willpower rating) and score
                more successes than his predecessor did. However, the Kindred cannot use The Forgetful Mind to restore his own memories if they were stolen in such a way.
            </p>
        </>
    )
}

const level4: DisciplineLevel = {
    name: "Conditioning",
    description: (
        <>
            <p>
                Through sustained manipulation, the vampire can make a subject more pliant to the Kindred's will. Over time, the victim becomes increasingly susceptible to the vampire's 
                influence while simultaneously growing more resistant to the corrupting efforts of other Kindred. Gaining complete control over a subject's mind
                is no small task, taking weeks or even months to accomplish.
            </p>
            <p>
                Kindred often fill their retainers' heads with subtle whispers and veiled urges, thereby ensuring these mortals' loyalty. 
                Yet vampires must pay a high price for the minds they ensnare. Servants Dominated in this way lose much of their passion and individuality. 
                They follow the vampire's orders quite literally, seldom taking initiative or showing any imagination. 
                In the end, such retainers become like automatons or the walking dead.
            </p>
        </>
    ),
    system: (
        <>
            <p>
                The player rolls Charisma + Leadership (difficulty equal to the target's current Willpower points) once per scene. Conditioning is an extended action, for which the 
                Storyteller secretly determines the number of successes required. It typically requires between five and 10 times the subject's Self-Control/Instinct rating. 
                Targets with more empathic Natures may require a lower number of successes, while those with willful Natures require a higher total. Only through roleplaying 
                may a character discern whether his subject is conditioned successfully. 
            </p>
            <p>
                A target may become more tractable even before becoming fully conditioned. Once the vampire accumulates half the required number of successes, the Storyteller may apply 
                a lower difficulty to the vampire's subsequent uses of Dominate. After being conditioned, the target falls so far under the vampire's influence that the Kindred need not 
                make eye contact or even be present to retain absolute control. The subject does exactly as she is told (including taking actions that would injure herself), 
                as long as her master can communicate with her verbally. No command roll is necessary unless the subject is totally isolated from the vampire's presence 
                (in a different room, over the phone). Even if a command roll fails, the target will still likely carry out part of the orders given, simply because her master wishes it.
            </p>
            <p>
                After the subject is fully conditioned, other Kindred find her more difficult to Dominate. Such conditioning raises others' difficulties by two (to a maximum of 10).
            </p>
            <p>
                It is possible, though difficult, to shake Conditioning. The subject must be separated entirely from the vampire to whom she was in thrall. This period of
                separation varies depending on the individual, but the Storyteller may set it at six months, less a number of weeks equal to the subject's permanent Willpower
                rating (so a person with 5 Willpower must stay away from the vampire for just under five months). The subject regains her personality slowly during this time,
                though she may still lapse into brief spells of listlessness, despair, or even anger. If the vampire encounters the target before that time passes, 
                a single successful Charisma + Leadership roll (difficulty of the target's current Willpower points) on the part of the vampire completely reasserts the dominance.
            </p>
            <p>
                If the subject makes it through the time period without intervention by her master, the target regains her former individuality. Even so, the vampire may reestablish 
                conditioning more easily than the first time, since the subject is now predisposed to falling under the Kindred's mental control. New attempts require half the total 
                number of successes than the last bout of conditioning did (which means the subject reaches the threshold for reduced difficulties sooner, as well).
            </p>
        </>
    )
}

const level5: DisciplineLevel = {
    name: "Possession",
    description: (
        <>
            <p>
                At this level of Dominate, the force of the Kindred's psyche is such that it can utterly supplant the mind of a mortal subject. Speaking isn't required, but the vampire 
                must capture the victim's gaze. During the psychic struggle, the contestants' eyes are locked on one another.
            </p>
            <p>
                Once the Kindred overwhelms the subject's mind, the vampire moves his consciousness into the victim's body and controls it as easily as he uses his own. The mortal falls 
                into a mental fugue while under possession. She is aware of events only in a distorted, dreamlike fashion. In turn, the vampire's mind focuses entirely on controlling 
                his mortal subject. His own body lies in a torpid state, defenseless against any actions made toward it.
            </p>
            <p>
                Vampires cannot possess one another in this fashion, as even the weakest Kindred's mind is strong enough to resist such straightforward mental dominance. Only
                through a blood bond can one vampire control another to this degree. Supernatural creatures also cannot be possessed in this way, although ghouls that have drunk
                from the vampire using Possession can.
            </p>
        </>
    ),
    system: (
        <>
            <p>
                The vampire must completely strip away the target's Willpower prior to possessing her. The player spends a Willpower point, then rolls Charisma + Intimidation, 
                while the subject rolls his Willpower in a resisted action (difficulty 7 for each). For each success the vampire obtains over the victim's total, the target
                loses a point of temporary Willpower. Only if the attacker botches can the subject escape her fate, since this makes the target immune to any further Dominate
                attempts by that vampire for the rest of the story.
            </p>
            <p>
                Once the target loses all her temporary Willpower, her mind is open. The vampire rolls Manipulation + Intimidation (difficulty 7) to determine how fully he
                assumes control of the mortal shell. Similar to the Animalism power Subsume the Spirit, multiple successes allow the character to utilize some mental Disciplines,
                noted on the chart below. (Vampires possessing ghouls can use the physical Disciplines the ghoul possesses, but not the mental ones.)
            </p>
            <div className={styles.twoColumnSection}>
                <label>Successes</label>
                <label>Result</label>
                <p>1 success</p>
                <p>Cannot use Disciplines.</p>
                <p>2 successess</p>
                <p>Can use Auspex and other sensory powers.</p>
                <p>3 successess</p>
                <p>Can also use Presence and other powers of emotional manipulation.</p>
                <p>4 successes</p>
                <p>Can also use Dementation, Dominate, and other powers of mental manipulation.</p>
                <p>5+ successes</p>
                <p>Can also use Chimerstry, Necromancy, Thaumaturgy, and other mystical powers.</p>
            </div>
            <p>
                The character may travel as far from his body as he is physically able while possessing the mortal. The vampire may also venture out during the day in the mortal form. 
                However, the vampire's own body must be awake to do so, requiring a successful roll to remain awake (see p. 262). If the vampire leaves the mortal shell (by
                choice, if his body falls asleep, through supernatural expulsion, after sustaining significant injury, etc.), his consciousness returns to his physical form in an instant.
            </p>
            <p>
                Once freed from possession, the mortal regains men- tal control of herself. This can happen in an instant, or the victim may lie comatose for days while her psyche copes 
                with the violation.
            </p>
            <p>
                The vampire experiences everything the mortal body feels during possession, from pleasure to pain. In fact, any damage the victim's body sustains is also applied to the 
                character's body (though the Kindred may soak as normal). If the mortal dies before the vampire's soul can flee from the body, the character's body falls into torpor. 
                Presumably this is in sympathetic response to the massive trauma of death, though some Kindred believe that the vampire's soul is cast adrift during this time and must 
                find its way back to the body.
            </p>
            <p>
                The Kindred can remain in the mortal's body even if his own torpid form is destroyed, though such a pathetic creature is not likely to exist for long. At each sunrise,
                the vampire must roll Courage (difficulty 8) or be expelled from the body. If forced from the mortal body, the vampire tumbles into the astral plane, his soul permanently 
                lost in the spirit world. A vampire trapped in a mortal body may not be “re-Embraced.” If the Embrace occurs to such a creature, he simply meets Final Death.
            </p>
        </>
    )
}

export const dominateLevels = [
    level1,
    level2,
    level3,
    level4,
    level5
]