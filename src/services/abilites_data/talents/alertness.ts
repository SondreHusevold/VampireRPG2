import { Ability, AbilitySections } from "../../../models/ability"

const ability: Ability = {
	name: "Alertness",
	section: AbilitySections.Talents,
	description: " This is your basic knack for noticing things that go on around you, even when you're not actively looking for them. Alertness describes the attention you pay to the outside world, whether otherwise occupied or not. This Talent is typically paired with Perception, and is best used when sensing physical stimuli (as opposed to moods or clues).",
	levels: [
		"You're no mindless drone.",
		"Habitual eavesdropper",
		"You keep a sharp eye on your surroundings.",
		"Whether from paranoia or good sense, you are rarely caught off-guard.",
		"Your senses are on par with those of a wild animal."
	],
	possessedBy: [ "Hunters, Bodyguards, Security Personnel, Journalists, Burglars"],
	specialties: ["Noises, Eavesdropping, Fine Details, Hidden Weapons, Crowds, Forests, Animals"],
	icon: "nf-mdi-ear_hearing"
}

export default ability