
export interface RangedWeaponStats {
    name: string;
    damage: string;
    range: string;
    rate: string;
    bursts: boolean;
    capacity: string;
    conceal: string;
}

export const rangedweapons: RangedWeaponStats[] = [
    {
        name: "Revolver, Light",
        damage: "4",
        range: "12",
        rate: "3",
        capacity: "6",
        conceal: "Pocket",
        bursts: false
    },
    {
        name: "Revolver, Heavy",
        damage: "6",
        range: "35",
        rate: "2",
        capacity: "6",
        conceal: "Jacket",
        bursts: false
    },
    {
        name: "Pistol, Light",
        damage: "4",
        range: "20",
        rate: "4",
        capacity: "15+1",
        conceal: "Pocket",
        bursts: false
    },
    {
        name: "Pistol, Heavy",
        damage: "5",
        range: "25",
        rate: "3",
        capacity: "13+1",
        conceal: "Jacket",
        bursts: false
    },
    {
        name: "Rifle",
        damage: "8",
        range: "200",
        rate: "1",
        capacity: "3+1",
        conceal: "N/A",
        bursts: false
    },
    {
        name: "SMG, Small",
        damage: "4",
        range: "20",
        rate: "3",
        capacity: "17+1",
        conceal: "Jacket",
        bursts: true
    },
    {
        name: "SMG, Large",
        damage: "4",
        range: "50",
        rate: "3",
        capacity: "30+1",
        conceal: "N/A",
        bursts: true
    },
    {
        name: "Assault Rifle",
        damage: "7",
        range: "150",
        rate: "3",
        capacity: "30+1",
        conceal: "N/A",
        bursts: true
    },
    {
        name: "Shotgun",
        damage: "8",
        range: "20",
        rate: "1",
        capacity: "5+1",
        conceal: "Trenchcoat",
        bursts: false
    },
    {
        name: "Shotgun, Semi-Auto",
        damage: "8",
        range: "20",
        rate: "3",
        capacity: "6+1",
        conceal: "Trenchcoat",
        bursts: false
    },
    {
        name: "Crossbow",
        damage: "5",
        range: "20",
        rate: "1",
        capacity: "1",
        conceal: "Trenchcoat",
        bursts: false
    },
]