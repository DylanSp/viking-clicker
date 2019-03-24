import Grid from "@material-ui/core/Grid";
import * as React from "react";
import { FunctionComponent } from "react";
import { MainPanel } from "./MainPanel";
import { RaidingPanel } from "./RaidingPanel";
import { UpgradePanel } from "./UpgradePanel";

export const VikingClicker: FunctionComponent = () => {
    return (
        <div>
            <Grid container={true} spacing={0}>
                <Grid item={true} xs={3}>
                    <UpgradePanel />
                </Grid>
                <Grid item={true} xs={6}>
                    <MainPanel />
                </Grid>
                <Grid item={true} xs={3}>
                    <RaidingPanel />
                </Grid>
            </Grid>
        </div>
    );
};
