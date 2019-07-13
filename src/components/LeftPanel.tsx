import Grid from "@material-ui/core/Grid";
import React from "react";
import { FunctionComponent } from "react";
import { LandPanel } from "./LandPanel";
import { RaidingPanel } from "./RaidingPanel";
import { UpgradePanel } from "./UpgradePanel";

export const LeftPanel: FunctionComponent = () => {
    return (
        <Grid
            container={true}
            direction="column"
            style={{
                borderRight: "1px solid black",
                height: "100vh"
            }}
        >
            <Grid
                item={true}
                xs={4}
                style={{
                    borderBottom: "1px solid black",
                    maxWidth: "100%",
                    position: "relative"
                }}
            >
                <UpgradePanel />
            </Grid>
            <Grid
                item={true}
                xs={4}
                style={{
                    maxWidth: "100%",
                    position: "relative"
                }}
            >
                <RaidingPanel isVisible={false} />
            </Grid>
            <Grid
                item={true}
                xs={4}
                style={{
                    maxWidth: "100%",
                    position: "relative"
                }}
            >
                <LandPanel isVisible={false} />
            </Grid>
        </Grid>
    );
};
