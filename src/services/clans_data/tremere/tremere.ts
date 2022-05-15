import { Clan } from "../../../models/clan";
import picture from './picture.jpg';
import { TremereAppearance, TremereBackground, TremereCreation, TremereDescription, TremereHaven, TremereOrganization, TremereWeakness } from "./tremere_data";

const clan: Clan = {
	name: "Tremere",
	logo: "h",
	picture: {
		img: picture,
		credit: "Bella Bergolts",
		link: "https://www.deviantart.com/bellabergolts",
		pos: "30% 15%"
	},
	description: TremereDescription(),
	nickname: "Warlocks",
	appearance: TremereAppearance(),
	haven: TremereHaven(),
	background: TremereBackground(),
	creation: TremereCreation(),
	disciplines: [
		"Auspex",
		"Dominate",
		"Thaumaturgy"
	],
	weaknesses: TremereWeakness(),
	organization: TremereOrganization(),
	quote: "When the world refuses to give, he who makes himself a master of the world may still take.",
	playerClan: true,
	stereotypesSects: [
		{
			sect: "Anarchs",
			opinion: "In the absence of structure, autarchy yields only the brutishness of lesser Kindred."
		},
		{
			sect: "Camarilla",
			opinion: "A sundered house still offers shelter."
		},
		{
			sect: "Sabbat",
			opinion: "They do not understand their own ends, and damn themselves thus."
		},
	],
	stereotypesClans: [
		{
			clan: "brujah",
			opinion: "Hubris and a lack of self-discipline have laid low the Clan of warrior-poets."
		},
		{
			clan: "caitiff",
			opinion: "As Vesalius gathered his cadavers, so do we solicit volunteers in the understanding of our sciences."
		},
		{
			clan: "gangrel",
			opinion: "Theirs is a simple but formidable power. Fortunately, their blood is as susceptible to mastery as that of all Kindred."
		},
		{
			clan: "malkavian",
			opinion: "Once we can synthesize their stochastic perception, the Kindred will no longer have to brook their disruptive caprice."
		},
		{
			clan: "nosferatu",
			opinion: "Those involuntarily placed outside the system can prove fruitful allies or accomplices."
		},
		{
			clan: "toreador",
			opinion: "Form follows function, which makes the ongoing prominence of these self-worshipers such a dispiriting enigma."
		},
		{
			clan: "tremere",
			opinion: ""
		},
		{
			clan: "ventrue",
			opinion: "Caesar shall have his due, and to our benefit, his love of lucre blinds him to true power."
		}
	]
}

export default clan;