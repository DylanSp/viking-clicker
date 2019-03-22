// for actions that can be repeatedly clicked, i.e. NOT raiding
import * as React from "react";
import { FunctionComponent } from "react";

export interface ActionClickerProps {
    actionName: string;
}

export const ActionClicker: FunctionComponent<ActionClickerProps> = (props) => {
    return (
        <>
            {props.actionName}
        </>
    );
};
