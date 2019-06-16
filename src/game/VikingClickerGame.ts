import produce from "immer";
import { CrewMembers } from "./CrewMembers";
import { FoodUpgrade, foodUpgrades } from "./FoodUpgrades";
import { Resources } from "./Resources";
import { Servants } from "./Servants";
import { hasEnoughResources } from "./Upgrades";
import { WoodUpgrade, woodUpgrades } from "./WoodUpgrades";

export interface VikingClickerGame {
    resources: Resources;
    servants: Servants;
    crewMembers: CrewMembers;
    foodUpgradesPurchased: FoodUpgrade[];   // TODO - genericize this to all upgrades purchased?
    woodUpgradesPurchased: WoodUpgrade[];
}

export const initializeGame = (): VikingClickerGame => {
    return {
        resources: {
            food: 0,
            wood: 0,
            gold: 0
        },
        servants: {
            unassigned: 0,
            farmhands: 0,
            woodcutters: 0
        },
        crewMembers: {
            raiders: 0
        },
        foodUpgradesPurchased: [],
        woodUpgradesPurchased: []
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
        const multiplier = draft.woodUpgradesPurchased
                            .map((upgrade) => upgrade.chopPercentageAdded)
                            .reduce((acc, x) => acc + x, 1);
        draft.resources.wood += multiplier;
    });
};

export const runTick = (game: VikingClickerGame): VikingClickerGame => {
    return produce(game, (draft) => {
        const foodMultiplier = draft.foodUpgradesPurchased
                                .map((upgrade) => upgrade.farmhandPercentageAdded)
                                .reduce((acc, x) => acc + x, 1);
        draft.resources.food += draft.servants.farmhands * foodMultiplier;

        const woodMultiplier = draft.woodUpgradesPurchased
                                .map((upgrade) => upgrade.woodcutterPercentageAdded)
                                .reduce((acc, x) => acc + x, 1);
        draft.resources.wood += draft.servants.woodcutters * woodMultiplier;
    });
};

export const purchaseFoodUpgrade = (upgrade: FoodUpgrade, game: VikingClickerGame): [boolean, VikingClickerGame] => {
    if (game.resources.food >= upgrade.cost.food
     && game.resources.wood >= upgrade.cost.wood
     && game.resources.gold >= upgrade.cost.gold) {
        return [true, produce(game, (draft) => {
            draft.resources.food -= upgrade.cost.food;
            draft.resources.wood -= upgrade.cost.wood;
            draft.resources.gold -= upgrade.cost.gold;

            draft.foodUpgradesPurchased.push(upgrade);
        })];
     }

    // intentional no-op in produce(), just create a copy of the game with no changes
    return [false, produce(game, (draft) => { return; })];
};

export const purchaseWoodUpgrade = (upgrade: WoodUpgrade, game: VikingClickerGame): [boolean, VikingClickerGame] => {
    if (game.resources.food >= upgrade.cost.food
     && game.resources.wood >= upgrade.cost.wood
     && game.resources.gold >= upgrade.cost.gold) {
        return [true, produce(game, (draft) => {
            draft.resources.food -= upgrade.cost.food;
            draft.resources.wood -= upgrade.cost.wood;
            draft.resources.gold -= upgrade.cost.gold;

            draft.woodUpgradesPurchased.push(upgrade);
        })];
     }

    // intentional no-op in produce(), just create a copy of the game with no changes
    return [false, produce(game, (draft) => { return; })];
};

export const hireServant = (game: VikingClickerGame): [boolean, VikingClickerGame] => {
    const cost = getServantCost(game);
    if (game.resources.food >= cost) {
        return [true, produce(game, (draft) => {
            game.resources.food -= cost;
            draft.servants.unassigned += 1;
        })];
    }

    // intentional no-op in produce(), just create a copy of the game with no changes
    return [false, produce(game, (draft) => { return; })];
};

export const getServantCost = (game: VikingClickerGame): number => {
    const baseCost = 500;   // amount of food required
                            // TODO - move this to file of important constants?
    const baseMultiplier = 1.15;
    const numServants = game.servants.farmhands;
    return baseCost * (baseMultiplier ** numServants);
};

export const assignFarmhand = (game: VikingClickerGame): [boolean, VikingClickerGame] => {
    if (game.servants.unassigned > 0) {
        return [true, produce(game, (draft) => {
            draft.servants.unassigned--;
            draft.servants.farmhands++;
        })];
    }

    // intentional no-op in produce(), just create a copy of the game with no changes
    return [false, produce(game, (draft) => { return; })];
};

export const unassignFarmhand = (game: VikingClickerGame): [boolean, VikingClickerGame] => {
    if (game.servants.farmhands > 0) {
        return [true, produce(game, (draft) => {
            draft.servants.farmhands--;
            draft.servants.unassigned++;
        })];
    }

    // intentional no-op in produce(), just create a copy of the game with no changes
    return [false, produce(game, (draft) => { return; })];
};

export const assignWoodcutter = (game: VikingClickerGame): [boolean, VikingClickerGame] => {
    if (game.servants.unassigned > 0) {
        return [true, produce(game, (draft) => {
            draft.servants.unassigned--;
            draft.servants.woodcutters++;
        })];
    }

    // intentional no-op in produce(), just create a copy of the game with no changes
    return [false, produce(game, (draft) => { return; })];
};

export const unassignWoodcutter = (game: VikingClickerGame): [boolean, VikingClickerGame] => {
    if (game.servants.woodcutters > 0) {
        return [true, produce(game, (draft) => {
            draft.servants.woodcutters--;
            draft.servants.unassigned++;
        })];
    }

    // intentional no-op in produce(), just create a copy of the game with no changes
    return [false, produce(game, (draft) => { return; })];
};

// if any upgrades are available for purchase or already purchased, return true
export const areUpgradesEnabled = (game: VikingClickerGame): boolean => {
    if (game.foodUpgradesPurchased.length > 0) {
        return true;
    }

    if (game.woodUpgradesPurchased.length > 0) {
        return true;
    }

    if (foodUpgrades.some((upgrade) => hasEnoughResources(upgrade, game.resources))) {
        return true;
    }

    if (woodUpgrades.some((upgrade) => hasEnoughResources(upgrade, game.resources))) {
        return true;
    }

    return false;
};
