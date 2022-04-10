import { Discipline } from "../../../models/discipline";
import Brujah from '../../clans_data/brujah/brujah';
import Toreador from '../../clans_data/toreador/toreador';
import Ventrue from '../../clans_data/ventrue/ventrue';
import Picture from './Presence.jpg';
import { presenceLevels } from "./presence_levels";

const discipline: Discipline = {
    name: "Presence",
    description: <>
        <p>
            Presence is the Discipline of emotional manipulation. Vampires with this power can inspire passionate fervor or unreasoning terror in mortals and Kindred alike. 
            In addition, unlike most Disciplines, some of Presence's powers can be used on entire crowds at one time. Presence can transcend race, religion, gender, class, 
            and (most importantly) supernatural nature. As such, this subtle power is one of the most useful Disciplines a vampire can possess.
        </p>
        <p>
            The major drawback of Presence is that it controls only the emotions. It causes others to feel a certain way toward the vampire, but does not give her outright control over them. 
            While people weigh strongly the orders that the vampire declares, their minds are still their own. Suicidal or ridiculous directives don't sound any more sensible 
            just because the person giving them is unusually fascinating. Still, inspired eloquence or significant wealth used in combination with this Discipline can enable 
            the vampire to urge others along a desired course.
        </p>
        <p>
            The Brujah, Toreador, and Ventrue Clans are all adept in this Discipline. The Ventrue are arguably the most skilled with its application, however,
            due to their ability to use Presence and Dominate in efficient combination.
        </p>
    </>,
    system: (
        <>
            <p>
                Anyone can resist Presence for one scene by spending a Willpower point and succeeding on a Willpower roll (difficulty 8), but the affected individual must keep spending 
                points until he is no longer in the presence of the vampire (or, in the case of Summon, until the effect wears off).
            </p>
            <p>
                Vampires three or more Generations lower than the wielder need only spend a single Willpower to ignore the Presence for an entire night and need not roll Willpower to do so.
            </p>

        </>
    ),
    levels: presenceLevels,
    clans: [Brujah, Toreador, Ventrue],
    icon: "R",
    image: {
        credit: "Amy Wilkins",
        creditLink: "https://www.artstation.com/amywilkinsart",
        img: Picture
    }
}


export default discipline;