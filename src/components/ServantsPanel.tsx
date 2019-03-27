import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { FunctionComponent } from "react";
import { ServantsDisplay } from "./ServantsDisplay";

export const ServantsPanel: FunctionComponent = () => {
    return (
        <div style={{textAlign: "center"}}>
            <Typography variant="h4">
                Servants
            </Typography>
            <ServantsDisplay />
        </div>
    );
};
