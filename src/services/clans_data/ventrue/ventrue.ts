import { Clan } from "../../../models/clan";
import picture from './picture.jpg';
import { VentrueAppearance, VentrueBackground, VentrueCreation, VentrueDescription, VentrueHaven, VentrueOrganization, VentrueWeakness } from "./ventrue_data";

const clan: Clan = {
	name: "Ventrue",
	logo: "l",
	picture: {
		img: picture,
		credit: "Brian Matyas",
		link: "https://www.artstation.com/bmatyas",
		pos: "55% 10%"
	},
	description: VentrueDescription(),
	nickname: "Blue Bloods",
	appearance: VentrueAppearance(),
	haven: VentrueHaven(),
	background: VentrueBackground(),
	creation: VentrueCreation(),
	disciplines: [
		"Dominate",
		"Fortitude",
		"Presence"
	],
	weaknesses: VentrueWeakness(),
	organization: VentrueOrganization(),
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