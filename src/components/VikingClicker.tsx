import Grid from "@material-ui/core/Grid";
import * as React from "react";
import { Component } from "react";
import { FoodUpgrade } from "../game/FoodUpgrades";
import { Resources } from "../game/Resources";
import { Servants } from "../game/Servants";
import { chop, getServantCost, hireServant, initializeGame, plow, purchaseFoodUpgrade, runTick, VikingClickerGame } from "../game/VikingClickerGame";
import { LeftPanel } from "./LeftPanel";
import { MainPanel } from "./MainPanel";
import { RightPanel } from "./RightPanel";

export interface VikingClickerContext {
    handlePlow: () => void;
    handleChop: () => void;
    resources: Resources;
    purchasedFoodUpgrades: FoodUpgrade[];
    purchaseFoodUpgrade: (upgrade: FoodUpgrade) => void;
    servants: Servants;
    servantCost: number;
    hireServant: () => void;
    messages: string[];
}

const { Provider, Consumer } = React.createContext<VikingClickerContext>({
    handlePlow: () => { return; },
    handleChop: () => { return; },
    resources: {
        food: 0,
        gold: 0,
        wood: 0
    },
    purchasedFoodUpgrades: [],
    purchaseFoodUpgrade: (upgrade) => { return; },
    servants: {
        farmhands: 0,
        woodcutters: 0
    },
    servantCost: 0,
    hireServant: () => { return; },
    messages: []
});

export const VikingClickerContextProvider = Provider;
export const VikingClickerContextConsumer = Consumer;

const tickLength = 1000;    // length of one game tick in ms

interface VikingClickerState {
    game: VikingClickerGame;
    messages: string[];
}

export class VikingClicker extends Component<{}, VikingClickerState> {
    public constructor(props: {}) {
        super(props);
        this.state = {
            game: initializeGame(),
            messages: []
        };

        setInterval(() => {
            this.setState({
                game: runTick(this.state.game)
            });
        }, tickLength);
    }

    public render = () => {
        return (
            <VikingClickerContextProvider
                value={{
                    handlePlow: this.handlePlow,
                    handleChop: this.handleChop,
                    resources: this.state.game.resources,
                    purchasedFoodUpgrades: this.state.game.foodUpgradesPurchased,
                    purchaseFoodUpgrade: this.purchaseFoodUpgrade,
                    servants: this.state.game.servants,
                    servantCost: getServantCost(this.state.game),
                    hireServant: this.hireServant,
                    messages: this.state.messages
                }}
            >
                <Grid container={true} spacing={0}>
                    <Grid item={true} xs={3}>
                        <LeftPanel />
                    </Grid>
                    <Grid item={true} xs={6}>
                        <MainPanel />
                    </Grid>
                    <Grid item={true} xs={3}>
                        <RightPanel />
                    </Grid>
                </Grid>
            </VikingClickerContextProvider>
        );
    }

    private handlePlow = () => {
        this.setState({
            game: plow(this.state.game)
        });
    }

    private handleChop = () => {
        this.setState({
            game: chop(this.state.game)
        });
    }

    private purchaseFoodUpgrade = (upgrade: FoodUpgrade) => {
        const [wasSuccessful, newGame] = purchaseFoodUpgrade(upgrade, this.state.game);
        if (wasSuccessful) {
            this.setState({
                game: newGame,
                messages: this.state.messages.concat([`${upgrade.name} purchased`])
            });
        }
    }

    private hireServant = () => {
        const [wasSuccessful, newGame] = hireServant(this.state.game);
        if (wasSuccessful) {
            this.setState({
                game: newGame,
            });
        }
    }
}
