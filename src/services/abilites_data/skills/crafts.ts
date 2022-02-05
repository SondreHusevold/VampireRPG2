import { Ability, AbilitySections } from "../../../models/ability"

const ability: Ability = {
	name: "Crafts",
	section: AbilitySections.Skills,
	description: " This Skill covers your ability to make or fix things with your hands. Crafts allows you to work in fields such as carpentry, leatherworking, weaving, or even mechanical expertise such as car repair. You can even create lasting works of art with this Skill, depending on the number of successes you achieve. You must always choose a specialization in Crafts, even though you retain some skill in multiple fields.",
	levels: [
		"High school wood shop",
		"You're starting to develop your own style.",
		"You could start your own shop.",
		"You wrote instruction manuals on your field of specialization.",
		"Your craftsmanship and insight is virtually without peer."
	],
	possessedBy: [ "Mechanics, Artisans, Artists, Designers, Inventors, Back-to-the-Land Types"],
	specialties: ["Pottery, Sewing, Home Repair, Carpentry, Appraisal, Carburetors"],
	icon: "nf-mdi-palette"
}

export default ability