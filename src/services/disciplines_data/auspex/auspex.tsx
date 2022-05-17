import { Discipline } from "../../../models/discipline";
import Malkavian from '../../clans_data/malkavian/malkavian';
import Toreador from '../../clans_data/toreador/toreador';
import Tremere from '../../clans_data/tremere/tremere';
import Picture from './Auspex.jpg';
import { auspexLevels } from "./auspex_levels";

const discipline: Discipline = {
    name: "Auspex",
    description: <>
        <p>Auspex gives the vampire uncanny sensory abilities. She starts with the capacity to heighten her natural senses significantly, but as she grows in power, she can perceive psychic auras and read the thoughts of another being. Auspex can also pierce through mental illusions such as those created by Obfuscate — see the sidebar “Seeing the Unseen” on p. 142 for more.</p>
        <p>However, a vampire with Auspex needs to be careful. Her increased sensory sensitivity can cause her to be drawn in by beautiful things or stunned by loud noises or pungent smells. Sudden or dynamic events can disorient an Auspex-using character unless her player makes a Willpower roll to block them out (difficulty of at least 4, although the more potent the source of distraction, the higher the difficulty).</p>
        <p>Failure overwhelms the character's senses, making her oblivious to her surroundings for a turn or two. While the Malkavians and Toreador are more prone to these kinds of distractions, the Tremere and Tzimisce aren't immune.</p>
        <p>Dots in Perception are very useful for using Auspex powers, as more successes help the character gain more sensory information.</p>
        <p>See page 136 in the Core Rulebook to check what each aura color reflects.</p>
    </>
    ,
    system: null,
    levels: auspexLevels,
    clans: [Malkavian, Toreador, Tremere],
    icon: "A",
    image: {
        credit: "Lourdes Saraiva",
        link: "https://www.artstation.com/lourdessaraiva",
        img: Picture,
        pos: "30% 30%"
    }
}


export default discipline;