import { Ability, AbilitySections } from "../../../models/ability"

const ability: Ability = {
	name: "Computer",
	section: AbilitySections.Knowledges,
	description: " This Knowledge represents the ability to operate and program computers, including mobile devices. Most Computer use also imparts a degree of Internet awareness (if not savvy).",
	levels: [
		"You can navigate touchscreen and traditional point-and-click GUIs.",
		"You know your way around various applications and the Internet.",
		"You know what to do with a text command prompt.",
		"You can make a very comfortable living as a consultant.",
		"You have all the SDKs and comprehend data structures for a stunning variety of programming languages."
	],
	possessedBy: [ "Hackers, Office Workers, Programmers, Data Processors, Students"],
	specialties: ["Computer Languages, Internet, Database Administration, HCI, Viruses, specific devices and programs"],
	icon: "nf-fa-laptop"
}

export default ability