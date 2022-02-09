import { Discipline } from "../../../models/discipline";
import Brujah from '../../clans_data/brujah/brujah';
import Toreador from '../../clans_data/toreador/toreador';
import Picture from './Auspex.jpg';
import { auspexLevels } from "./auspex_levels";
import styles from '../disciplineData.module.css';

const discipline: Discipline = {
    name: "Auspex",
    description: `
    Auspex gives the vampire uncanny sensory abilities. She starts with the capacity to heighten her natural senses significantly, but as she grows in power, she can perceive psychic auras and read the thoughts of another being. Auspex can also pierce through mental illusions such as those created by Obfuscate — see the sidebar “Seeing the Unseen” on p. 142 for more.
    However, a vampire with Auspex needs to be careful. Her increased sensory sensitivity can cause her to be drawn in by beautiful things or stunned by loud noises or pungent smells. Sudden or dynamic events can disorient an Auspex-using character unless her player makes a Willpower roll to block them out (difficulty of at least 4, although the more potent the source of distraction, the higher the difficulty).
    Failure overwhelms the character's senses, making her oblivious to her surroundings for a turn or two. While the Malkavians and Toreador are more prone to these kinds of distractions, the Tremere and Tzimisce aren't immune.
    Dots in Perception are very useful for using Auspex powers, as more successes help the character gain more sensory information.
    See page 136 in the Core Rulebook to check what each aura color reflects.
    `,
    system: null,
    levels: auspexLevels,
    clans: [Brujah, Toreador],
    icon: "nf-mdi-eye_outline",
    image: {
        credit: "Oshred",
        creditLink: "https://twitter.com/oshredart",
        img: Picture
    }
}


export default discipline;