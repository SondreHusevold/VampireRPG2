import { Attribute, AttributeSections } from "../../models/attribute";
import picture from './Intelligence.jpg';

const attribute: Attribute = {
	name: "Intelligence",
	section: AttributeSections.Mental,
	description: "The Intelligence Attribute refers to a character's grasp of facts and knowledge. It also governs a character's ability to reason, solve problems, and evaluate situations. Intelligence also includes critical thinking and flexibility of thought. \nIntelligence does not include savvy, wisdom, or common sense, as those are properties of the character's personality, not Traits. Even the smartest character may be too foolish to realize the thugs who want to “borrow” her car keys are up to no good. \nCharacters with low Intelligence aren't necessarily stupid (though they might be); they are just uneducated or simple thinkers. Likewise, characters with high Intelligence aren't all Einsteins; they may be better at rote memorization or have particularly keen judgment.",
	levels: [
		"Not the sharpest knife in the drawer.",
		"Smart enough to realize you're normal.",
		"More enlightened than the masses.",
		"You're not just bright, you're downright brilliant.",
		"Certified genius."
	],
	specialties: ["Book Knowledge", "Creative", "Analytical", "Problem Solver", "Subject Authority"],
	icon: "nf-mdi-book_open_page_variant",
	image: {
		img: picture,
		credit: "Nocturnal Ghost",
		creditLink: "https://www.reddit.com/r/vtmb/comments/sbi8ay/planning_on_doing_an_illustration_series_of_all/"
	}
}

export default attribute;
