import { Discipline } from "../../../models/discipline";
import Brujah from '../../clans_data/brujah/brujah';
import Nosferatu from '../../clans_data/nosferatu/nosferatu';
import Picture from './Potence.jpg';
import { getPotenceLevel } from "./potence_levels";


const discipline: Discipline = {
    name: "Potence",
    description: <>
        <p>
            Kindred endowed with Potence possess unnatural strength. This Discipline enables vampire to leap massive distances, lift tremendous weights, and strike opponents with brutal force. 
            Even low ranks of this power can give Kindred physical power beyond mortal bounds. More powerful Kindred can leap so far that they appear to be flying, toss cars like soda cans, and
            punch through walls like cardboard. While the more subtle mental Disciplines can be awe-inspiring, the brutal effectiveness of Potence is formidable in its own right.
        </p>
        <p>
            The Brujah, Giovanni, Lasombra, and Nosferatu are naturally gifted with this Discipline, but members of other Clans often make a point to find someone who can teach them 
            the awesome power of Potence.
        </p>
    </>,
    system: (
        <>
        <p>
            Each dot that the vampire has in Potence adds one die to all Strength-related dice rolls. Further, the player can spend one blood point and change his Potence dice into an equal 
            number of automatic successes to all Strength-related rolls for the turn. 
        </p>
        <p>
            In melee and brawling combat, successes from Potence (either rolled or automatic) 
            are applied to the damage roll results.
        </p>
        </>
    ),
    levels: getPotenceLevel(),
    clans: [Brujah, Nosferatu],
    icon: "P",
    image: {
        credit: "Carmen Cornet",
        link: "https://www.artstation.com/ccornet",
        img: Picture,
        pos: "30% 30%"
    }
}


export default discipline;