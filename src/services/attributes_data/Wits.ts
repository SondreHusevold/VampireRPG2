import { Attribute, AttributeSections } from "../../models/attribute";
import picture from './Wits.jpg';

const attribute: Attribute = {
	name: "Wits",
	section: AttributeSections.Mental,
	description: "The Wits Trait measures the character's ability to think on her feet and react quickly to a certain situation. It also reflects a character's general cleverness. Characters with low Wits ratings are thick and mentally lethargic, or maybe gullible and unsophisticated. \nBy contrast, characters with high Wits Traits almost always have a plan immediately and adapt to their surroundings with striking expedience. Characters with high Wits also manage to keep their cool in stressful situations.",
	levels: [
		"Pull my finger.",
		"You know when to bet or fold in poker.",
		"You are seldom surprised or left speechless.",
		"You're one of the people who make others think, 'Ooh, I should have said...' the next day.",
		"You think and respond almost more quickly than you can act."
	],
	specialties: ["Getting the Jump on Others", "Witty Bon Mots", "Changes in Strategy", "Ambushes"],
	icon: "nf-mdi-lightbulb_on_outline",
	image: {
		img: picture,
		credit: "Hetza",
		creditLink: "https://www.pixiv.net/en/users/46899"
	}
}

export default attribute;