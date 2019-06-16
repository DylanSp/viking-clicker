import { FoodUpgrade } from "./FoodUpgrades";
import { Resources } from "./Resources";
import { WoodUpgrade } from "./WoodUpgrades";

export type Upgrade = FoodUpgrade | WoodUpgrade;

export const hasEnoughResources = (upgrade: FoodUpgrade | WoodUpgrade, resources: Resources): boolean => {
    return upgrade.cost.food <= resources.food
        && upgrade.cost.wood <= resources.wood
        && upgrade.cost.gold <= resources.gold;
};
