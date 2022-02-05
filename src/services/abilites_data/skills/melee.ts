import { Ability, AbilitySections } from "../../../models/ability"

const ability: Ability = {
	name: "Melee",
	section: AbilitySections.Skills,
	description: " As the Kindred maxim runs, “Guns mean nothing to a lifeless heart”. A blade is often worth far more, as is the skill to use it properly. Melee covers your ability to use hand-to-hand weapons of all forms, from swords and clubs to esoteric martial-arts paraphernalia such as sai or nunchaku. And, of course, there is always the utility of the wooden stake....",
	levels: [
		"You know the right way to hold a knife.",
		"You may have been in the occasional street fight.",
		"You could make a college fencing team.",
		"You could keep order in the Prince's court.",
		"Your enemies would rather face a SWAT team than your blade."
	],
	possessedBy: [ "Assassins, Gang Members, Martial Artists, Police, Duelists"],
	specialties: ["Knives, Swords, Improvised Weaponry, Riposte, Disarms"],
	icon: "nf-mdi-sword"
}

export default ability