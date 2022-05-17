import { Attribute, AttributeSections } from "../../models/attribute";
import picture from './Strength.jpg';

const attribute: Attribute = {
	name: "Strength",
	section: AttributeSections.Physical,
	description: "Strength is the raw, brute power of a character. It governs how much weight a character can lift, how much he can physically push, and how hard he can hit another character or object. \nThe Strength Trait is added to a character's damage dice pool when he hits his opponent in hand-to-hand combat. It is also used when a character wishes to break, lift, or carry something, as well as when a character tries to jump a distance.",
	levels: [
		"You can lift 40 lbs (about 20kgs).",
		"You can lift 100 lbs (close to 50 kgs).",
		"You can lift 250 lbs (a little over 100 kgs).",
		"You can lift 400 lbs (close to 200 kgs).",
		"You can lift 650 lbs (nearly 300 kgs) and crush skulls like grapes."
	],
	specialties: ["Never Lets Go", "Powerful Arms", "Reserves of Strength", "Vicious"],
	icon: "nf-mdi-dumbbell",
	image: {
		img: picture,
		credit: "Alexey Kruglov",
		link: "https://www.artstation.com/alexeykruglov",
		pos: "30% 15%"
	}
}

export default attribute;