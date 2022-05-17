export interface Ability {
    name: string;
    section: AbilitySections;
    description: string;
	levels: string[];
	possessedBy: string[];
	specialties: string[];
    icon: string;
    // image: {
    //     img: string;
    //     credit: string;
    //     link: string;
    // }
}

export enum AbilitySections {
    Talents,
    Skills,
    Knowledges
}