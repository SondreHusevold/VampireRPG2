import { Ability, AbilitySections } from "../../../models/ability"

const ability: Ability = {
	name: "Streetwise",
	section: AbilitySections.Talents,
	description: " The streets can provide a lot of information or money to those who know the language. Streetwise allows you to blend in unobtrusively with the local scene, pick up gossip, understand slang, or even dabble in criminal doings.",
	levels: [
		"You know who's holding.",
		"You're accorded respect on the street.",
		"You could head your own gang.",
		"You have little to fear in even the worst neighborhoods.",
		"If you haven't heard it, it hasn't been said."
	],
	possessedBy: [ "Criminals, Homeless People, Reporters, Clubgoers, Savvy Detectives, Neonates"],
	specialties: ["Fencing, Illegal Drugs, Illegal Weapons, Free Wifi, Gangs, Being On the Guest List, Local Slang"],
	icon: "nf-mdi-city"
}

export default ability