import Grid from "@material-ui/core/Grid";
import React, { useState } from "react";
import { FunctionComponent } from "react";
import { ServantsPanel } from "./ServantsPanel";
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
                xs={6}
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
                xs={6}
                style={{
                    maxWidth: "100%",
                    position: "relative"
                }}
            >
                <ServantsPanel />
            </Grid>
        </Grid>
    );
};
