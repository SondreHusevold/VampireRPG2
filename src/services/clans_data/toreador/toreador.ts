import { Clan } from "../../../models/clan";
import picture from './picture.jpg';
import { ToreadorAppearance, ToreadorBackground, ToreadorCreation, ToreadorDescription, ToreadorHaven, ToreadorOrganization, ToreadorWeakness } from "./toreador_data";

const clan: Clan = {
	name: "Toreador",
	logo: 'f',
	picture: {
		img: picture,
		credit: "Oshred",
		link: "https://twitter.com/oshredart",
		pos: "30% 15%"
	},
	description: ToreadorDescription(),
	nickname: "Degenerates",
	appearance: ToreadorAppearance(),
	haven: ToreadorHaven(),
	background: ToreadorBackground(),
	creation: ToreadorCreation(),
	disciplines: [
		"Auspex",
		"Celerity",
		"Presence"
	],
	weaknesses: ToreadorWeakness(),
	organization: ToreadorOrganization(),
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