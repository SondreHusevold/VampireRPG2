enum DamageTypes {
  bashing = "Bashing",
  lethal = "Lethal",
  aggravated = "Aggravated"
}

export interface MeleeWeaponStats {
  name: string;
  damage: string;
  damageType: DamageTypes;
  conceal: string;
}

export const meleeweapons: MeleeWeaponStats[] = [
  {
    name: "Sap",
    damage: "Strength +1",
    damageType: DamageTypes.bashing,
    conceal: "Pocket",
  },
  {
    name: "Club",
    damage: "Strength +2",
    damageType: DamageTypes.bashing,
    conceal: "Trenchcoat"
  },
  {
    name: "Knife",
    damage: "Strength +1",
    damageType: DamageTypes.lethal,
    conceal: "Jacket"
  },
  {
    name: "Sword",
    damage: "Strength +2",
    damageType: DamageTypes.lethal,
    conceal: "Trenchcoat"
  },
  {
    name: "Axe",
    damage: "Strength +3",
    damageType: DamageTypes.lethal,
    conceal: "N/A"
  },
  {
    name: "Stake",
    damage: "Strength +1",
    damageType: DamageTypes.lethal,
    conceal: "Trenchcoat"
  }
]