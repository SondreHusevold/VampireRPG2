import { Attribute, AttributeSections } from "../../models/attribute";
import picture from './Appearance.jpg';

const attribute: Attribute = {
	name: "Appearance",
	section: AttributeSections.Social,
	description: " The Appearance Attribute is a measure of how well a character makes a first impression. This may be conventional “attractiveness,” but it can also be the effect of distinctive features, an exotic mien, an air of confidence, distinctive posture, a flair for dressing well — anything remarkable upon initial observation can contribute to a character's Appearance.\nIndeed, Appearance is the amalgamation of many descriptive personal characteristics. Appearance is subconscious and instinctual — it appeals to the lower levels of the psyche, so it shapes first impressions and the nature of memories thereafter. \nThis Trait is useful for getting potential vessels to heed your beckoning across a crowded dance floor. In situations in which first impressions are paramount, or that involve people who view Appearance as very important, a character may have no more dice in a Social dice pool than her Appearance rating. Thus, it is critically important to either look your best or get to know people before you start trying to convince them to firebomb the Justicar's haven.",
	levels: [
		"Your clothes stink, you turn people off right away, or you're just damned ugly.",
		"You don't stand out in a crowd, for better or for worse.",
		"Let me buy you a drink.",
		"People go out of their way to make your acquaintance.",
		"People never forget you."
	],
	specialties: ["Unconventional Looks", "Photogenic", "Fashion Sense", "Unforgettable Face", "Memorable Pose"],
	icon: "nf-weather-stars",
	image: {
		img: picture,
		credit: "Emanuel Mendez",
		link: "https://www.artstation.com/pemamendez",
		pos: "30% 0%"
	}
}

export default attribute;