export interface Attribute {
    name: string;
    section: AttributeSections;
    description: string;
	levels: string[];
	specialties: string[];
    icon: string;
    image: string;
}

export enum AttributeSections {
    Physical,
    Social,
    Mental
}