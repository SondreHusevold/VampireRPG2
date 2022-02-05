import { Ability, AbilitySections } from "../../../models/ability"

const ability: Ability = {
	name: "Politics",
	section: AbilitySections.Knowledges,
	description: " You are familiar with the politics of the moment, including the people in charge and how they got there. This Knowledge can aid you in dealing with or influencing mortal politicians, or even offer some insight into the local Cainite power structure. \nThe Politics Knowledge includes the ability to practically navigate various bureaucracies, as it assumes that certain organizational structures and relationship currencies are universal.",
	levels: [
		"Activist; you can pay a speeding ticket online.",
		"Political science major; you know how to file a request for information.",
		" Campaign manager or talkradio host; the clerk will help you navigate the forms you need to complete and tell you who needs the duplicates.",
		"Senator; “We're not supposed to show this to anyone without press credentials, so don't quote me.”",
		"You could choose the next President of the United States. “Sure, here are the keys to the file morgue. Turn off the light when you leave.”"
	],
	possessedBy: [ "Activists, Politicians, Lawyers, vampires of all sorts"],
	specialties: ["City, State, Federal, Bureaucracy, Dogma, Radical, Camarilla"],
	icon: "nf-fa-bullhorn"
}

export default ability