import Grid from "@material-ui/core/Grid";
import * as React from "react";
import { FunctionComponent } from "react";
import { CrewPanel } from "./CrewPanel";
import { PrestigePanel } from "./PrestigePanel";
import { ServantsPanel } from "./ServantsPanel";

export const RightPanel: FunctionComponent = () => {
    return (
        <Grid
            container={true}
            direction="column"
            style={{
                borderLeft: "1px solid black",
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
                <ServantsPanel />
            </Grid>
            <Grid
                item={true}
                xs={4}
                style={{
                    maxWidth: "100%",
                    position: "relative"
                }}
            >
                <CrewPanel isVisible={false} />
            </Grid>
            <Grid
                item={true}
                xs={4}
                style={{
                    maxWidth: "100%",
                    position: "relative"
                }}
            >
                <PrestigePanel isVisible={false} />
            </Grid>
        </Grid>
    );
};
