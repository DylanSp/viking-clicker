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
    handleChop: () => void;
    resources: Resources;
}

export const MainPanel: FunctionComponent<MainPanelProps> = (props) => {
    return (
        <div
            style={{
                textAlign: "center",
                height: "100vh"
            }}
        >
            <Typography variant="h3" gutterBottom={true}>
                Viking Clicker
            </Typography>
            <StatusDescription />
            <Actions handlePlow={props.handlePlow} handleChop={props.handleChop} />
            <ResourceDisplay resources={props.resources} />
        </div>
    );
};
