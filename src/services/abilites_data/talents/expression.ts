import { Ability, AbilitySections } from "../../../models/ability"

const ability: Ability = {
	name: "Expression",
	section: AbilitySections.Talents,
	description: " This is your ability to get your point across clearly, whether through conversation, poetry, or even in 140 characters or fewer. Characters with high Expression can phrase their opinions or beliefs in a manner that cannot be ignored (even if their opinions are misinformed or worthless). They might also be talented actors, skilled at conveying moods or communicating emotion with every gesture. \nAdditionally, this Talent represents your ability for poetry, creative writing, or other literary art forms. For many elders, Expression is the subtle art of crafting a satirical epigram capable of socially crippling one's longtime rival. For younger Kindred, Expression may well be the key to convincing thirty stake-wielding Anarchs to converge on the Sheriff's private hunting ground with the right text message. You can choose a specialty in Expression, even at less than 4 dots.",
	levels: [
		"Your talent has matured past crude poetry on notebook paper.",
		"You could lead a college debate team.",
		"You could be a successful writer.",
		"Your work is Pulitzer material.",
		"Steve Jobs asks you for input on his next computer."
	],
	possessedBy: [ "Actors, Writers, Poets, Politicians, Journalists, Web Personalities, Rabble-Rousers"],
	specialties: ["Acting, Poetry, Fiction, Impromptu, Conversation, Social Media"],
	icon: "nf-fa-comment"
}

export default ability