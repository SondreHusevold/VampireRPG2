import { DisciplineLevel } from "../../../models/discipline";
import styles from '../disciplineData.module.css';

const level1: DisciplineLevel = {
    name: "Cloak of Shadows",
    description: (
        <>
            <p>
                At this level, the vampire must rely on nearby shadows and cover to assist in hiding his presence. He steps into an out-of-the-way, shadowed place and eases himself 
                from normal sight. The vampire remains unnoticed as long as he stays silent, still, under some degree of cover (such as a curtain, bush, door frame, lamppost,
                or alley), and out of direct lighting. The immortal’s concealment vanishes if he moves, attacks, or falls under direct light. Furthermore, the vampire’s deception
                cannot stand up to concentrated observation without fading.
            </p>
        </>
    ),
    system: (
        <>
            <p>
                No roll is required as long as the character fulfills the criteria described above. So long as he remains quiet and motionless, virtually no one but another Kindred with 
                a high enough Auspex rating will see him.
            </p>
        </>
    )
}

const level2: DisciplineLevel = {
    name: "Unseen Presence",
    description: (
        <>
            <p>
                With experience, the vampire can move around without being seen. Shadows seem to shift to cover him, and people automatically avert their gazes as he passes by. 
                Others move unconsciously to avoid contact with the cloaked creature; those with weak wills may even scurry away from the area in unacknowledged fear. 
                The vampire remains ignored indefinitely unless someone deliberately seeks him out or he inadvertently reveals himself.
            </p>
            <p>
                Since the vampire fully retains his physical substance, he must be careful to avoid contact with anything that may disclose his presence (knocking over a
                vase, bumping into someone). Even a whispered word or the scuffing of a shoe against the floor can be enough to disrupt the power.
            </p>
        </>
    ),
    system: (
        <>
            <p>
                No roll is necessary to use this power unless the character speaks, attacks, or otherwise draws attention to himself. The Storyteller should call for a Wits +
                Stealth roll under any circumstances that might cause the character to reveal himself. The difficulty of the roll depends on the situation; stepping on a squeaky
                floorboard might be a 5, while walking through a pool of water may require a 9. Other acts may require a certain number of successes; speaking quietly without giving 
                away one’s position, for instance, demands at least three successes. Upon success, the vampire, all her clothing, and objects that could fit into a pocket are concealed.
            </p>
            <p>
                Some things are beyond the power of Unseen Presence to conceal. Although the character is cloaked from view while he smashes through a window, yells out, 
                or throws someone across the room, the vampire becomes visible to all in the aftermath. Bystanders snap out of the subtle fugue in which Obfuscate put them.
                Worse still, each viewer can make a Wits + Awareness roll (difficulty 7); if successful, the mental haze clears completely, so those individuals recall every move the
                character made up until then as if he had been visible the entire time.
            </p>
        </>
    )
}

const level3: DisciplineLevel = {
    name: "Mask of a Thousand Faces",
    description: (
        <>
            <p>
                The vampire can influence the perception of others, causing them to see a face different from his. Although the Kindred’s physical form does not change, any observer 
                who cannot sense the truth sees whomever the vampire wishes her to see.
            </p>
            <p>
                The vampire must have a firm idea of the visage he wishes to project. The primary decision is whether to create an imaginary face or to superimpose the 
                features of another person. Manufactured features are often more difficult to compose in believable proportions, but such a disguise is easier to maintain than having to
                impersonate someone else. Of course, things get simpler if the Kindred borrows the face but doesn’t bother with the personality.
            </p>
        </>
    ),
    system: (
        <>
            <p>
                The player rolls Manipulation + Performance (difficulty 7) to determine how well the disguise works. If the character tries to impersonate someone, he must get a good 
                look at the subject before putting on the mask. The Storyteller may raise the difficulty if the character catches only a glimpse. The chart below lists the degrees 
                of success in manufacturing another appearance. Vampires wishing to mask themselves as a person more attractive than they are must pay additional blood points 
                equal to the difference between the vampire’s Appearance rating and the Appearance of the mask (which means that younger vampires may need to take longer in order 
                to spend the blood necessary).
            </p>
            <div className={styles.twoColumnSection}>
                <label>Successes</label>
                <label>Result</label>
                <p>1 success</p>
                <p>The vampire retains the same height and build, with a few slight alterations to his basic features. Nosferatu can appear as normal, albeit ugly, mortals.</p>
                <p>2 successess</p>
                <p>He looks unlike himself; people don’t easily recognize him or agree about his appearance.</p>
                <p>3 successess</p>
                <p>He looks the way he wants to appear.</p>
                <p>4 successes</p>
                <p>Complete transformation, including gestures, mannerisms, appearance, and voice.</p>
                <p>5 successes</p>
                <p>Profound alteration (appear as the opposite sex, a vastly different age, or an extreme change of size).</p>
            </div>
            <p>
                Actually posing as someone else carries its own problems. The character should know at least basic information about the individual; especially difficult deceptions 
                (fooling a lover or close friend) require at least some familiarity with the target in order to succeed.
            </p>
        </>
    )
}

