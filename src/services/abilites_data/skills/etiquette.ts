import { Ability, AbilitySections } from "../../../models/ability"

const ability: Ability = {
	name: "Etiquette",
	section: AbilitySections.Skills,
	description: " You understand the nuances of proper behavior, in both mortal society and Kindred culture. In many cases, knowing how to broach a topic is as important as the discussion itself, and a person with poor etiquette will never have an opportunity to make herself heard because she doesn't know when or how to interject. This Skill is used during meetings, haggling, seduction, dancing, dinner etiquette, and all forms of diplomacy.",
	levels: [
		"You know when to keep your mouth shut.",
		"You've been to a black-tie event or two.",
		"You know your way around even obscure silverware.",
		"Her Majesty would consider you charming.",
		"If the right people came to dinner, you could end wars — or start them."
	],
	possessedBy: [ "Diplomats, Travelers, High Society, Executives, Kindred of Status"],
	specialties: ["At Elysium, Business, High Society, Sabbat Protocol"],
	icon: "nf-fae-high_heel"
}

export default ability