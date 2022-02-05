import { Ability, AbilitySections } from "../../../models/ability"

const ability: Ability = {
	name: "Performance",
	section: AbilitySections.Skills,
	description: " The Performance Skill governs your ability to perform artistic endeavors such as singing, dancing, acting, or playing a musical instrument. You are almost certainly specialized in one field, although true virtuosos may be talented in many forms of performance. \nThis Skill represents not only technical know-how, but the ability to work an audience and enrapture them with your show. As with Crafts, you must choose a specialty, even though this Skill also imparts a general sense for watching and responding to your audience's mood regardless of medium.",
	levels: [
		"You could sing in the church choir.",
		"Your Internet videos have over a hundred thousand views.",
		"You almost always have a gig booked.",
		"You have the talent to be a national sensation.",
		"You are a virtuoso without peer."
	],
	possessedBy: [ "Musicians, College Students, Actors, Ballerinas, Mimes"],
	specialties: ["Dancing, Singing, Rock and Roll, Acting, Guitar Solos, Drunken Karaoke"],
	icon: "nf-mdi-guitar_acoustic"
}

export default ability