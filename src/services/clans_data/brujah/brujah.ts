import { Clan } from "../../../models/clan";
import { BrujahAppearance, BrujahBackground, BrujahCreation, BrujahDescription, BrujahHaven, BrujahOrganization, BrujahWeakness } from "./brujah_data";
import picture from './picture.jpg';

const clan: Clan = 
{
	name: "Brujah",
	logo: "G",
	picture: {
		img: picture,
		credit: "Oshred",
		link: "https://twitter.com/oshredart",
		pos: "30% 15%"
	},
	description: BrujahDescription(),
	nickname: "Rabble",
	appearance: BrujahAppearance(),
	haven: BrujahHaven(),
	background: BrujahBackground(),
	creation: BrujahCreation(),
	disciplines: [
		"Celerity",
		"Potence",
		"Presence"
	],
	weaknesses: BrujahWeakness(),
	organization: BrujahOrganization(),
	quote: "I'll give you a head start. You're the tortoise and I'm the hare - a pissed-off, fuck-the-world hare with a score to settle and a thirst like the devil's own.",
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
			opinion: "Teach them something and maybe they'll return the favor."
		},
		{
			clan: "gangrel",
			opinion: "Much respect, so long as we agree it's mutual."
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