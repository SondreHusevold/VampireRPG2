import { DisciplineLevel } from "../../../models/discipline";
import columnStyles from '../../../containers/common/columns.module.css';

const level1: DisciplineLevel = {
    name: "Feral Whispers",
    description: (
        <>
            <p>
                This power is the basis from which all other Animalism abilities grow. The vampire creates an empathic connection with a beast, thereby allowing him to communicate 
                or issue simple commands. The Kindred locks eyes with the animal, transmitting his desires through sheer force of will. Although it isn't necessary to actually 
                “speak” in chirps, hisses, or barks, some vampires find that doing so helps strengthen the connection with the animal. Eye contact must be maintained the entire 
                time; if it's broken, the Kindred must re-establish contact to continue communication.
            </p>
            <p>
                The simpler the creature, the more difficult it becomes to connect with the animal's Beast. Mammals, predatory birds, and larger reptiles are relatively easy
                to communicate with. Insects, invertebrates, and most fish are just too simple to connect with.
            </p>
            <p>
                Feral Whispers provides no guarantees that an animal will want to deal with the vampire, nor does it ensure that the animal will pursue any requests the vampire
                makes of it. Still, it does at least make the creature better disposed toward the Kindred. The manner in which the vampire presents his desires to the animal often 
                depends on the type of creature. A Kindred can often bully smaller beasts into heeding commands, but he's better off couching orders for large predators as requests.
            </p>
            <p>
                If the vampire successfully uses the power, the animal performs the command to the best of its ability and intellect. Only the very brightest creatures understand
                truly complex directives (orders dealing with conditional situations or requiring abstract logic). Commands that the animal does understand remain deeply implanted, 
                however, and guide its behavior for some time.
            </p>
            <p>

            </p>
        </>
    ),
    system: (
        <>
            <p>
                No roll is necessary to talk with an animal, but the character must establish eye contact (see p. 152) first. Issuing commands requires a Manipulation + Animal Ken roll. 
                The difficulty depends on the creature: Predatory mammals (wolves, cats, vampire bats) are difficulty 6, other mammals and predatory birds (rats, owls) 
                are difficulty 7, and other birds and reptiles (pigeons, snakes) are difficulty 8. This difficulty is reduced by one if the character speaks to the animal in its 
                “native tongue,” and can be adjusted further by circumstances and roleplaying skill (all communication between characters and animals must be roleplayed).
            </p>
            <p>
                The character's Nature plays a large part in how he approaches these conversations. The character might try intimidating, teasing, cajoling, or rationalizing. 
                The player should understand that he does not simply play his character in these situations, but the Beast Within as well.
            </p>
            <p>
                Using this power cannot force an animal to do something against its nature, or to force a creature to risk its life. While the aforementioned grizzly would stand
                guard to the vampire's haven and even fight for it, it would not do so against obviously superior numbers or something overwhelmingly supernatural. A predatory
                bird might be convinced to harry a target, but would definitely not hold ground. A docile dog or skittish cat would have no problem with reporting something it
                had seen, but it wouldn't enter combat unless given no other option — though it would likely agree to stand and fight and then flee at the first opportunity, if a
                harsh Kindred demanded it.
            </p>
        </>
    )
}

const level2: DisciplineLevel = {
    name: "Beckoning",
    description: (
        <>
            <p>
                The vampire's connection to the Beast grows strong enough that he may call out in the voice of a specific type of animal — howling like a wolf, shrilling like a
                raven, etc. This call mystically summons creatures of the chosen type. Since each type of animal has a different call, Beckoning works for only a single species
                at a time
            </p>
            <p>
                All such animals within earshot are summoned, and some percentage of them will heed the Beckoning if it is successful. While the vampire has no further control
                over the beasts who answer, the animals who do are favorably disposed toward him and are at least willing to listen to the Kindred's concerns. (The vampire can
                then use Feral Whispers on individual animals to command them, which may be at a decreased difficulty at Storyteller discretion.)
            </p>
        </>
    ),
    system: (
        <>
            <p>
                The player rolls Charisma + Survival (difficulty 6) to determine the response to the character's call; consult the table below. Only animals that can
                hear the cry will respond. If the Storyteller decides no animals of that type are within earshot, the summons goes unanswered.
            </p>
            <p>
                The call can be as specific as the player desires. A character could call for all bats in the area, for only the male bats nearby, or for only the albino bat with the
                notched ear he saw the other night.
            </p>
            <div className={columnStyles.doubleColumn}>
                <label>Successes</label>
                <label>Result</label>
                <p>1 success</p>
                <p>A single animal responds.</p>
                <p>2 successess</p>
                <p>One-quarter of the animals within earshot respond.</p>
                <p>3 successess</p>
                <p>Half of the animals respond.</p>
                <p>4 successes</p>
                <p>Most of the animals respond.</p>
                <p>5 successes</p>
                <p>All of the animals respond.</p>
            </div>
        </>
    )
}

