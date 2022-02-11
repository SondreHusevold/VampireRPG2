import { Clan } from "../../../models/clan";
import logo from './logo.png';
import picture from './picture.jpg';

const clan: Clan = {
	name: "Malkavian",
	logo: "U",
	picture: {
		img: picture,
		credit: "Amy Wilkins",
		link: "https://www.artstation.com/amywilkinsart"
	},
	description: "Clan Malkavian is twice damned: once by the curse of being Kindred, and again by the turmoil that disturbs their hearts and minds. Upon the Embrace, every Malkavian is afflicted with an insurmountable insanity that fractures her outlook for every night thereafter, making her unlife one of madness. Some consider this a form of oracular insight, while others simply consider them dangerous. \nMake no mistake: Malkavian insanity is a painful, alienating phenomenon, but it occasionally provides the Lunatics with bursts of insight or heretofore unknown perspective. Madness for the Malkavians may take the form of any clinical form of insanity, or it may be a hyperacuity of senses others don’t know they have; a supernatural puppeteer pulling the Malkavian’s strings, or a sense that the Malkavian is somehow ahead of evolutionary schedule. A Malkavian may believe herself to be an idea given physical form or an avatar of some concept the World of Darkness has yet to encounter. She may be a nonstop ravening psychopath, or may be a mostly lucid individual sometimes rendered catatonic by fear of an impending cosmic cataclysm. \nTheir precarious stability makes it hard for other Kindred (or, indeed, any vessels with whom they may meet) to interact with Malkavians. The Clan sometimes indulges in elaborate, terrifying, and dangerous “pranks” which do little to endear them to other vampires. These incidents are nominally meant to educate the target, but the lesson can often be lost between the vampire’s scramble for safety and the inability to parse the Malkavian’s inner logic. Common pranks might be to replace a vain Toreador’s haven door with a guillotine or to redistribute a Brujah elder’s wealth while he’s at Elysium, or it might take the form of giving a hunter the location where the Nosferatu gather. Kindred both dread and resent the word “prank” almost as much as they do the Lunatics themselves.",
	nickname: "Lunatics",
	appearance: " While Malkavians can come from any culture, the madness following the Embrace tends to lead them to extremes of self-presentation. Malkavians may appear disheveled, injured, or simply dirty. They could still be wearing the same clothes from the night of their Embrace or they may have stolen clothes from a laundromat or a department store during a fit of confusion or fugue. Of course, Malkavians are just as likely to be meticulous and exacting in their appearance, trying obsessively to appear as normal as possible.",
	haven: "Consistency is rare among Malkavians. Quite simply, they establish havens where they think to, where they can, and where they can recall. A significant number of Malkavians have literally no home, spending each night where exhaustion or the sun’s rays leave them. Others may permanently have the presidential suite in a posh hotel, a squat in the Barrens, the dispensary at a county jail, or a broom closet in a historical landmark.",
	background: "Malkavians Embrace with all the caprice one would assume from them. Lunatic childer come from all economic and cultural strata, though most have some sort of hard-luck story or black secret behind them that caused their sire to take note. Truly damaged Malkavians who are unaware of the meanings of their actions may not even be aware that they have sired childer, which makes for very difficult entry into Kindred society for these castoffs, many of whom end up among the Caitiff.",
	creation: " Loner, outsider, and deviant concepts and archetypes prevail among the Malkavians, as do Mental Attributes (with an occasional Social-primary madman or Physical-primary maniac hiding among the ranks). Talents and Knowledges are likely most popular among Malkavians. Backgrounds tend to be either broad and shallow or few and deep, representing the way the way the Malkavian caroms through unlife. Virtues, Humanity, and Paths often tumble quickly, usually in the wake of Willpower doing the same.",
	disciplines: [
		"Auspex",
		"Dementation",
		"Obfuscate"
	],
	weaknesses: " All members of Clan Malkavian suffer from a permanent, incurable derangement. They may acquire and recover from other derangements, and may spend Willpower to ameliorate the effects of the derangement for a scene, but they can never recover from their original derangement.",
	organization: " Rumor is more widespread than truth with regard to Malkavian organization, and any number of harrowing tales describe the function of the Clan. Some say the Lunatics all share a hive consciousness; others claim that this is in fact the lingering consciousness of the Clan’s progenitor Malkav. Still others claim that a network of madness puts all Malkavians in contact with one another and is the cause of their crippling insanity. \nIf nothing else, the Malkavians prove inscrutable and uncanny. One night, each of them frenzies when they see one another, while the next night, they all converge at the same time at the Sheriff’s haven and accuse him of harboring Sabbat spies. Who can say how the “disease of information” or the customs of the Clan travel among them?",
	quote: "I was trying to turn water into wine. Where the fuck did all this blood come from? Oh, well — waste not, want not.",
	playerClan: false,
	stereotypesSects: [
		{
			sect: "Anarchs",
			opinion: "All they from Sheba shall come: they shall bring gold and incense.",
		},
		{
			sect: "Camarilla",
			opinion: "When all you do is look behind you, you never realize that the door in front of you is closed.",
		},
		{
			sect: "Sabbat",
			opinion: "They have the answer, but they don't understand the riddle itself."
		},
	],
	stereotypesClans: [
		{
			clan: "brujah",
			opinion: "You can't hide your horns, devil-man.",
		},
		{
			clan: "caitiff",
			opinion: "I didn't do it.",
		},
		{
			clan: "gangrel",
			opinion: "Pin the tail on the— OW, OW, OW, FUCK!",
		},
		{
			clan: "malkavian",
			opinion: ""
		},
		{
			clan: "nosferatu",
			opinion: "I have dreamed what hunts them in their dark, humid warrens, and it is what each of us can become, if we're not careful.",
		},
		{
			clan: "toreador",
			opinion: "Made up of the pieces of the people they've harmed. Each time they feed they become a little less.",
		},
		{
			clan: "tremere",
			opinion: "If you can rub those letters off their foreheads, they'll stop in their tracks.",
		},
		{
			clan: "ventrue",
			opinion: "I will make you a fine new waistcoat, my emperor."
		}
	]
}

export default clan;