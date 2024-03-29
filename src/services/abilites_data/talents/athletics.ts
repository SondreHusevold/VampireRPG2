import { Ability, AbilitySections } from "../../../models/ability"

const ability: Ability = {
	name: "Athletics",
	section: AbilitySections.Talents,
	description: " This Talent represents your basic athletic ability, as well as any training you might have had in sports or other rigorous activities. Athletics concerns all forms of running, jumping, throwing, swimming, sports, and the like. However, Athletics doesn't cover basic motor actions such as lifting weights, nor does it govern athletic feats covered by another Ability (such as Melee).",
	levels: [
		"You had an active childhood.",
		"High-school athlete",
		"Talented lifelong amateur",
		"Professional athlete",
		"Olympic medalist"
	],
	possessedBy: [ "Athletes, Hobbyists, Park Rangers, Jocks, Kids"],
	specialties: ["Swimming, Rock Climbing, Acrobatics, Dancing, Parkour, specific sports"],
	icon: "nf-fa-heartbeat"
}

export default ability