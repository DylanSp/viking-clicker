import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { FunctionComponent } from "react";
import { WorkerDisplay } from "./WorkerDisplay";

export const WorkerPanel: FunctionComponent = () => {
    return (
        <div style={{textAlign: "center"}}>
            <Typography variant="h4">
                Servants
            </Typography>
            <WorkerDisplay />
        </div>
    );
};
