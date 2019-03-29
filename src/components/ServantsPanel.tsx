import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { FunctionComponent } from "react";
import { Servants } from "../game/Servants";
import { ServantsDisplay } from "./ServantsDisplay";

export interface ServantsPanelProps {
    servants: Servants;
    servantCost: number;
    hireServant: () => void;
}

export const ServantsPanel: FunctionComponent<ServantsPanelProps> = (props) => {
    return (
        <div style={{textAlign: "center"}}>
            <Typography variant="h4">
                Servants
            </Typography>
            <ServantsDisplay {...props} />
        </div>
    );
};
