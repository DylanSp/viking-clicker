import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { FunctionComponent } from "react";
import { Actions } from "./Actions";
import { MessageDisplay } from "./MessageDisplay";
import { ResourceDisplay } from "./ResourceDisplay";
import { ServantsPanel } from "./ServantsPanel";
import { StatusDescription } from "./StatusDescription";
import { UpgradePanel } from "./UpgradePanel";

export const MainPanel: FunctionComponent = () => {
    return (
        <>
            <div
                style={{
                    textAlign: "center",
                    height: "66vh"
                }}
            >
                <Typography variant="h3" gutterBottom={true}>
                    Viking Clicker
                </Typography>
                <StatusDescription />
                <Actions />
                <ResourceDisplay />
                <MessageDisplay />
            </div>
            <Grid
                container={true}
                style={{
                    height: "34vh"
                }}
            >
                <Grid
                    item={true}
                    xs={6}
                    style={{
                        position: "relative"
                    }}
                >
                    <UpgradePanel />
                </Grid>
                <Grid
                    item={true}
                    xs={6}
                    style={{
                        position: "relative"
                    }}
                >
                    <ServantsPanel />
                </Grid>
            </Grid>
        </>
    );
};
