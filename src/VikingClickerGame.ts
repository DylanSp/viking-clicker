import produce from "immer";
import { Resources } from "./Resources";

export interface VikingClickerGame {
    resources: Resources;
}

export const initializeGame = (): VikingClickerGame => {
    return {
        resources: {
            food: 0,
            wood: 0,
            gold: 0
        }
    };
};

export const plow = (game: VikingClickerGame): VikingClickerGame => {
    return produce(game, (draft) => {
        draft.resources.food += 1;
    });
};
