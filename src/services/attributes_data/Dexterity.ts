import { Attribute, AttributeSections } from "../../models/attribute";
import picture from './Dexterity.jpg';

const attribute: Attribute = {
	name: "Dexterity",
	section: AttributeSections.Physical,
	description: "The Dexterity Attribute measures a character's general physical prowess. It encompasses the character's speed, agility, and overall quickness, as well as indicating the character's ability to manipulate objects with control and precision.\nAlso included under Dexterity's heading are hand-eye coordination, reflexes, and bodily grace.",
	levels: [
		"You are clumsy and awkward. Put that gun down before you hurt yourself.",
		"You're no clod, but you're no ballerina, either.",
		"You possess some degree of athletic potential.",
		"You could be an acrobat if you wished.",
		"Your movements are liquid and hypnotic — almost superhuman."
	],
	specialties: ["Precise", "Swift", "Feline Grace", "Lightning Reflexes"],
	icon: "nf-mdi-run_fast",
	image: picture
}

export default attribute;