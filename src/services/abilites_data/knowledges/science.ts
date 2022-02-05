import { Ability, AbilitySections } from "../../../models/ability"

const ability: Ability = {	
	name: "Science",
	section: AbilitySections.Knowledges,
	description: " You have at least a basic understanding of most of the physical sciences, such as chemistry, biology, physics, and geology. This Knowledge can be put to all forms of practical use. In most cases, a player should select a specialty to reflect a focus for her character's scientific studies, but this isn't strictly necessary.",
	levels: [
		"You know most of the high-school basics.",
		"You're familiar with the major theories.",
		"You could teach high-school science.",
		"You're fully capable of advancing the knowledge in your field.",
		"Your Nobel Prize is waiting for you."
	],
	possessedBy: [ "Scientists, Students, Researchers, Teachers, Engineers, Technicians, Pilots"],
	specialties: ["Chemistry, Biology, Geology, Physics, Astronomy"],
	icon: "nf-mdi-flask_outline"
}

export default ability