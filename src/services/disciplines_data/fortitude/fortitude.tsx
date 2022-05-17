import { Discipline } from "../../../models/discipline";
import Gangrel from '../../clans_data/gangrel/gangrel';
import Ventrue from '../../clans_data/ventrue/ventrue';
import Picture from './Fortitude.jpg';
import { getFortitudeLevel } from "./fortitude_levels";

const discipline: Discipline = {
    name: "Fortitude",
    description: <>
        <p>
            Although all vampires have an unnatural constitution that make them much sturdier than mortals, Fortitude bestows a resilience that would make an action movie hero envious. 
        </p>
        <p>
            Vampires with this Discipline can shrug off agonizing trauma and make the most bone-shattering impact look like a flesh wound. The power even offers protection against 
            the traditional banes of vampires, such as sunlight and fire, and the Gangrel, Ravnos, and Ventrue all find that edge incredibly useful.
        </p>
    </>,
    system: (
        <>
            <p>
                A character's rating in Fortitude adds to his Stamina for the purposes of soaking normal damage (bashing and lethal). 
            </p>
            <p>
                A character with this Discipline may also use his dots 
                in Fortitude to soak aggravated damage, though Kindred cannot normally soak things like vampire bites, werewolf claws, magical effects, fire, sunlight, 
                or massive physical trauma.  See p. 272, for further details on soaking and damage.
            </p>
        </>
    ),
    levels: getFortitudeLevel(),
    clans: [Gangrel, Ventrue],
    icon: "F",
    image: {
        credit: "David Demaret",
        link: "https://www.artstation.com/moonchild",
        img: Picture,
        pos: "30% 30%"
    }
}


export default discipline;