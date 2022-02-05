import { Ability, AbilitySections } from "../../../models/ability"

const ability: Ability = {
	name: "Medicine",
	section: AbilitySections.Knowledges,
	description: " You have an understanding of how the human body — and to a lesser extent the vampiric body — works. \nThis Ability covers knowledge of medicines, ailments, first-aid procedures, and diagnosis or treatment of disease. Medicine is of great use to those Kindred with an interest in repairing, damaging, or reworking the human body.",
	levels: [
		"You've taken a CPR course.",
		"Premed or paramedic",
		"General practitioner",
		"You can perform transplants.",
		"You are respected by the world's medical community as a pioneer."
	],
	possessedBy: [ "Med Students, Doctors, Lifeguards, Parents, Paramedics, Tzimisce"],
	specialties: ["Organ Transplants, Emergency Care, Poison Treatments, Pathology, Pharmaceuticals, the Kindred Condition"],
	icon: "nf-mdi-needle"
}

export default ability