const level3: DisciplineLevel = {
    name: "Quell the Beast",
    description: (
        <>
            <p>
                As the supreme predators of the natural world, Kindred are highly attuned to the bestial nature that dwells within every mortal heart. A vampire who develops
                this power may assert his will over a mortal (animal or human) subject, subduing the Beast within her. This quenches all powerful, strong emotions — hope, fury,
                love, fear — within the target. The Kindred must either touch his subject or stare into her eyes to channel his will effectively.
            </p>
            <p>
                Mortals who lack the fire of their inner Beasts are quite tractable, reacting to even stressful situations with indifference. Even the most courageous or maddened 
                mortal becomes apathetic and listless, while an especially sensitive individual may suffer from a phobic derangement while under the power's influence.
            </p>
            <p>
                Different Clans evoke this power in different ways, though the effect itself is identical. Tzimisce call it Cowing the Beast, since they force the mortal's weaker
                spirit to shrivel in fear before the Kindred's own inner Beast. Nosferatu refer to it as Song of Serenity, since they soothe the subject's Beast into a state of utter
                complacency, thus allowing them to feed freely. Gangrel know the power as Quell the Beast, and force the mortal spirit into a state of fear or apathy as befits the
                individual vampire's nature.
            </p>
        </>
    ),
    system: (
        <>
            <p>
                The player rolls Manipulation + Intimidation if forcing down the Beast through fear, or Manipulation + Empathy if soothing it into complacency. 
                The difficulty of the roll is 7 in either case. This is an extended action requiring as many total successes as the target has Willpower. 
                Failure indicates that the player must start over from the beginning, while a botch indicates that the vampire may not affect that subject's
                Beast for the remainder of the scene.
            </p>
            <p>
                When a mortal's Beast is cowed or soothed, she can no longer use or regain Willpower. She ceases all struggles, whether mental or physical. 
                She doesn't even defend herself if assaulted, though the Storyteller may allow a Willpower roll if the mortal believes her life is truly threatened. 
                To recover from this power, the mortal's player rolls Willpower (difficulty 6) once per day until she accumulates enough successes to equal the
                vampire's Willpower. Kindred cannot be affected by this power.
            </p>
            <p>
                Though a vampire's Beast cannot be cowed with this ability, the Storyteller may allow characters to use the “soothing” variation of this power to pull a vampire out
                of frenzy. With three or more successes, the frenzying vampire may roll again to pull herself out of frenzy, using the same difficulty as the stimulus that caused the
                frenzy originally.
            </p>
        </>
    )
}

