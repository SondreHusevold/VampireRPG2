import { Ability, AbilitySections } from "../../../models/ability"

const ability: Ability = {
	name: "Subterfuge",
	section: AbilitySections.Talents,
	description: " You know how to conceal your own motives and project what you wish. Furthermore, if you can root out other people's motives, you can then use those motives against them. This Talent defines your talent for intrigue, secrets, and double-dealing. Mastery of Subterfuge can make you the ultimate seducer or a brilliant spy.",
	levels: [
		"You tell the occasional white lie.",
		"Vampire",
		"Criminal lawyer",
		"Deep-cover agent",
		"You're the very last person anyone would suspect."
	],
	possessedBy: [ "Politicians, Lawyers, Vampires, Teenagers, Con Men, Pick-up Artists" ],
	specialties: ["Seduction, Impeccable Lies, Feigning Mortality, the Long Con"],
	icon: "nf-fa-user_secret"
}

export default ability