import { Discipline } from "../../../models/discipline";
import Malkavian from '../../clans_data/malkavian/malkavian';

import Picture from './Dementation.jpg';
import { dementationLevels } from "./dementationLevels";

const discipline: Discipline = {
    name: "Dementation",
    description: <>
        <p>
            Dementation is the Discipline that allows a vampire to focus and channel madness into the minds of those around him. 
            Though it's the natural legacy of the Malkavians, practitioners of Dementation need not actually be mad to use the Discipline... but it helps.
        </p>
        <p>
            Disturbingly, Dementation doesn't actually make their victims mad, but rather it seems to break down the doors 
            to the hidden darkness of the target's mind, releasing into the open whatever is found there.
        </p> 
        <p>
            The Malkavians claim that this is because insanity is the next logical step in mental evolution, a transhumanist advancement of what modern people consider consciousness. 
            Other Kindred scoff that this reasoning is an outright justification for the chaos that Dementation brings. They don't scoff too loudly, however, lest the Malkavian advance 
            their consciousness next.
        </p>
    </>,
    system: null,
    levels: dementationLevels,
    clans: [Malkavian],
    icon: "E",
    image: {
        credit: "V20 Core Rulebook (p. 149)",
        link: "",
        img: Picture,
        pos: "30% 30%"
    }
}

export default discipline;