import { Ability, AbilitySections } from "../../../models/ability"

const ability: Ability = {
	name: "Intimidation",
	section: AbilitySections.Talents,
	description: " Intimidation takes many forms, from outright threats and physical violence to mere force of personality. It needn't be course or callous, and a well-placed intimidating word under the right circumstances might well be called “diplomacy” in certain circles. You know the right method for each occasion, and can be very... persuasive.",
	levels: [
		"Shady teenager",
		"Skinhead thug",
		"Drill sergeant",
		"Your air of authority cows casual passersby.",
		"You can frighten off vicious animals."
	],
	possessedBy: [ "Bullies, Military Officers, Bouncers, Gangsters, Sabbat"],
	specialties: ["Veiled Threats, Pulling Rank, Physical Coercion, Blackmail, Internet"],
	icon: "nf-mdi-comment_alert"
}

export default ability