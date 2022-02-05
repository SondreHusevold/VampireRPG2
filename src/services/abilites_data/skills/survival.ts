import { Ability, AbilitySections } from "../../../models/ability"

const ability: Ability = {
	name: "Survival",
	section: AbilitySections.Skills,
	description: " Although vampires have little to fear from starvation and exposure, the wilderness can still be dangerous to a Cainite. This Skill allows you to find shelter, navigate your way to civilization, track prey, establish a makeshift haven, and possibly even avoid supernatural threats like werewolves that also prowl the World of Darkness. \nNote that Survival need not be used only in areas considered “wilderness.” There's plenty of Survival that goes into getting by in various parts of modern cities.",
	levels: [
		"You can survive a night spent outside.",
		"You've “roughed it” on a regular basis.",
		"You can separate poison or spoilage from edible forage.",
		"You could live for months in the challenging environment of your choice.",
		"You could get dropped naked into the Andes and do all right for yourself."
	],
	possessedBy: [ "Scouts, Soldiers, Outdoors Enthusiasts, Survivalists, Hunters"],
	specialties: ["Tracking, Woodlands, Jungle, Street Life, Hunting, Urban Exploration"],
	icon: "nf-weather-fire"
}

export default ability