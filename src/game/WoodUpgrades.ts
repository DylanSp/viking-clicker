import { Resources } from "./Resources";

export interface WoodUpgrade {
    name: string;
    id: string;
    description: string;
    chopPercentageAdded: number;
    woodcutterPercentageAdded: number;
    cost: Resources;
}

export const woodUpgrades: WoodUpgrade[] = [
    {
        name: "Heavy Axe",
        id: "HeavyAxeWoodUp",
        description: "USe a heavier, sturdier axe to cut down trees more effectively. Chop effectiveness x2.",
        chopPercentageAdded: 1,
        woodcutterPercentageAdded: 0,
        cost: {
            food: 0,
            wood: 50,
            gold: 0
        }
    }
];
