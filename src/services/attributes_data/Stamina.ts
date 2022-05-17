import { Attribute, AttributeSections } from "../../models/attribute";
import picture from './Stamina.jpg';

const attribute: Attribute = {
	name: "Stamina",
	section: AttributeSections.Physical,
	description: "The Stamina Trait reflects a character's health, toughness, and resilience. It indicates how long a character can exert herself and how much punishment she can withstand before suffering physical trauma.\nStamina also includes a bit of psychic fortitude, indicating a character's grit and tenacity.",
	levels: [
		"You bruise in a stiff wind.",
		"You are moderately healthy and can take a punch or two.",
		"You are in good shape and rarely fall ill.",
		"You can run — and perhaps win — any marathon you choose.",
		"Your constitution is truly herculean."
	],
	specialties: ["Tireless", "Determined", "Tough as Nails", "Vigorous"],
	icon: "nf-fa-heart",
	image: {
		img: picture,
		credit: "VtM book",
		link: "",
		pos: "30% 15%"
	}
}

export default attribute;