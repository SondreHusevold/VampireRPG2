import { Artwork } from "./artwork";

export interface Attribute {
    name: string;
    section: AttributeSections;
    description: string;
	levels: string[];
	specialties: string[];
    icon: string;
    image: Artwork;
}

export enum AttributeSections {
    Physical,
    Social,
    Mental
}