import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { FunctionComponent } from "react";
import { Servants } from "../game/Servants";

export interface ServantsDisplayProps {
    servants: Servants;
    servantCost: number;
    hireServant: () => void;
}

export const ServantsDisplay: FunctionComponent<ServantsDisplayProps> = (props) => {
    return (
        <>
            <Button variant="outlined" onClick={props.hireServant}>
                Hire: {props.servantCost} Food
            </Button>
            <Typography>
                Total hired servants: {props.servants.farmhands}
            </Typography>
        </>
    );
};
