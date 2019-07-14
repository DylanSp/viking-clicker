import { Resources } from "./Resources";

export interface FoodUpgrade {
    name: string;
    id: string;
    description: string;
    plowPercentageAdded: number;
    farmhandPercentageAdded: number;
    cost: Resources;
}

export const foodUpgrades: FoodUpgrade[] = [
    {
        name: "Fertilizer",
        id: "FertilizerFoodUp",
        description: "Fertilize the soil with the remnants of last night's meal. Plow effectiveness x2.",
        plowPercentageAdded: 1,
        farmhandPercentageAdded: 0,
        cost: {
            food: 25,
            wood: 0,
            gold: 0
        }
    },
    {
        name: "Hearty Meals",
        id: "HeartyMealsFoodUp",
        description: "Feed your farmhands with tasty, fortifying soup. Farmhand effectiveness x1.3.",
        plowPercentageAdded: 0,
        farmhandPercentageAdded: 0.3,
        cost: {
            food: 1000,
            wood: 0,
            gold: 0
        }
    },
    {
        name: "Heavy Plow",
        id: "HeavyPlowFoodUp",
        description: "A sturdier plow with a moldboard for plowing heavier soil. Plow effectiveness x2.",
        plowPercentageAdded: 1,
        farmhandPercentageAdded: 0,
        cost: {
            food: 0,
            wood: 1000,
            gold: 0
        }
    }
];
