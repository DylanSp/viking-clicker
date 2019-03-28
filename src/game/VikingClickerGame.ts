import produce from "immer";
import { CrewMembers } from "./CrewMembers";
import { Resources } from "./Resources";
import { Servants } from "./Servants";

export interface VikingClickerGame {
    resources: Resources;
    servants: Servants;
    crewMembers: CrewMembers;
}

export const initializeGame = (): VikingClickerGame => {
    return {
        resources: {
            food: 0,
            wood: 0,
            gold: 0
        },
        servants: {
            farmhands: 0
        },
        crewMembers: {
            raiders: 0
        }
    };
};

export const plow = (game: VikingClickerGame): VikingClickerGame => {
    return produce(game, (draft) => {
        draft.resources.food += 1;
    });
};

export const chop = (game: VikingClickerGame): VikingClickerGame => {
    return produce(game, (draft) => {
        draft.resources.wood += 1;
    });
};

export const runTick = (game: VikingClickerGame): VikingClickerGame => {
    return produce(game, (draft) => {
        draft.resources.food += draft.servants.farmhands;    // TODO - add multiplier
    });
};
