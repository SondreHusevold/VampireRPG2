import { Ability, AbilitySections } from "../../../models/ability"

const ability: Ability = {	
	name: "Investigation",
	section: AbilitySections.Knowledges,
	description: " You've learned to notice details others might overlook, and might make an admirable detective. This Knowledge represents not only a good eye for detail, but also an ability to do research and follow leads. Such research may include Internet searches or more specific research techniques like hitting the law books and periodicals archives at the library.",
	levels: [
		"You can parse a broad Web search for clues.",
		"Police officer",
		"Private detective",
		"Federal agent",
		"Sherlock Holmes"
	],
	possessedBy: [ "Detectives, Mystery Buffs, Policemen, Stalkers"],
	specialties: ["Forensics, Shadowing, Search, Discolorations, Database Research"],
	icon: "nf-fa-search"
}

export default ability