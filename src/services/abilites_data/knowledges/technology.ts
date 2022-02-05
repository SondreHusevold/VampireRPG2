import { Ability, AbilitySections } from "../../../models/ability"

const ability: Ability = {
	name: "Technology",
	section: AbilitySections.Knowledges,
	description: " The Technology Knowledge represents a broad acumen with electronics, computer hardware, and devices more elaborate than “machines,” which fall under the Crafts Skill. If it has a processor, a transistor, or an integrated circuit — if it's electronic rather than electrical — manipulating it uses the Technology Knowledge. \nThis is the wide-ranging Ability used to build one's own computer, install (or subvert) a security system, repair a mobile phone, or kitbash a shortwave radio. You must always choose a specialization in Technology, even though you possess some skill in multiple fields.",
	levels: [
		"You can perform simple modifications or repairs.",
		"You could make your living in assembly or repair.",
		"You can design new technologies from a set of objective requirements.",
		"For you, it's not, “Can this be done?” but “How can this be done?”",
		"A visionary in the field; you shape how people interact with their world through devices."
	],
	possessedBy: [ "Engineers, Scientists, Defense Contractors, the Cable Guy"],
	specialties: ["Telecom, Computers, Security, Communications, Improvised Solutions, Industrial Espionage"],
	icon: "nf-fa-cogs"
}

export default ability