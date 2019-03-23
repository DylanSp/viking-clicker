import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { FunctionComponent } from "react";
import { DistanceDisplay } from "./DistanceDisplay";
import { TargetDisplay } from "./TargetDisplay";

export const RaidingPanel: FunctionComponent = () => {
    return (
        <div style={{textAlign: "center"}}>
            <Typography variant="h4">
                Raiding
            </Typography>
            <DistanceDisplay />
            <TargetDisplay />
        </div>
    );
};
