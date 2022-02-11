import { Clan } from "../../../models/clan";
import logo from './logo.png';
import picture from './picture.jpg';

const clan: Clan = 
{
	name: "Brujah",
	logo: "G",
	picture: {
		img: picture,
		credit: "Oshred",
		link: "https://twitter.com/oshredart"
	},
	description: "The legacy of the Brujah is one of halcyon greatness marred by their own fiery natures. Theirs was the glory of ancient Carthage, but Ventrue treachery in ancient Rome brought the dream to an end. Since then, the Brujah have borne a grudge. Tonight, the Brujah are rebels and provocateurs, bat-swinging hooligans and agents of change in a society long crippled by stasis. \nAs rebels, it’s in their nature to challenge the status quo though sometimes, without adequate opposition, they embody the status quo themselves. It works out fine, because there’s always a hot-blooded Brujah waiting in the wings to bring down an uppity Clanmate grown too comfortable in the role of rebel-turned-dictator. More so than any other Clan, the Brujah still feel the flames of the passions that once inspired them as mortals. \nClan Brujah loves a cause and is quick to act on a stirring speech, accusation of injustice, or a call to arms. This connection to passion can be a blessing, but inspiration can also yield to the madness and hunger of the Beast. No wise Prince turns his back on the Brujah, and rare is the Brujah who would allow herself to be manipulated or pandered to. A Brujah is her own master, first and foremost, and those who would bring her to heel face a terrible task. A Brujah who thinks she’s getting the short end of the stick will tear an enemy to ribbons first and maybe remember to ask questions later, no matter if he’s a Primogen or a mortal authority. \nSome Kindred historians claim that the Brujah have parlayed their ancient betrayal into a role as agitators against the very order that they help support. Others claim the Brujah have long since submitted to the will of that same order, being little more than loyal opposition rendered impotent. Most Brujah don’t care either way, as long as someone needs a good ass-kicking and they can be the ones to deliver it.",
	nickname: "Rabble",
	appearance: "Many Brujah affect styles and mannerisms that reflect an attitude of rebellion. Multicolored hair, shaven heads, spikes, rivets, fetish gear, and t-shirts with bold slogans might appeal to a Brujah. \nWhile not every Brujah wears the “uniform,” the Rabble often enjoy adorning themselves in outfits intended to provoke.",
	haven: "Brujah may feel kinship to a city, but they rarely develop such ties to individual locations. Thus, at any given time, a Brujah probably has a half-dozen or more hideouts, safehouses, and flats available. These are often shabby and ill-kept until the Brujah needs them. \nBrujah havens might also have mortals who follow the Brujah’s ideology or his cult of personality. This works out fine: It never hurts to have a spare vessel in an emergency.",
	background: "As creatures of passion, Brujah often Embrace without really thinking much about it, and their childer tend to be a disparate lot. \nSometimes, the Rabble Embrace those who share a similar outlook or enthusiasm for a cause as the prospective sire. Other times, they inflict the Embrace on those of opposite ideology, cursing a rival with vampirism as punishment.",
	creation: "Brujah are usually — though not exclusively — drawn from mortals with violent or ungovernable personalities. \nTheir Natures and Demeanors are often similar, as Brujah have little use for guile. They lean toward physical Attributes, with Social and Mental about equal afterwards. Many favor Skills and Talents, but most respect the Knowledges that make them more than just thugs. Contacts, Allies, and Herd are common Backgrounds.",
	disciplines: [
		"Celerity",
		"Potence",
		"Presence"
	],
	weaknesses: "The same passions that inspire Brujah to greatness or depravity, left unchecked, can send them into incandescent rages: The difficulties of rolls to resist or guide frenzy (p. 298 of Core Rulebook) are two higher than normal. \nAdditionally, a Brujah may never spend Willpower to avoid frenzy, though he may spend a point of Willpower to end a frenzy that has already begun.",
	organization: "Certain causes rise and fall in Brujah fashion, but some of the more tenured are those who call themselves Idealists and Iconoclasts. Iconoclasts want to tear it all down, while Idealists enjoy solving problems through theory. This last harkens somewhat to the classical roots of the Brujah as philosopher-kings, and most Idealists are among the ranks of Brujah ancillae and elders.",
	quote: "I’ll give you a head start. You’re the tortoise and I’m the hare - a pissed-off, fuck-the-world hare with a score to settle and a thirst like the devil’s own.",
	playerClan: true,
	stereotypesSects: [
		{
			sect: "Anarchs",
			opinion: "Get on the bus and let's tear this Prince a new asshole together."
		},
		{
			sect: "Camarilla",
			opinion: "It mostly works when we punch it into heading the right direction."
		},
		{
			sect: "Sabbat",
			opinion: "Giving your soul to the devil makes you a servant, you choads."
		},
	],
	stereotypesClans: [
		{
			clan: "brujah",
			opinion: ""
		},
		{
			clan: "caitiff",
			opinion: "Teach them something and maybe they’ll return the favor."
		},
		{
			clan: "gangrel",
			opinion: "Much respect, so long as we agree it’s mutual."
		},
		{
			clan: "malkavian",
			opinion: "Trust one? No. Find some common ground with one? Maybe."
		},
		{
			clan: "nosferatu",
			opinion: "It's better to have one telling you shit about someone else than the other way around, so be cool."
		},
		{
			clan: "toreador",
			opinion: "If you can catch one, see if he'll blow you. They might as well be good for something."
		},
		{
			clan: "tremere",
			opinion: "If one of these witches starts looking at you weird, you'd better hope you can get close to him before your blood catches on fire."
		},
		{
			clan: "ventrue",
			opinion: "Boot, meet face."
		}
	]
}

export default clan;