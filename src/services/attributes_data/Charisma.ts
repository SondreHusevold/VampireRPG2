import { Attribute } from "../../models/attribute";

const attribute: Attribute = {
	name: "Charisma",
	description: "Charisma is a character's ability to entice and please others through her personality. Charisma comes into question when a character tries to win another character's sympathies or encourage others to trust her. Charisma reflects the power of a character's charm and influence. It governs a character's ability to convince others to see her point of view. This Attribute doesn't necessarily indicate how the character is charismatic, whether she's a silver-tongued charmer or a grinning bully. (These should come across through roleplaying and specialties.)",
	levels: [
		"There's something a little sketchy about you.",
		"You are generally likable and have several friends.",
		"People trust you implicitly.",
		"You have significant personal magnetism.",
		"Entire cultures could follow your lead."
	],
	specialties: ["Graceful", "Smooth Talker", "Forceful", "Urbane", "Witty", "Eloquent", "Hustler"]
}

export default attribute;