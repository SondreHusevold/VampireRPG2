import { Clan } from "../../../models/clan";
import logo from './logo.png';
import picture from './picture.jpg';

const clan: Clan = {
	name: "Ventrue",
	logo: "l",
	picture: {
		img: picture,
		credit: "Brian Matyas",
		link: "https://www.artstation.com/bmatyas"
	},
	description: " Throughout history, while the other Clans have skulked about their petty intrigues, the Ventrue have curried favor with Caesar, whispered into the ear of Charlemagne, bankrolled the Age of Exploration, and even swayed policy in the Holy See. Theirs is a legacy of rulership, from Ventrue fledglings starting their climb to the top to the mightiest elders whose influence spans the world. Long have they played kingmaker in the shadows in the mortal world, and long have they been the Clan of Kings among the Kindred. \nOther Clans, of course, find all this insufferably pompous at best, punishably tedious at worst. Someone has to lead, surely, but why does it always have to be some long-winded, self-aggrandizing Ventrue? The Blue Bloods try to bear the criticism of their lessers with a sense of noblesse oblige — ever heavy hangs that head that wears the crown — but even the most munificent of Kindred leaders occasionally succumbs to tyranny and bloody rage. \nTonight, the Ventrue are a synthesis of the modern and the ancient, often in stark contrast within the Clan and among one another. Theirs is money of old, from the vaults of Croesus, but their young manipulate stock markets and influence currencies. Elders may command armies or even whole governments, while neonates conjure their assets from a website or smartphone app. But for all their wealth, their distinguished history, and their status among the Damned, each and every Ventrue must still seek that one resource that makes Kindred society egalitarian: precious blood.",
	nickname: "Blue Bloods",
	appearance: " The Ventrue favor conservative clothing and reserved presentation, unless they're making a point about power or money. Ventrue Princes may well wear a circlet or carry a scepter as symbols of office, while young Blue Bloods display their own achievement via suits, ties, dresses, and accessories that are easily overlooked singularly but add up to a stunning total effect. If a Ventrue has so much as a hair out of place, it's because he spent all night running down the Society of Leopold and demanding the Sabbat menace retreat.",
	haven: " A Ventrue's haven displays both her great power (read: wealth) and distinguished tastes. Opulent, grandiose, even baroque — these may all apply to Ventrue havens. They shun the gaudy displays of other Kindred, and their style tends less to the avant-garde than it does to the classical and traditional. To the Blue Bloods, a well-maintained haven is an extension of oneself, and for someone to see it in less than flawless state implies weakness, distraction, or even madness.",
	background: " Anyone who has “made something of herself” may attract the attention of the Ventrue, who judge their childer based on their prominence and success even before they start to groom them for the Embrace. Socialites, moneyed family, corporate wunderkinds, military leaders, and even untested newcomers who show great promise are keenly valued among the Blue Bloods.",
	creation: " Ventrue usually have directorial or outgoing personality archetypes. Members of Clan Ventrue favor Social and Mental Attributes, but any Ability category can be primary, reflecting a personal avenue of expertise. Backgrounds go both wide and deep for the Ventrue, with almost every Blue Blood possessing some amount of Resources, Status, and Herd (particularly the latter, given the Clan weakness). Elders in particular cultivate enviable havens and sprawling Domains.",
	disciplines: [
		"Dominate",
		"Fortitude",
		"Presence"
	],
	weaknesses: " The Ventrue have rarified tastes, and they find only one specific type of mortal blood palatable and vital for them. When a player creates a Ventrue character, he should decide with the Storyteller what specific type of blood suits the character, and this choice is permanent. Blood of other types (even animals) simply offers the vampire no blood pool increase, no matter how much he consumes — he simply vomits it back up. This refined palate may be very narrow or very broad — say, the blood of younger sisters, or the blood of nude children. Vampiric blood is exempt from this restriction.",
	organization: " The Clan-wide organization of the Ventrue is localized and feudal, with various universally understood peerages, vassalages, oaths of fealty, and sworn boons taking the place of a rigid hierarchy. Many Ventrue style themselves as secret masters of their domains, consolidating power in longstanding networks and forming conspiracies. The Ventrue greatly value propriety and honor, and use many forms of address and respect — their Laws of Decorum are complex and rigid, and could fill several volumes. Almost every Ventrue worth his status can recite his lineage at least back to the elders, if not to the great Methuselahs.",
	quote: "There is no shame to bending the knee to one such as myself, so pay your fucking tribute before I lose my temper.",
	playerClan: true,
	stereotypesSects: [
		{
			sect: "Anarchs",
			opinion: "There is something admirable in what they do, yet how they do it is entirely puerile."
		},
		{
			sect: "Camarilla",
			opinion: "It is our greatest triumph, but also our greatest responsibility."
		},
		{
			sect: "Sabbat",
			opinion: "The inmates run that asylum."
		},
	],
	stereotypesClans: [
		{
			clan: "brujah",
			opinion: "Just admit you're beaten and this will become much more pleasant."
		},
		{
			clan: "caitiff",
			opinion: "They are mongrels, barely worthy of names. You might as well care about your furniture."
		},
		{
			clan: "gangrel",
			opinion: "Who would guess that Kindred so simple could be so groundlessly prideful?"
		},
		{
			clan: "malkavian",
			opinion: "When you find yourself making excuses for them, it is time for the purge to begin."
		},
		{
			clan: "nosferatu",
			opinion: "Surprisingly functional, should you be able to handle their odious personalities and overestimation of their own value."
		},
		{
			clan: "toreador",
			opinion: "For every king there is a queen, and there are a lot of queens among the ranks of the Rose Clan."
		},
		{
			clan: "tremere",
			opinion: "They can prove dauntless allies or treacherous enemies, often both within the same skin, so let them know who commands."
		},
		{
			clan: "ventrue",
			opinion: ""
		}
	]
}

export default clan;