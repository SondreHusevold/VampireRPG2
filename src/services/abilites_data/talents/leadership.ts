import { Ability, AbilitySections } from "../../../models/ability"

const ability: Ability = {
	name: "Leadership",
	section: AbilitySections.Talents,
	description: " You are an example to others and can inspire them to do what you want. Leadership has less to do with manipulating people's desires than it does with presenting yourself as the sort of person they want to follow. Anyone can lead a group into some sort of conflict; a good leader can get them back out intact. This Talent is usually paired with Charisma rather than Manipulation.",
	levels: [
		"Captain of your Little League team",
		"Student body president",
		"An effective CEO",
		"Presidential material",
		"You could be beloved dictator of a nation."
	],
	possessedBy: [ "Politicians, Princes, Managers, Executives, Military Officers, Police" ],
	specialties: ["Oratory, Compelling, Friendly, Open, Noble, Military, Multimedia"],
	icon: "nf-mdi-crown"
}

export default ability