import { Ability, AbilitySections } from "../../../models/ability"

const ability: Ability = {
	name: "Law",
	section: AbilitySections.Knowledges,
	description: " The Law Knowledge represents a knowledge of both legal statutes and proper procedures for enforcing them. Law can be useful for filing suits, avoiding lawsuits, or getting out of jail. What's more, the Kindred keep their own laws, and more than one vampire has saved his own unlife by deftly exploiting a loophole in one of the Traditions. \nThe Law Knowledge has any number of specialties, and a player may choose one for her character when she takes this Ability, representing both her field of experience and a general sense for how the legal system (especially in her locality) functions, though this is not mandatory.",
	levels: [
		" You've paid a traffic ticket and know whether to plead guilty, not guilty, or nolo contendere next time.",
		"You're either studying for or just passed the bar exam.",
		"You can make a living of the practice, and probably do.",
		"If you're not partner yet, you will be soon.",
		"You could find the loopholes in the Devil's contracts."
	],
	possessedBy: [ "Lawyers, Police, Judges, Detectives, Legislators"],
	specialties: ["Criminal, Suits, Courtroom Protocol, Contracts, Police Procedure, the Traditions, the Code of Milan"],
	icon: "nf-fa-balance_scale"
}

export default ability