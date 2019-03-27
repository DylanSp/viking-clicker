import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { FunctionComponent } from "react";
import { Resources } from "../game/Resources";
import { Actions } from "./Actions";
import { ResourceDisplay } from "./ResourceDisplay";
import { StatusDescription } from "./StatusDescription";

export interface MainPanelProps {
    handlePlow: () => void;
    resources: Resources;
}

export const MainPanel: FunctionComponent<MainPanelProps> = (props) => {
    return (
        <Grid container={true} direction="column">
            <Grid item={true} xs={1}>
                <Typography variant="h3" gutterBottom={true}>
                    Viking Clicker
                </Typography>
            </Grid>
            <Grid item={true} xs={2}>
                <StatusDescription />
            </Grid>
            <Grid item={true} xs={6}>
                <Actions handlePlow={props.handlePlow} />
            </Grid>
            <Grid item={true} xs={3}>
                <ResourceDisplay resources={props.resources} />
            </Grid>
        </Grid>
    );

    /*
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                height: "100vh"
            }}
        >
            <Typography variant="h3" gutterBottom={true}>
                Viking Clicker
            </Typography>
            <StatusDescription />
            <Actions handlePlow={props.handlePlow} />
            <ResourceDisplay resources={props.resources} />
        </div>
    );
    */
};
