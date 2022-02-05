import { Ability, AbilitySections } from "../../../models/ability"

const ability: Ability = {
	name: "Drive",
	section: AbilitySections.Skills,
	description: " You can drive a car, and maybe other vehicles as well. This Skill does not automatically entail familiarity with complicated vehicles such as tanks or 18-wheelers, and difficulties may vary depending on your experience with individual automobiles. After all, helming a station wagon doesn't prepare you for double-clutching a Maserati at 100 miles per hour.",
	levels: [
		"You know how to work an automatic transmission.",
		"You can drive a stick shift.",
		"Professional trucker",
		"NASCAR daredevil or tank pilot",
		"Whether it's a Fiat or a Ferrari, you can make it sing."
	],
	possessedBy: [ "Cabbies, Truckers, Race Car Drivers, Automotive Show Hosts, Rebels"],
	specialties: ["Off-Road, Motorcycles, High Speed, Heavy Traffic, Avoiding Traffic Cops"],
	icon: "nf-mdi-car_sports"
}

export default ability