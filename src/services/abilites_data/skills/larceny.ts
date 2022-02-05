import { Ability, AbilitySections } from "../../../models/ability"

const ability: Ability = {
	name: "Larceny",
	section: AbilitySections.Skills,
	description: " This Skill entails familiarity with the tools and techniques for the sorts of physical manipulation typically associated with criminal activity. Picking locks, manual forgery, safecracking, simple hotwiring, various forms of breaking and entering, and even sleight-of-hand all fall under the auspices of Larceny. \nLarceny is useful not only for theft, but also for setting up “the unbeatable system” or deducing where a thief broke in. This skill does not confer any aptitude with advanced security or anti-crime technologies such as video surveillance or alarm systems — those are covered by the Technology Knowledge.",
	levels: [
		"You can pick a simple lock.",
		"You could run a shell game hustle on the corner.",
		"You can open a standard locked window from the outside.",
		"You can “retool” a passport or ID card.",
		"You could get into (or out of...) a multinational bank's central vault."
	],
	possessedBy: [ "Burglars, Security Consultants, Policemen, Car Thieves, Street Magicians"],
	specialties: ["Safecracking, Misdirection, Lockpicking, Hotwiring, Pickpocketing"],
	icon: "nf-oct-lock"
}

export default ability