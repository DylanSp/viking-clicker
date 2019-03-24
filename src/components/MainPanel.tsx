import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { FunctionComponent } from "react";
import { Actions } from "./Actions";
import { ResourceDisplay } from "./ResourceDisplay";
import { StatusDescription } from "./StatusDescription";

export const MainPanel: FunctionComponent = () => {
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
            <Actions />
            <ResourceDisplay />
        </div>
    );
};
