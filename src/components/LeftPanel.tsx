import Grid from "@material-ui/core/Grid";
import React from "react";
import { FunctionComponent } from "react";
import { LandPanel } from "./LandPanel";
import { RaidingPanel } from "./RaidingPanel";

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
                xs={6}
                style={{
                    maxWidth: "100%",
                    position: "relative"
                }}
            >
                <RaidingPanel isVisible={false} />
            </Grid>
            <Grid
                item={true}
                xs={6}
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
