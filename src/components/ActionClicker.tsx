// for actions that can be repeatedly clicked, i.e. NOT raiding

import Button from "@material-ui/core/Button";
import * as React from "react";
import { FunctionComponent } from "react";

export interface ActionClickerProps {
    actionName: string;
    handleAction: () => void;
}

export const ActionClicker: FunctionComponent<ActionClickerProps> = (props) => {
    return (
        <Button variant="contained" onClick={props.handleAction}>
            {props.actionName}
        </Button>
    );
};
