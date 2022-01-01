interface ClansSectStereotypes {
    sect: string;
    opinion: string;
}

interface ClansStereotypes {
    clan: string;
    opinion: string;
}

interface Artwork {
    img: string;
    credit: string;
    link: string;
}

export interface Clan {
    name: string;
    logo: string;
    picture: Artwork;
    description: string;
    nickname: string;
    appearance: string;
    haven: string;
    background: string;
    creation: string;
    disciplines: string[];
    weaknesses: string;
    organization: string;
    quote: string;
    playerClan: boolean;
    stereotypesSects: ClansSectStereotypes[];
    stereotypesClans: ClansStereotypes[];
}