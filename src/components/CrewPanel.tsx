import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { FunctionComponent } from "react";
import { CrewDisplay } from "./CrewDisplay";

export const CrewPanel: FunctionComponent = () => {
    return (
        <div style={{textAlign: "center"}}>
            <Typography variant="h4">
                Crew
            </Typography>
            <CrewDisplay />
        </div>
    );
};
