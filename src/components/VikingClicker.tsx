import Grid from "@material-ui/core/Grid";
import * as React from "react";
import { Component } from "react";
import { initializeGame, plow, runTick, VikingClickerGame } from "../game/VikingClickerGame";
import { LeftPanel } from "./LeftPanel";
import { MainPanel } from "./MainPanel";
import { RightPanel } from "./RightPanel";

const tickLength = 1000;    // length of one game tick in ms

interface VikingClickerState {
    game: VikingClickerGame;
}

export class VikingClicker extends Component<{}, VikingClickerState> {
    public constructor(props: {}) {
        super(props);
        this.state = {
            game: initializeGame()
        };

        setInterval(() => {
            this.setState({
                game: runTick(this.state.game)
            });
        }, tickLength);
    }

    public render = () => {
        return (
            <>
                <Grid container={true} spacing={0}>
                    <Grid item={true} xs={3}>
                        <LeftPanel />
                    </Grid>
                    <Grid item={true} xs={6}>
                        <MainPanel
                            handlePlow={this.handlePlow}
                            resources={this.state.game.resources}
                        />
                    </Grid>
                    <Grid item={true} xs={3}>
                        <RightPanel />
                    </Grid>
                </Grid>
            </>
        );
    }

    private handlePlow = () => {
        this.setState({
            game: plow(this.state.game)
        });
    }
}
