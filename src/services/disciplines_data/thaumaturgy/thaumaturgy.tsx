import { Discipline } from "../../../models/discipline";
import Tremere from '../../clans_data/tremere/tremere';
import Picture from './Thaumaturgy.jpg';
import { thaumaturgyLevels } from "./thaumaturgy_levels";

const discipline: Discipline = {
    name: "Thaumaturgy",
    description: <>
        <p>
            Thaumaturgy encompasses blood magic and other sorcerous arts available to Kindred. The Tremere Clan is best known for their possession (and jealous hoarding) of this Discipline. 
            The Tremere created Thaumaturgy by combining mortal wizardry with the power of vampiric vitae, and as a result it is a versatile and powerful Discipline. 
            Although there are whispers of the existence of Tremere antitribu in the Sabbat, other Clans in the Sword of Caine have also researched and developed access to such mystical might. 
            Nevertheless, the Tremere of the Camarilla remain this Discipline's masters.
        </p>
        <p>
            Thaumaturgy is divided into paths and rituals. Thaumaturgical paths are applications of the vampire's knowledge of blood magic, allowing her to create effects on a whim. 
            Rituals are more formulaic in nature, most akin to ancient magical “spells.” Because so many different paths and rituals are available to the arcane Tremere, one never
            knows what to expect when confronted with a practitioner of this Discipline
        </p>
        <p>
            Many Kindred fear crossing the practitioners of Thaumaturgy. It is a very potent and mutable Discipline, and almost anything the Kindred wishes may be accomplished through its magic.
        </p>
    </>,
    system: (
        <>
            <p>
                When a character first learns Thaumaturgy, the player selects a path for the character. That path is considered the character's primary path, and she automatically receives 
                one dot in it, as well as one Level One ritual. Thereafter, whenever the character increases her level in Thaumaturgy, her rating in the primary path increases by one as well. 
                Additional rituals are learned separately, as part of a story; players need not pay experience points for their characters to learn rituals up to the level equal to their 
                overall rating in Thaumaturgy, though they must find someone to teach the rituals in question. Path ratings never exceed 5, though the overall Thaumaturgy score may.
            </p>
            <p>
                If a character reaches a rating of 5 in her primary path and increases her Thaumaturgy score afterward, she may allocate her “free” path dot to a different path. 
                (Experience costs are covered on p. 124.)
            </p>
            <p>
                Each time the character invokes one of the powers of a Thaumaturgical path, the thaumaturge's playe must spend a blood point and make a Willpower roll against a 
                difficulty equal to the power's level +3. Only one success is required to invoke a path's effect — path levels, not successes, govern the power of blood magic.
                Failure on this roll indicates that the magic fails. A botch causes some kind of loss or catastrophic backfire, such as losing a Willpower point (or dot!), 
                spontaneous combustion, or accidentally letting a living statue run rampant. Thaumaturgy is an unforgiving art.
            </p>
            <p>
                This section will only cover The Path of Blood. For more information on paths, see p. 212 and 213. 
            </p>
        </>
    ),
    levels: thaumaturgyLevels,
    clans: [Tremere],
    icon: "T",
    image: {
        credit: "Eryk Szczygieł",
        link: "https://www.artstation.com/typhonart",
        img: Picture,
        pos: "30% 30%"
    }
}


export default discipline;