const level4: DisciplineLevel = {
    name: "Subsume the Spirit",
    description: (
        <>
            <p>
                By locking his gaze with that of an animal, the vampire may mentally possess the creature. Some elders believe that since animals don't have souls but spirits, the
                vampire can move his own soul into the animal's body. Many younger vampires think it a matter of transferring one's consciousness into the animal's mind. 
                In either case, it's agreed that the beast's weaker spirit (or mind) is pushed aside by the Kindred's own consciousness. The vampire's body falls into a motionless state
                akin to torpor while his mind takes control of the animal's actions, remaining this way until the Kindred's consciousness returns.
            </p>
            <p>
                Some haughty Tzimisce eschew this power, considering it debasing to enter the body of a lesser creature. When they do stoop to using it, they possess only predators. 
                Conversely, Gangrel revel in connecting to the natural world in this way. They delight in sampling different animals' natures.
            </p>
        </>
        
    ),
    system: (
        <>
            <p>
                The player rolls Manipulation + Animal Ken (difficulty 8) as the character looks into the animal's eyes (see sidebar on p. 152). The number of successes allows 
                the character to employ some mental Disciplines while possessing the animal, as noted below.
            </p>
            <div className={columnStyles.doubleColumn}>
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
                This power entwines the character's consciousness closely with the animal's spirit, so much so that the character may continue to think and feel like that animal even 
                after breaking the connection. This effect continues until the character spends a total of seven nights or three Willpower points to resist and finally
                overcome the animal nature. This should be roleplayed, though the character will be affected to a lesser degree if the player chooses to spend Willpower.
            </p>
            <p>
                At the end of any particularly exciting incident during possession, the player rolls Wits + Empathy (difficulty 8) for the character to retain his own mind. 
                Failure indicates that the character's mind returns to his own body, but still thinks in purely animalistic terms. A botch returns the character to his body, and also
                sends him into frenzy.
            </p>
            <p>
                The character may travel as far from his own physical body as he chooses while possessing the animal. The character retains no conscious connection with his vampire 
                body during this time, though. The vampire may also venture out during the day, albeit in the animal's body. However, the character's own body must be awake to do so, 
                requiring a successful roll to remain awake (see p. 262). If the character leaves the animal's body (by choice, if his body falls asleep, or after sustaining 
                significant injury), the vampire's consciousness returns to his physical form instantaneously.
            </p>
            <p>
                Although the vampire has no conscious link to his body while possessing the animal, he does form a sympathetic bond. Anything the animal feels, the vampire also experiences, 
                from pleasure to pain. In fact, any damage the animal's body sustains is also applied to the character's body, though the Kindred body may soak as normal. 
                If the animal dies before the vampire's soul can flee from the body, the character's body falls into torpor. Presumably this is in sympathetic response to
                the massive trauma of death, but some Kindred believe that the vampire's soul is cast adrift during this time and must find its way back to the body.
            </p>
        </>
    )
}

const level5: DisciplineLevel = {
    name: "Drawing Out the Beast",
    description: (
        <>
            <p>
                At this level of Animalism, the Kindred has a keen understanding of the Beast Within, and is able to release his feral urges upon another mortal or vampire.
                The recipient of the vampire's Beast is instantly overcome by frenzy. This is an unnatural frenzy, however, as the victim is channeling the Kindred's own fury. As
                such, the vampire's own behavior, expressions, and even speech patterns are evident in the subject's savage actions.
            </p>
            <p>
                Gangrel and Tzimisce are especially fond of unleashing their Beasts onto others. Gangrel do so to stir their ghouls into inspired heights of savagery during combat.
                Tzimisce care less about who receives their Beast than retaining their own composure.
            </p>
        </>
    ),
    system: (
        <>
            <p>
                The player must announce his preferred target (since it must be someone within sight, Drawing Out the Beast cannot be used if the vampire is alone),
                then roll Manipulation + Self-Control/Instinct (difficulty 8). Refer to the table below for the results:
            </p>
            <div className={columnStyles.doubleColumn}>
                <label>Successes</label>
                <label>Result</label>
                <p>1 success</p>
                <p>The character transfers the Beast, but unleashes it upon a random individual.</p>
                <p>2 successess</p>
                <p>
                    The character is stunned by the effort and may not act next turn, but transfers the Beast successfully. Alternatively, the character may act
                    normally during the turn, but must spend a Willpower point or suffer a single level of lethal damage.
                </p>
                <p>3+ successess</p>
                <p>The character transfers the Beast successfully.</p>
            </div>
            <p>
                If the attempt fails, the character himself immediately enters frenzy. As the character relaxes in expectation of relieving his savage urges, the Beast takes that
                opportunity to dig deeper. In this case, the frenzy lasts twice as long as normal and is twice as difficult to shrug off; its severity also increases exponentially. 
                Botching this roll is even more catastrophic; the heightened frenzy grows so extreme that not even expending Willpower curbs its duration or effects. 
                The character is a hapless victim to the terrible fury of his Beast, and may well hurl herself into a savage, flesh-rending rampage that leaves the Masquerade 
                (and unfortunate nearby onlookers) in tatters.
            </p>
            <p>
                If the character leaves the target's presence before the frenzy expends itself, the vampire loses his Beast, perhaps permanently. While no longer vulnerable to
                frenzy, the character cannot use or regain Willpower and becomes increasingly lethargic. To recover the Beast, he must find the person who now possesses it
                (who likely isn't enjoying herself very much) and coax the Beast into its proper vessel. The most effective way to do so is to behave in ways that make the Beast want
                to return — however, this isn't a guarantee that it will wish to do so. Alternatively, the character can simply kill the host (thus causing the Beast to return to the
                vampire immediately)
            </p>
        </>
    )
}

export const animalismLevels: DisciplineLevel[] = [
    level1,
    level2,
    level3,
    level4,
    level5
]