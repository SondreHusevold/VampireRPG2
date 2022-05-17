import { Discipline } from "../../../models/discipline";
import Nosferatu from '../../clans_data/nosferatu/nosferatu';
import Gangrel from '../../clans_data/gangrel/gangrel';
import Picture from './Animalism.jpg';
import { animalismLevels } from "./animalism_levels";

const discipline: Discipline = {
    name: "Animalism",
    description: <>
        <p>
            The Beast resides within all creatures, from scuttling cockroaches to scabrous rats up through untamed wolves and even powerful Kindred elders.
            Animalism allows the vampire to amplify his intensely primordial nature. He can not only communicate with animals, but can also force his will upon them, 
            directing such beasts to do as he commands. As the vampire grows in power, he can even control the Beast within mortals and other supernaturals.
        </p>
        <p>
            Beasts grow distinctly agitated in the presence of a vampire who lacks this Discipline or the Skill of Animal Ken, often to the point of attacking or running
            from the vampire. In contrast, vampires possessing Animalism exude a dominant vibe to lower creatures, which attracts them.
        </p>
        <p>
            Animalism is commonly found with vampires of the Gangrel and Nosferatu Clans. Manipulation and Charisma are important for the use of Animalism powers;
            the stronger the vampire's personality, the more influence he has over animals.
        </p>
    </>,
    system: null,
    levels: animalismLevels,
    clans: [Gangrel, Nosferatu],
    icon: "I",
    image: {
        credit: "Raquel Cornejo",
        link: "https://www.artstation.com/raquelcornejo",
        img: Picture,
        pos: "30% 30%"
    }
}


export default discipline;