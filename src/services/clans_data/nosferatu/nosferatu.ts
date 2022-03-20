import { Clan } from "../../../models/clan";
import { NosferatuAppearance, NosferatuBackground, NosferatuCreation, NosferatuDescription, NosferatuHaven, NosferatuOrganization, NosferatuWeakness } from "./nosferatu_data";
import picture from './picture.jpg';

const clan: Clan = {
	name: "Nosferatu",
	logo: "X",
	picture: {
		img: picture,
		credit: "Oshred",
		link: "https://twitter.com/oshredart"
	},
	description: NosferatuDescription(),
	nickname: "Sewer Rats",
	appearance: NosferatuAppearance(),
	haven: NosferatuHaven(),
	background: NosferatuBackground(),
	creation: NosferatuCreation(),
	disciplines: [
		"Animalism",
		"Obfuscate",
		"Potence"
	],
	weaknesses: NosferatuWeakness(),
	organization: NosferatuOrganization(),
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