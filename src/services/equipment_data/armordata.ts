interface ArmorClass {
    class: string;
    rating: string;
    penalty: string;
    example: string;
}

export const armorEquipment: ArmorClass[] = [
    {
        class: "Class One",
        rating: "1",
        penalty: "0",
        example: "Reinforced Clothing"
    },
    {
        class: "Class Two",
        rating: "2",
        penalty: "1",
        example: "Armored T-shirt"
    },
    {
        class: "Class Three",
        rating: "3",
        penalty: "1",
        example: "Kevlar vest"
    },
    {
        class: "Class Four",
        rating: "4",
        penalty: "2",
        example: "Flak jacket"
    },
    {
        class: "Class Five",
        rating: "5",
        penalty: "3",
        example: "Full riot gear"
    }
]