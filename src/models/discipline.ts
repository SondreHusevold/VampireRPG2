import React from "react";
import { Clan } from "./clan";

export interface DisciplineLevel {
    name: string;
    description: JSX.Element;
    system: JSX.Element;
}

export interface Discipline {
    name: string;
    description: string;
    system: JSX.Element | null;
	levels: DisciplineLevel[];
	clans: Clan[];
    icon: string;
    image: {
        img: string;
        credit: string;
        creditLink: string;
    }
}