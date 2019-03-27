import produce from "immer";
import { Resources } from "./Resources";
import { Workers } from "./Workers";

export interface VikingClickerGame {
    resources: Resources;
    workers: Workers;
}

export const initializeGame = (): VikingClickerGame => {
    return {
        resources: {
            food: 0,
            wood: 0,
            gold: 0
        },
        workers: {
            farmhands: 0
        }
    };
};

export const plow = (game: VikingClickerGame): VikingClickerGame => {
    return produce(game, (draft) => {
        draft.resources.food += 1;
    });
};

export const runTick = (game: VikingClickerGame): VikingClickerGame => {
    return produce(game, (draft) => {
        draft.resources.food += draft.workers.farmhands;    // TODO - add multiplier
    });
};
