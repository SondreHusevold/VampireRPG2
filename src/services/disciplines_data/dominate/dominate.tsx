import { Discipline } from "../../../models/discipline";
import Tremere from '../../clans_data/tremere/tremere';
import Ventrue from '../../clans_data/ventrue/ventrue';

import Picture from './Dominate.jpg';
import { dominateLevels } from "./dominateLevels";

const discipline: Discipline = {
    name: "Dominate",
    description: <>
        <p>
        Dominate is one of the most dreaded of Disciplines. It is a vampire's ability to influence another person's thoughts and actions through her own force of will.
        Dominate requires that the vampire capture her victim's gaze, as such, it may be used against only one subject at a time. 
        </p>
        <p>
            Further, commands must be issued verbally, although simple orders may be made with signs — for example, a pointed finger and forceful expression to 
            indicate “Go!”. However, the subject won't comply if he can't understand the vampire, no matter how powerful the Kindred's will is.
        </p> 
        <p>
            Perhaps unsurprisingly, vampires to which Dominate comes naturally tend to be from willful, domineering Clans. 
            The Giovanni, Lasombra, Tremere, and Ventrue all consider an iron will to be a boon, and are eager to impose that iron will on any who would move against them.
        </p>
    </>,
    system: <>
        <p>
            The need for eye contact stems from the aggressor Kindred's need to see his victim's soul, and the eyes are the traditionally known as the windows to the soul. 
            While the vampire needs to capture his target's attention, the target's eyes need not be present for such a power to work (although the arts of the
            Tzimisce make this somewhat challenging at times) — they only need to find the soul of his victim laid bare.
        </p>
        <p>
            A target trying to avoid eye contact can make a Willpower roll against a difficulty equal to Dominate user's Manipulation + Intimidation (or other appropriate combination for
            other Disciplines or specific situations, at the Storyteller's discretion). The difficulty may be reduced for mitigating factors: -1 in the case of the target obscuring his 
            eyes slightly (such as closing her eyes or wearing dark sunglasses) up to a -3 for the eyes being completely unseen (such as with a thick blindfold or having her eyes torn out). 
            Ultimately, however, it is up to the Storyteller to decide whether eye contact is established in a particular case.
        </p>
    </>,
    levels: dominateLevels,
    clans: [Tremere, Ventrue],
    icon: "D",
    image: {
        credit: "Oshred",
        creditLink: "https://twitter.com/oshredart",
        img: Picture
    }
}

export default discipline;