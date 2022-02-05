import { Ability, AbilitySections } from "../../../models/ability"

const ability: Ability = {
	name: "Firearms",
	section: AbilitySections.Skills,
	description: " Executing a mortal with a sword starts investigations. Clawing someone to ribbons tears the edges of the Masquerade. So Cainites adapt, and many have devoted their energies to learning how to kill with guns. This Skill represents familiarity with a range of firearms, from holdout pistols to heavy machine guns. \nFurther, someone skilled in Firearms can clean, repair, recognize, and accurately fire most forms of small arms. This Skill is also used to unjam guns (Wits + Firearms).",
	levels: [
		"You had a BB gun as a kid.",
		"You while away the occasional hour at the gun club.",
		"You've survived a firefight or two.",
		"You could pick off people for a living.",
		"You've been practicing since the debut of the Winchester."
	],
	possessedBy: [ "Anarchs, Neonates, Policemen, Military Personnel, Survivalists, Hunters"],
	specialties: ["Fast-Draw, Gunsmithing, Pistols, Marksmanship, Revolvers, Shotguns"],
	icon: "nf-mdi-pistol"
}

export default ability