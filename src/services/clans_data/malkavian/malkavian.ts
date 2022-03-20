import { Clan } from "../../../models/clan";
import { MalkavianAppearance, MalkavianBackground, MalkavianCreation, MalkavianDescription, MalkavianHaven, MalkavianOrganization, MalkavianWeakness } from "./malkavian_data";
import picture from './picture.jpg';

const clan: Clan = {
	name: "Malkavian",
	logo: "U",
	picture: {
		img: picture,
		credit: "Amy Wilkins",
		link: "https://www.artstation.com/amywilkinsart"
	},
	description: MalkavianDescription(),
	nickname: "Lunatics",
	appearance: MalkavianAppearance(),
	haven: MalkavianHaven(),
	background: MalkavianBackground(),
	creation: MalkavianCreation(),
	disciplines: [
		"Auspex",
		"Dementation",
		"Obfuscate"
	],
	weaknesses: MalkavianWeakness(),
	organization: MalkavianOrganization(),
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