const level4: DisciplineLevel = {
    name: "Vanish from the Mind’s Eye",
    description: (
        <>
            <p>
                This potent expression of Obfuscate enables the vampire to disappear from plain view. So profound is this vanishing that the immortal can fade away even if he stands 
                directly in front of someone.
            </p>
            <p>
                While the disappearance itself is quietly subtle, its impact on those who see it is anything but. Most kine panic and flee in the aftermath. 
                Especially weak-willed individuals wipe the memory of the Kindred from their minds. Although vampires are not shaken so easily, even Kindred may be momentarily 
                surprised by a sudden vanishing.
            </p>
        </>    
    ),
    system: (
        <>
            <p>
                The player rolls Charisma + Stealth; the difficulty equals the target’s Wits + Alertness (use the highest total in the group if the character disappears in front of a crowd). 
                With three or fewer successes, the character fades but does not vanish, becoming an indistinct, ghostlike figure. With more than three, he disappears completely. 
                If the player scores more successes than an observer’s Willpower rating, that person forgets that the vampire was there in the first place.
            </p>
            <p>
                Tracking the character accurately while he appears ghostlike requires a Perception + Alertness roll (difficulty 8). A successful roll means the individual can interact 
                normally with the vampire (although the Kindred looks like a profoundly disturbing ghostly shape). A failed roll results in a +2 difficulty modifier (maximum 10) 
                when attempting to act upon, or interact with, the vampire. The Storyteller may call for new observation checks if the vampire moves to an environment in which he’s 
                difficult to see (heads into shadows, crosses behind an obstacle, proceeds through a crowd). When fully invisible, the vampire is handled as described under 
                Unseen Presence, above.
            </p>
            <p>
                A person subject to the vanishing makes a Wits + Courage roll (mortals at difficulty 9, vampires at difficulty 5). A successful roll means the individual reacts immediately 
                (although after the vampire performs his action for that turn); failure means the person stands uncomprehending for two turns while her mind tries to make sense of 
                what she just experienced.
            </p>
        </>
    )
}

const level5: DisciplineLevel = {
    name: "Cloak the Gathering",
    description: (
        <>
            <p>
                At this degree of power, the vampire may extend his concealing abilities to cover an area. The immortal may use any Obfuscate power upon those nearby as well as upon himself, 
                if he wishes.
            </p>
            <p>
                Any protected person who compromises the cloak exposes himself to view. Further, if the one who invokes the power gives himself away, the cloak falls from everyone. 
                This power is particularly useful if the vampire needs to bring his retinue through a secure location without drawing the notice of others.
            </p>
        </>
    ),
    system: (
        <>
            <p>
                The character may conceal one extra individual for each dot of Stealth he possesses. He may bestow any single Obfuscate power at a given time to the group. 
                While the power applies to everyone under the character’s cloak, his player need only make a single roll. 
                Each individual must follow the requirements described under the relevant Obfuscate power to remain under its effect; 
                any person who fails to do so loses the cloak’s protection, but doesn’t expose the others. Only if the vampire himself errs does the power drop for everyone.
            </p>
        </>
    )
}

export const obfuscateLevels: DisciplineLevel[] = [
    level1,
    level2,
    level3,
    level4,
    level5
]