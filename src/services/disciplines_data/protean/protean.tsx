import { Discipline } from "../../../models/discipline";
import Gangrel from '../../clans_data/gangrel/gangrel';
import Picture from './Protean.jpg';
import { proteanLevels } from "./protean_levels";

const discipline: Discipline = {
    name: "Protean",
    description: <>
        <p>
            Protean allows the Kindred the mystical ability to manipulate his physical form. Some vampires believe the power stems from a heightened connection to the natural world, 
            while others consider it to be a magnification of the mark of Caine. Whatever its basis maybe, those that develop this Discipline can grow bestial claws, 
            take on the forms of bats and wolves, turn themselves into mist, and even meld into the very earth itself.
        </p>
        <p>
            Transformed Kindred can generally use other Disciplines — vampires in wolf form can still read auras and communicate with other animals, for example. 
            However, the Storyteller may rule that certain Disciplines may not be used in specific situations. The Kindred’s clothes and personal possessions also change when he transforms 
            (presumably absorbed within his very substance), although armor and the like do not provide any benefit while transformed.
        </p>
        <p>
            Vampires cannot change or transform large objects or other beings; Protean is a personal expression of power. A Kindred who has been staked (thereby trapping his soul 
            within his body) cannot transform. Some vampires believe that those who have mastered the highest levels of Protean can deny this limitation, however.
        </p>
    </>,
    system: null,
    levels: proteanLevels,
    clans: [Gangrel],
    icon: "J",
    image: {
        credit: "Lilian Helvecio",
        creditLink: "https://www.pinterest.com/lilianhelvecio/",
        img: Picture
    }
}


export default discipline;