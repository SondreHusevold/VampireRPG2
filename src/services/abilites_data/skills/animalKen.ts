import { Ability, AbilitySections } from "../../../models/ability"

const ability: Ability = {
	name: "Animal Ken",
	section: AbilitySections.Skills,
	description: " You can understand animals' behavior patterns. This Skill allows you to predict how an animal might react in a given situation, train a domesticated creature, or even try to calm or enrage animals.",
	levels: [
		"You can get a domesticated horse to let you pet it.",
		"You can housebreak a puppy.",
		"You could train a seeingeye dog.",
		"Circus trainer",
		"You can tame wild beasts without benefit of supernatural powers."
	],
	possessedBy: [ "Farmers, Animal Trainers, Zookeepers, Veterinarians, Pet Owners, Domitors"],
	specialties: ["Dogs, Attack Training, Big Cats, Horses, Farm Animals, Falconry"],
	icon: "nf-mdi-cat"
}

export default ability