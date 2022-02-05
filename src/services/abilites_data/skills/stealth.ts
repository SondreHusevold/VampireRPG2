import { Ability, AbilitySections } from "../../../models/ability"

const ability: Ability = {
	name: "Stealth",
	section: AbilitySections.Skills,
	description: " This Skill is the ability to avoid being detected, whether you're hiding or moving at the time. \nStealth is often tested against someone else's Perception + Alertness. This Ability is, for obvious reasons, highly useful in stalking prey. In many cases, Stealth is also used to conceal items, whether on one's person or somewhere in the environment.",
	levels: [
		"You can hide in a darkened room.",
		"You can shadow someone from streetlight to streetlight.",
		"You have little difficulty finding prey from evening to evening.",
		"You can move quietly over dry leaves.",
		"Nosferatu elder"
	],
	possessedBy: [ "Burglars, Assassins, Kindred, Spies, Reporters, Commandos"],
	specialties: ["Hiding, Silent Movement, Shadowing, Crowds"],
	icon: "nf-mdi-ninja"
}

export default ability