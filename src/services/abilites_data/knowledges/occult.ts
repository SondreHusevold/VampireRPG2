import { Ability, AbilitySections } from "../../../models/ability"

const ability: Ability = {
	name: "Occult",
	section: AbilitySections.Knowledges,
	description: " You are knowledgeable in occult areas such as mysticism, curses, magic, folklore, and particularly vampire lore. Unlike most other Knowledges, Occult does not imply a command of hard facts. Much of what you know may well be rumor, myth, speculation, or hearsay. However, the secrets to be learned in this field are worth centuries of sifting legend from fact. \nHigh levels of Occult imply a deep understanding of vampire lore, as well as a good grounding in other aspects of the occult. At the very least, you can discern what is patently false.",
	levels: [
		"You've got a blog about the eerie and the disturbing.",
		"There seems to be some unsettling truth to some of the rumors you've heard.",
		"ou've heard a lot and actually seen a little for yourself.",
		"You can recognize blatantly false sources and make educated guesses about the rest.",
		"You know most of the basic truths about the hidden world."
	],
	possessedBy: [ "Occultists, The Superstitious, New Agers, Tremere"],
	specialties: ["Kindred Lore, Rituals, Infernalism, Witches, Noddist Lore"],
	icon: "nf-fa-magic"
}

export default ability