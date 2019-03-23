import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { FunctionComponent } from "react";
import { UpgradeDisplay } from "./UpgradeDisplay";

export const UpgradePanel: FunctionComponent = () => {
    return (
        <div style={{textAlign: "center"}}>
            <Typography variant="h4">
                Upgrades
            </Typography>
            <UpgradeDisplay />
        </div>
    );
};
