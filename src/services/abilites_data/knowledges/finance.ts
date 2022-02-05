import { Ability, AbilitySections } from "../../../models/ability"

const ability: Ability = {
	name: "Finance",
	section: AbilitySections.Knowledges,
	description: " You know the ins and outs of commerce, from evaluating an item's relative worth to keeping up with currency exchange rates. This Knowledge can be invaluable when brokering items, running numbers, or playing the stock market. Sufficiently high levels in Finance allow you to raise your standards of living to a very comfortable level.",
	levels: [
		"You've taken a few business classes.",
		"You have some practical experience and can keep your books fairly neat.",
		"You'd make a fine stockbroker.",
		"Corporations follow your financial lead.",
		"You could turn a $20 bill into a fortune."
	],
	possessedBy: [ "Executives, Upper Class, Stockbrokers, Accountants, Fences, Drug Dealers, Smugglers"],
	specialties: ["Stock Market, Laundering, Appraisal, Foreign Currencies, Accounting, Fencing, Corporations, Federal Bailouts"],
	icon: "nf-fa-line_chart"
}

export default ability