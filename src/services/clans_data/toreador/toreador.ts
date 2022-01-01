import { Clan } from "../../../models/clan";
import logo from './logo.png';
import picture from './picture.jpg';

const clan: Clan = {
	name: "Toreador",
	logo: logo,
	picture: {
		img: picture,
		credit: "Oshred",
		link: "https://twitter.com/oshredart"
	},
	description: " From the Toreador perspective, when the sun fades, darkness gives rise to an eternal and wondrous world. Everything is fraught with wonder and terror, low politics and sensual glories, the profound and the profane, and an undeniable undercurrent of the sanguinary. These Kindred are the Toreador, and they spend unlives ensconced in pleasure. \nOf course, for vampires of this disposition, it's easy to become jaded and bitter. More than the other Clans, Toreador often succumb to ennui, or fight the eventual boredom of unchanging immortality by playing at rivalries. An excess of stimulation turns them into slaves to the sensations they seek. The most debased Toreador can become true monsters, sinking to unimaginable levels of depravity in order to feel anything at all. \nThe Kindred of Clan Toreador often involve themselves greatly in the world of mortals. They have any number of reasons, whether enjoying proximity to the blush of life, cultivating veritable cults of doting followers, or influencing and following the trends that their own kind simultaneously mock and venerate. To hear the Toreador tell it, they are the Muses of a desperate mortal world, inspiring through their beauty or patronage. \nToreador culture is a mixture of sybarites, dilettantes, and visionaries. Some Toreador, with echoes of mortal passion, Embrace lovers or “project” progeny who seem to fly in the face of every Toreador custom. These either don't last long or rise to great prominence as subversives and individualists. Ideas, trends, and “the next great thing” spread through the Clan, and other Kindred often look to the Toreador to guide them. The Degenerates know this, and many become Harpies, Princes, and other key figures in vampiric society.",
	nickname: "Degenerates",
	appearance: " Almost to the last, they are attractive in some way, whether the traditional beauty of a runway model or the dangerous allure of something more predatory. The Degenerates augment their physical beauty with a sense of personal style, which may take the form of expensive couture, avant-garde street wear, or classical fashions designed to emphasize their appealing qualities. This isn't to say that ugly Toreador don't exist. Indeed, those gifted with less physical beauty often go that much further with their choice of accoutrements.",
	haven: " The Degenerates spare no expense in appointing their havens in luxury, often with many original works of art. It is a point of pride among Toreador to have an unconventional (and thus memorable) haven with modern comforts; thus, many have striking lofts and penthouses, while the bolder among them renovate or repurpose everything from abandoned aquariums or deconsecrated churches to rooftop gardens or converted warehouse-galleries in fashion-forward neighborhoods. \nShare a communal haven? How déclassé.",
	background: " Many Toreador hail from high-society or “bohemian” backgrounds. Indeed, many are themselves artists or influential among local art scenes or other subcultures. Actors, singers, musicians, sculptors, poets, playwrights, authors, and creative folk of any stripe may well find a home in the Clan, as do those who serve as patrons to (or travel in the entourages of) those artistic types.",
	creation: " Social attributes are almost always primary, with an even split among Talents, Skills, and Knowledges depending on how the Toreador distinguishes herself. Toreador also love to cultivate Backgrounds. Allies, Contacts, Resources, Domain, Haven, Mentors, Resources, Retainers — all of these have great value among Toreador. \nWise Toreador may choose to develop their Virtues, Humanity, Path, or Willpower, because with an unlife of degeneracy, they must frequently attend to the ugly business of bringing the Beast to heel.",
	disciplines: [
		"Auspex",
		"Celerity",
		"Presence"
	],
	weaknesses: " When a Toreador experiences something truly remarkable — a person, an objet d'art, a lovely sunrise — the player must make a Self-Control or Instincts roll (difficulty 6). Failure means that the Kindred finds herself enthralled by the experience. The dazzled Toreador cannot act for the duration of the scene aside from commenting on or continuing their involvement with whatever has captured their attention. \nIf the experience no longer affects her (whether by moving, being destroyed, or whatever is appropriate to the situation), the captivation ends. Enraptured Toreador may not even defend themselves if attacked, though being wounded allows them to make another Self-Control or Instincts roll.",
	organization: " Clan Toreador is cliquish and parochial in its local domains, but very rarely on a level that affects Clan-wide custom. Certain Toreador (and a few outside the Clan) sometimes use the terms “artiste” and “poseur” when describing individual Toreador, often derisively, to describe whether the Degenerate in question is one who is seen as creative or simply a follower of established trends, but these are certainly informal distinctions.",
	quote: "Long after you die, I will still be young, beautiful, and adored by everyone whose life I touch.",
	playerClan: true,
	stereotypesSects: [
		{
			sect: "Anarchs",
			opinion: "Only a petty ruler acknowledges no greater purpose than himself."
		},
		{
			sect: "Camarilla",
			opinion: "This house needs a good cleaning."
		},
		{
			sect: "Sabbat",
			opinion: "Such marvelous passion wasted on such craven dementia."
		},
	],
	stereotypesClans: [
		{
			clan: "brujah",
			opinion: "A fire may be stoked, but if left unattended, it may destroy what it once warmed."
		},
		{
			clan: "caitiff",
			opinion: "The worst sort of fish is the one that feeds from the bottom."
		},
		{
			clan: "gangrel",
			opinion: "Beauty and the Beast, only without the complication of Beauty. Pity them."
		},
		{
			clan: "malkavian",
			opinion: "The tedium of it all."
		},
		{
			clan: "nosferatu",
			opinion: "They make a strong case for the Mark of Caine being a sickness."
		},
		{
			clan: "toreador",
			opinion: ""
		},
		{
			clan: "tremere",
			opinion: "Aren't they supposed to turn back into pumpkins at midnight?"
		},
		{
			clan: "ventrue",
			opinion: "Why are older brothers always such corpulent bullies?"
		}
	]
}

export default clan;