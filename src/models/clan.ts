import { Artwork } from "./artwork";

interface ClansSectStereotypes {
    sect: string;
    opinion: string;
}

interface ClansStereotypes {
    clan: string;
    opinion: string;
}

export interface Clan {
    name: string;
    logo: string;
    picture: Artwork;
    description: JSX.Element;
    nickname: string;
    appearance: JSX.Element;
    haven: JSX.Element;
    background: JSX.Element;
    creation: JSX.Element;
    disciplines: string[];
    weaknesses: JSX.Element;
    organization: JSX.Element;
    quote: string;
    playerClan: boolean;
    stereotypesSects: ClansSectStereotypes[];
    stereotypesClans: ClansStereotypes[];
}