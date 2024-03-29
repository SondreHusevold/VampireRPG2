import { Attribute, AttributeSections } from "../../models/attribute";
import picture from './Manipulation.jpg';

const attribute: Attribute = {
	name: "Manipulation",
	section: AttributeSections.Social,
	description: "Manipulation measures a character's ability for selfexpression in the interests of getting others to share her outlook or follow her whims. In short, it's getting others to do what she wants. Manipulation comes into play when a character tries to influence or subtly guide another's behavior.\nManipulation is used to trick, bluff, fast-talk, and railroad other characters. Whether or not the characters in question actually like the manipulator is irrelevant (this is why Manipulation differs from Charisma). After all, a skilled motivator can even employ the talents of people who hate her. \nManipulation is a dangerous affair, though it is way many Kindred primarily affect the world around them. Failed attempts at manipulation often earn the ire of the would-be patsy. Botching a Manipulation roll may add a name to the character's list of enemies. \nPeople are manipulated every day, and typically ignore it. (“Would you run to the store for me?”) If the fact is brought to their attention, however, many people become quite defensive. Manipulation can be the most powerful tool in a Kindred's repertoire, but failure can be disastrous. Characters with high Manipulation ratings are often distrusted by those around them.",
	levels: [
		"A person of few (often ineffectual) words.",
		"You can fool some of the people some of the time, just like anybody else.",
		"You never pay full price.",
		"You could be a politician or cult leader.",
		"Of course I'll tell the Prince I was the one who tried to stake him!"
	],
	specialties: ["Persuasive", "Seductive", "Well-Reasoned", "Misdirection", "Conjurer of Facts"],
	icon: "nf-mdi-guy_fawkes_mask",
	image: {
		img: picture,
		credit: "VtM book",
		link: "",
		pos: "30% 15%"
	}
}

export default attribute;