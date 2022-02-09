import { Discipline } from "../../../models/discipline";
import Brujah from '../../clans_data/brujah/brujah';
import Toreador from '../../clans_data/toreador/toreador';
import Picture from './Celerity.jpg';

const discipline: Discipline = {
    name: "Celerity",
    description: `
    Not all vampires are slow, meticulous creatures. When needed, some vampires can move fast — really fast. Celerity allows Brujah, and Toreadors to move with astonishing swiftness, becoming practically a blur.
    The Toreador are more inclined to use Celerity to provide an air of unnatural grace to live performances or for an extra push to complete a masterpiece on time, but they can be as quick to draw blood as any assassin or punk when angered.
    Brujah, on the other hand, simply like the edge that the power gives them against overwhelming odds. 
    `,
    system: (
        <>
            <p>
                Each point of Celerity adds one die to every Dexterity-related dice roll. In addition, the player can spend one blood point to take an extra action up to the number 
                of dots he has in Celerity at the beginning of the relevant turn; this expenditure can go beyond her normal Generation maximum. 
            </p>
            <p>
                Any dots used for extra actions, however, are no longer available for Dexterity-related rolls during that turn. 
                These additional actions must be physical (e.g., the vampire cannot use a mental Discipline like Dominate multiple times in one turn), and extra actions occur 
                at the end of the turn (the vampire's regular action still takes place per her initiative roll).
            </p>
            <p>
                Normally, a character without Celerity must divide their dice if she wants to take multiple actions in a single turn, as per p. 248 in the Core Rulebook.
            </p>
            <p>
                A character using Celerity performs his extra actions (including full movement) without penalty, gaining a full dice pool for each separate action. 
            </p>
            <p>
                Extra actions gained through Celerity may not in turn be split into multiple actions, however. 
            </p>
        </>
    ),
    levels: [
        {
            name: "Celerity - Level 1",
            description: <div/>,
            system: <p>+1 on all dex rolls, can expend dex bonus + blood point to get 1 extra physical action without penalties.</p>,
        },
        {
            name: "Celerity - Level 2",
            description: <div/>,
            system: <p>+2 on all dex rolls, can expend dex bonus + blood points to get up to 2 extra physical actions without penalties.</p>,
        },
        {
            name: "Celerity - Level 3",
            description: <div/>,
            system: <p>+3 on all dex rolls, can expend dex bonus + blood points to get up to 3 extra physical actions without penalties.</p>,
        },
        {
            name: "Celerity - Level 4",
            description: <div/>,
            system: <p>+4 on all dex rolls, can expend dex bonus + blood points to get up to 4 extra physical actions without penalties.</p>,
        },
        {
            name: "Celerity - Level 5",
            description: <div/>,
            system: <p>+5 on all dex rolls, can expend dex bonus + blood points to get up to 5 extra physical actions without penalties.</p>,
        }
    ],
    clans: [Brujah, Toreador],
    icon: "nf-fa-bolt",
    image: {
        credit: "Jae Hyeok Jang",
        creditLink: "https://www.artstation.com/realcrimson",
        img: Picture
    }
}

export default discipline;