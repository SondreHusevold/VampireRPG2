import { Attribute, AttributeSections } from "../../models/attribute";
import picture from './Perception.jpg';

const attribute: Attribute = {
	name: "Perception",
	section: AttributeSections.Mental,
	description: "Perception measures a character's ability to observe his environment. This may involve a conscious effort, such as searching an area, but it is more often intuitive, as the character's keen senses notice something out of the ordinary. Perception is a sensitivity to one's surroundings, and is seldom present in the cynical or jaded (who have seen it all before). \nPerception is used to determine whether or not a character understands a given situation or detects an environmental stimulus. It can warn a character of ambushes, distinguish a clue from a pile of refuse, or uncover any other hidden or overlookable detail, whether physical or otherwise.",
	levels: [
		"Perhaps you are absurdly selfabsorbed, perhaps merely an airhead. In any event, watch out for that car!",
		"The very subtle evades you, but you're aware of the bigger picture.",
		"You perceive moods, textures, and small changes in your environment.",
		"Almost nothing escapes your notice.",
		"You instantly observe things almost imperceptible to human senses."
	],
	specialties: ["Attentive", "Insightful", "Careful", "Discerning", "Tactical"],
	icon: "nf-fa-eye",
	image: {
		img: picture,
		credit: "Natasha Haiduk",
		link: "https://www.artstation.com/natahaiduk",
		pos: "30% 15%"
	}
}

export default attribute;