import produce from "immer";
import { CrewMembers } from "./CrewMembers";
import { FoodUpgrade } from "./FoodUpgrades";
import { Resources } from "./Resources";
import { Servants } from "./Servants";

export interface VikingClickerGame {
    resources: Resources;
    servants: Servants;
    crewMembers: CrewMembers;
    foodUpgradesPurchased: FoodUpgrade[];   // genericize this to all upgrades purchased?
}

export const initializeGame = (): VikingClickerGame => {
    return {
        resources: {
            food: 0,
            wood: 0,
            gold: 0
        },
        servants: {
            farmhands: 1
        },
        crewMembers: {
            raiders: 0
        },
        foodUpgradesPurchased: []
    };
};

export const plow = (game: VikingClickerGame): VikingClickerGame => {
    return produce(game, (draft) => {
        const multiplier = draft.foodUpgradesPurchased
                            .map((upgrade) => upgrade.plowPercentageAdded)
                            .reduce((acc, x) => acc + x, 1);
        draft.resources.food += multiplier;
    });
};

export const chop = (game: VikingClickerGame): VikingClickerGame => {
    return produce(game, (draft) => {
        draft.resources.wood += 1;
    });
};

export const runTick = (game: VikingClickerGame): VikingClickerGame => {
    return produce(game, (draft) => {
        const multiplier = draft.foodUpgradesPurchased
                            .map((upgrade) => upgrade.farmhandPercentageAdded)
                            .reduce((acc, x) => acc + x, 1);
        draft.resources.food += draft.servants.farmhands * multiplier;
    });
};

export const purchaseFoodUpgrade = (upgrade: FoodUpgrade, game: VikingClickerGame): VikingClickerGame => {
    return produce(game, (draft) => {
        draft.resources.food -= upgrade.cost.food;
        draft.resources.wood -= upgrade.cost.wood;
        draft.resources.gold -= upgrade.cost.gold;

        draft.foodUpgradesPurchased.push(upgrade);
    });
};
