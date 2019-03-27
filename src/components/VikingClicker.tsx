import Grid from "@material-ui/core/Grid";
import * as React from "react";
import { Component } from "react";
import { initializeGame, plow, VikingClickerGame } from "../VikingClickerGame";
import { MainPanel } from "./MainPanel";
import { RaidingPanel } from "./RaidingPanel";
import { UpgradePanel } from "./UpgradePanel";
import { WorkerPanel } from "./WorkerPanel";

interface VikingClickerState {
    game: VikingClickerGame;
}

export class VikingClicker extends Component<{}, VikingClickerState> {
    public constructor(props: {}) {
        super(props);
        this.state = {
            game: initializeGame()
        };
    }

    public render = () => {
        return (
            <>
                <Grid container={true} spacing={0}>
                    <Grid item={true} container={true} direction="column" xs={3}>
                        <>
                            <Grid item={true} xs={6}>
                                <UpgradePanel />
                            </Grid>
                            <Grid item={true} xs={6}>
                                <WorkerPanel />
                            </Grid>
                        </>
                    </Grid>
                    <Grid item={true} xs={6}>
                        <MainPanel
                            handlePlow={this.handlePlow}
                            resources={this.state.game.resources}
                        />
                    </Grid>
                    <Grid item={true} xs={3}>
                        <RaidingPanel />
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
