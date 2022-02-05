import { Ability, AbilitySections } from "../../../models/ability"

const ability: Ability = {
	name: "Empathy",
	section: AbilitySections.Talents,
	description: " You understand the emotions of others, and can sympathize with, feign sympathy for, or play on such emotions as you see fit. You are adept at discerning motive, and might be able to discern when someone's lying to you. However, you may be so in tune with other people's feelings that your own emotions are affected.",
	levels: [
		"You lend the occasional shoulder to cry on.",
		"You can sometimes literally feel someone else's suffering.",
		"You have a keen insight into other people's motivations.",
		"It's almost impossible to lie to you.",
		"The human soul conceals no mysteries from you."
	],
	possessedBy: [ "Social Workers, Parents, Actors, Psychologists, Detectives, Seducers, Mediums, Best Friends" ],
	specialties: ["Emotions, Insight, Motives, Gaining Trust"],
	icon: "nf-mdi-human"
}

export default ability