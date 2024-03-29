import { Ability, AbilitySections } from "../../../models/ability"

const ability: Ability = {
	name: "Academics",
	section: AbilitySections.Knowledges,
	description: " This catchall Knowledge covers the character's erudition in the humanities: literature, history, art, philosophy, and other “liberal” arts and sciences. \nA character with dots in Academics is generally well rounded in these fields, and at high levels may be considered an expert in one or more areas of study. Not only can this Knowledge impress at salons and other Elysium functions, but it can also offer valuable clues to certain past — and future — movements in the Jyhad. If you like, you can choose a specialty for Academics even at less than 4 dots.",
	levels: [
		"You're aware that 1066 isn't a Beverly Hills area code.",
		"You can quote from the classics, identify major cultural movements, and expound on the difference between Ming and Moghul.",
		"You could get a paper published in a scholarly journal.",
		"Professor emeritus",
		"Scholars worldwide acknowledge you as one of the foremost experts of your time."
	],
	possessedBy: [ "Professors, Literati, Topical Bloggers, Elders" ],
	specialties: ["Poststructuralism, Impressionist Painting, Imperial Rome, Color Theory, Linguistics" ],
	icon: "nf-mdi-school"
}

export default ability