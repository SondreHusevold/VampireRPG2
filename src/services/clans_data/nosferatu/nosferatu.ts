import { Clan } from "../../../models/clan";
import logo from './logo.png';
import picture from './picture.jpg';

const clan: Clan = {
	name: "Nosferatu",
	logo: "X",
	picture: {
		img: picture,
		credit: "Oshred",
		link: "https://twitter.com/oshredart"
	},
	description: " Those who doubt that the Embrace is a curse need look no further than the Nosferatu. Twisted by the mark of Caine, members of Clan Nosferatu are warped by the Embrace into hideous monsters. As such, they skulk and keep to the shadows, and they often rouse the ire and mockery of other Kindred for their nightmarish appearances. Still others are so terrified or revolted by the Nosferatu that these warped Kindred have little social interaction at all. \nTo their credit, the Nosferatu come to possess many of the whispered secrets of their reluctant fellows. The Sewer Rats enjoy a grudging respect as the information-brokers of the Kindred, given their supernatural acumen at stealth and the fact that many Kindred would rather ignore them than acknowledge them. Savvy Nosferatu exploit this for all it's worth, turning the hypocrisy of other vampires to their own profit. \nOn the whole, the Nosferatu condition is lonely and alienating. How they react to the Curse of Caine varies with their outlook and mental stamina, but it's hard to be an object of utter revulsion and not let it shape one's disposition toward one's “Kindred” in some way. Some of the Sewer Rats are cruel, as blighted on the inside as they are on the outside, while others are tragic, wretched creatures who have been cursed with eternal outsider status through no choice of their own. A few of the Sewer Rats even position themselves as prophets or avatars of the Damned, physically embodying the haunting riddle, “A Beast I am, lest a Beast I become.”",
	nickname: "Sewer Rats",
	appearance: " Physical horror is the lot of the Nosferatu, and their unsettling deformations are countless. No two Nosferatu share the exact same malformation, and the Clan is a freakshow of snarled limbs, fanged protrusions, hellish countenances, serpentine spines, ruined faces, spasmodic appendages, and even features not usually seen on the mortal stock from which the Nosferatu are drawn. The Sewer Rats often hide these disfigurements under shapeless robes and rags, but some exult in the discomfort their presence causes, and don't bother disguising them. They may even emphasize them.",
	haven: " Nosferatu Kindred often make their havens far from the scorn and spite of other vampires. Whether they construct warrens in the sewers suggested by their nickname or they sculpt a sprawling nightmare-nest in the spire of a condemned church, Sewer Rats value secrecy and distance from rivals in their havens. Nosferatu of humbler means may well squat in an abandoned tenement or a disused alley. So long as it's away from other Kindred, it's a good haven.",
	background: " The Sewer Rats mostly fit into one of two categories. Some Nosferatu Embrace the damaged, flawed, outcast, or vile, feeling some degree of kinship with them. Other Embrace spitefully, dragging the beautiful or privileged into an immortal hell of disfigurement and monstrosity.",
	creation: " Many Nosferatu come from loner and outsider concepts, Natures, and Demeanors. They favor Physical and Mental Attributes over Social, and they tend to be balanced in their regard for Talents, Skills, and Knowledges. Nosferatu prefer to specialize rather than generalize in Backgrounds, favoring those that carry favors and information like Allies, Contacts, Mentor, and even a bit of Influence.",
	disciplines: [
		"Animalism",
		"Obfuscate",
		"Potence"
	],
	weaknesses: " All Nosferatu have an Appearance score of zero, and they may never improve it. Cross it off the character sheet. Dice pools that use the Appearance Trait are inherently difficult for these hideous Kindred.",
	organization: " Occasionally, a coterie of Nosferatu becomes a brood or cult, often based around a remote warren. These can sprawl into vast “kingdoms” of Sew er Rats, who often exist without the knowledge of a do main's Prince or Archbishop. The Nosferatu are among the Kindred most likely to share a communal haven, if only for protection in numbers. As well, Nosferatu share information with each other via networks — whether digital, personal, occult, or something less definable — that defy the comprehension of other Kindred.",
	quote: "Nobody down here but us boogeymen. Hey, whose head is this?",
	playerClan: false,
	stereotypesSects: [
		{
			sect: "Anarchs",
			opinion: "Sure, I'll buy what you're selling. For tonight, at least."
		},
		{
			sect: "Camarilla",
			opinion: "I'll be damned, they think their claims of domain extend into the sewers."
		},
		{
			sect: "Sabbat",
			opinion: "Either monumentally gullible or Biblegrade wicked; either way, you're better off when they're somewhere else."
		},
	],
	stereotypesClans: [
		{
			clan: "brujah",
			opinion: "Emits showers of sparks. Point away from face. Point at some other asshole instead."
		},
		{
			clan: "caitiff",
			opinion: "'I never even knew my father!' Cry me a fucking river."
		},
		{
			clan: "gangrel",
			opinion: "We have some common ground in being outsiders, but that doesn't mean you shouldn't be careful around them."
		},
		{
			clan: "malkavian",
			opinion: "See my face? That's what these maniacs' minds look like. Except they're still bleeding in there."
		},
		{
			clan: "nosferatu",
			opinion: ""
		},
		{
			clan: "toreador",
			opinion: "Sell them dirt on each other and they'll scratch each other's eyes out. It's the only way to come out ahead with them."
		},
		{
			clan: "tremere",
			opinion: "They're not even vampires, you know that? They did something way wrong back in the day and now it's stuck to them."
		},
		{
			clan: "ventrue",
			opinion: "High and mighty, until they need you. Charge them double when they come calling. They can afford it."
		}
	]
}

export default clan;