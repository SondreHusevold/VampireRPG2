import { Ability, AbilitySections } from "../../../models/ability"

const ability: Ability = {
	name: "Brawl",
	section: AbilitySections.Talents,
	description: " The Brawl Talent represents how well you fight in tooth-and-nail situations. This Talent represents skill in unarmed combat, whether from formal martial arts training or simply from plenty of experience. Effective brawlers are coordinated, resistant to pain, quick, strong, and mean. The willingness to do whatever it takes to hurt your opponent wins plenty of fights.",
	levels: [
		"You were picked on as a kid.",
		"You've participated in the occasional barroom tussle.",
		" You've fought regularly and routinely, and generally walked away in better shape than your opponents.",
		"You could be a serious contender on the MMA circuit.",
		"Somewhere on the Internet, there's a video of you taking down three men in four seconds."
	],
	possessedBy: [ "Military, Police, Roughnecks, Thugs"],
	specialties: ["Dirty Fighting, Strikes, Throws, Submission Holds, specific martial arts or combat styles"],
	icon: "nf-fa-hand_rock_o"
}

export default ability