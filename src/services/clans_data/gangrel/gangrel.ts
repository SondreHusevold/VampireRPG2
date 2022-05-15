import { Clan } from "../../../models/clan";
import { GangrelAppearance, GangrelBackground, GangrelCreation, GangrelDescription, GangrelHaven, GangrelOrganization, GangrelWeakness } from "./gangrel_data";
import picture from './picture.jpg';

const clan: Clan = {
	name: "Gangrel",
	logo: "L",
	picture: {
		img: picture,
		credit: "Carmen Cornet",
		link: "https://www.artstation.com/ccornet",
		pos: "30% 15%"
	},
	description: GangrelDescription(),
	nickname: "Outlanders",
	appearance: GangrelAppearance(),
	haven: GangrelHaven(),
	background: GangrelBackground(),
	creation: GangrelCreation(),
	disciplines: [
		"Animalism",
		"Fortitude",
		"Protean"
	],
	weaknesses: GangrelWeakness(),
	organization: GangrelOrganization(),
	quote: "This is not a place for you, and it is too late to turn back. Run, little man.",
	playerClan: false,
	stereotypesSects: [
		{
			sect: "Anarchs",
			opinion: "Almost. They almost get it."
		},
		{
			sect: "Camarilla",
			opinion: "Any port in a storm, I guess."
		},
		{
			sect: "Sabbat",
			opinion: "Self-righteous evangelical garbage."
		},
	],
	stereotypesClans: [
		{
			clan: "brujah",
			opinion: "I wouldn't call what we have 'trust.' More of an understanding that we have a common enemy."
		},
		{
			clan: "caitiff",
			opinion: "Unless they pull their weight, who needs another mouth to feed?"
		},
		{
			clan: "gangrel",
			opinion: ""
		},
		{
			clan: "malkavian",
			opinion: "Ten gallons of bullshit in a one-gallon jug."
		},
		{
			clan: "nosferatu",
			opinion: "When they get nervous, get the fuck out of there."
		},
		{
			clan: "toreador",
			opinion: "Assume that they want something from you when they lower themselves to your level."
		},
		{
			clan: "tremere",
			opinion: "Fight or flight with the grayfaces. Choose carefully."
		},
		{
			clan: "ventrue",
			opinion: "If you like answering to a master, you can do worse... but not much."
		}
	]
}

export default clan;