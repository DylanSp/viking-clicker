import Grid from "@material-ui/core/Grid";
import * as React from "react";
import { Component } from "react";
import { FoodUpgrade } from "../game/FoodUpgrades";
import { Resources } from "../game/Resources";
import { Servants } from "../game/Servants";
import { assignFarmhand, assignWoodcutter, chop, getServantCost, hireServant, initializeGame, plow, purchaseFoodUpgrade,
         purchaseWoodUpgrade, runTick, unassignFarmhand, unassignWoodcutter, VikingClickerGame } from "../game/VikingClickerGame";
import { WoodUpgrade } from "../game/WoodUpgrades";
import { LeftPanel } from "./LeftPanel";
import { MainPanel } from "./MainPanel";
import { RightPanel } from "./RightPanel";

export interface VikingClickerContext {
    game: VikingClickerGame;
    handlePlow: () => void;
    handleChop: () => void;
    purchaseFoodUpgrade: (upgrade: FoodUpgrade) => void;
    purchaseWoodUpgrade: (upgrade: WoodUpgrade) => void;
    servantCost: number;
    hireServant: () => void;
    messages: string[];
    assignFarmhand: () => void;
    unassignFarmhand: () => void;
    assignWoodcutter: () => void;
    unassignWoodcutter: () => void;
}

const { Provider, Consumer } = React.createContext<VikingClickerContext>({} as VikingClickerContext);

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
                    game: this.state.game,
                    handlePlow: this.handlePlow,
                    handleChop: this.handleChop,
                    purchaseFoodUpgrade: this.purchaseFoodUpgrade,
                    purchaseWoodUpgrade: this.purchaseWoodUpgrade,
                    servantCost: getServantCost(this.state.game),
                    hireServant: this.hireServant,
                    messages: this.state.messages,
                    assignFarmhand: this.assignFarmhand,
                    unassignFarmhand: this.unassignFarmhand,
                    assignWoodcutter: this.assignWoodcutter,
                    unassignWoodcutter: this.unassignWoodcutter
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

    private purchaseWoodUpgrade = (upgrade: WoodUpgrade) => {
        const [wasSuccessful, newGame] = purchaseWoodUpgrade(upgrade, this.state.game);
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

    private assignFarmhand = () => {
        const [wasSuccessful, newGame] = assignFarmhand(this.state.game);
        if (wasSuccessful) {
            this.setState({
                game: newGame
            });
        }
    }

    private unassignFarmhand = () => {
        const [wasSuccessful, newGame] = unassignFarmhand(this.state.game);
        if (wasSuccessful) {
            this.setState({
                game: newGame
            });
        }
    }

    private assignWoodcutter = () => {
        const [wasSuccessful, newGame] = assignWoodcutter(this.state.game);
        if (wasSuccessful) {
            this.setState({
                game: newGame
            });
        }
    }

    private unassignWoodcutter = () => {
        const [wasSuccessful, newGame] = unassignWoodcutter(this.state.game);
        if (wasSuccessful) {
            this.setState({
                game: newGame
            });
        }
    }
}
