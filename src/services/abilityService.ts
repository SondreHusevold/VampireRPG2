import { Ability, AbilitySections } from '../models/ability';
import academics from './abilites_data/knowledges/academics';
import computer from './abilites_data/knowledges/computer';
import finance from './abilites_data/knowledges/finance';
import investigation from './abilites_data/knowledges/investigation';
import law from './abilites_data/knowledges/law';
import medicine from './abilites_data/knowledges/medicine';
import occult from './abilites_data/knowledges/occult';
import politics from './abilites_data/knowledges/politics';
import science from './abilites_data/knowledges/science';
import technology from './abilites_data/knowledges/technology';

import animalKen from './abilites_data/skills/animalKen';
import crafts from './abilites_data/skills/crafts';
import drive from './abilites_data/skills/drive';
import etiquette from './abilites_data/skills/etiquette';
import firearms from './abilites_data/skills/firearms';
import larceny from './abilites_data/skills/larceny';
import melee from './abilites_data/skills/melee';
import performance from './abilites_data/skills/performance';
import stealth from './abilites_data/skills/stealth';
import survival  from './abilites_data/skills/survival';

import alertness from './abilites_data/talents/alertness';
import athletics from './abilites_data/talents/athletics';
import awareness from './abilites_data/talents/awareness';
import brawl from './abilites_data/talents/brawl';
import empathy from './abilites_data/talents/empathy';
import expression from './abilites_data/talents/expression';
import intimidation from './abilites_data/talents/intimidation';
import leadership from './abilites_data/talents/leadership';
import streetwise from './abilites_data/talents/streetwise';
import subterfuge from './abilites_data/talents/subterfuge';

export const knowledges = [
    academics, computer,
    finance, investigation,
    law, medicine,
    occult, politics,
    science, technology
]

export const skills = [
    animalKen, crafts,
    drive, etiquette,
    firearms, larceny,
    melee, performance,
    stealth, survival
]

export const talents = [
    alertness, athletics,
    awareness, brawl,
    empathy, expression,
    intimidation, leadership,
    streetwise, subterfuge
]

export interface AbilitiesSection {
    name: string;
    section: AbilitySections;
    abilities: Ability[];
}

export const abilities: AbilitiesSection[] = [
    {
        name: "Knowledges",
        section: AbilitySections.Knowledges,
        abilities: knowledges
    },
    {
        name: "Skills",
        section: AbilitySections.Skills,
        abilities: skills
    },
    {
        name: "Talents",
        section: AbilitySections.Talents,
        abilities: talents
    }
]