import { Discipline } from "../../../models/discipline";
import Malkavian from '../../clans_data/malkavian/malkavian';
import Nosferatu from '../../clans_data/nosferatu/nosferatu';
import Picture from './Obfuscate.jpg';
import { obfuscateLevels } from "./obfuscate_levels";


const discipline: Discipline = {
    name: "Obfuscate",
    description: <>
        <p>
            Obfuscate is the uncanny ability for Kindred to conceal themselves from sight, sometimes even in full view of a crowd. An Obfuscated vampire doesn't actually become invisible, 
            however — rather, he is able to delude observers into believing that he has vanished. Obfuscate also allows Kindred to change their features and conceal other people or objects. 
        </p>
        <p>
            Usually, few mortals or supernaturals (even those trained in Awareness) can pierce through the fog of Obfuscate. Animals, who rely more on their instincts than their normal
            senses, can sometime perceive (and be frightened by) the vampire's presence. Children and those to whom deception is foreign may also be able to pierce the illusion, 
            at the Storyteller's discretion. Finally, the Auspex Discipline enables Kindred to see through Obfuscate. Even that is not guaranteed, however; refer to “Seeing the Unseen,” 
            p. 142, for more details.
        </p>
        <p>
            Since Obfuscate clouds the mind of the viewer, vampires can't use it to hide their presence from electronic or mechanical devices. Video and photo cameras, for example, 
            capture the vampire's image accurately. Even so, the person using, say, her cell phone to record an Obfuscated vampire will still have her mind impacted by the power, 
            and she won't see the Kindred's image until she views the video at a later date (if even then).
        </p>
        <p>
            Several Clans cultivate this power — the Assamites, Followers of Set, and Malkavians, for example — but the Nosferatu are particularly known for this Discipline. 
            Some elder Kindred believe that Caine, or perhaps Lilith, bestowed the Clan with this Discipline to compensate for the hideous physical deformities its members suffer.
        </p>
    </>,
    system: (
        <>
        <p>
            Typically vampires using Obfuscate must be within a short range of their witnesses (approximately five yards or meters per dot of Wits + Stealth) for their power to be effective.
        </p>
        <p>
            Unless the Kindred chooses to make herself seen, she can remain obscured for as long as she wills it. At higher levels, the vampire can actually fade from sight
            so subtly that those nearby can't actually recall the moment at which she left.
        </p>
        <p>
            Most Obfuscate powers last for a scene, or until the vampire ceases maintaining them. Once evoked, they require very little mental effort to keep in place.
        </p>
        </>
    ),
    levels: obfuscateLevels,
    clans: [Malkavian, Nosferatu],
    icon: "O",
    image: {
        credit: "Unknown",
        creditLink: "",
        img: Picture
    }
}


export default discipline;